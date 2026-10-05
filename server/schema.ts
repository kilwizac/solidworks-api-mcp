import type { ToolInputSchema } from "./types";
import { asRecord } from "./util";

/** Returns what is wrong with `value` for a property spec, or null if it conforms. */
function describeSchemaProblem(spec: Record<string, unknown>, value: unknown): string | null {
  switch (spec.type) {
    case "string": {
      if (typeof value !== "string") {
        return "must be a string";
      }
      if (Array.isArray(spec.enum) && !spec.enum.includes(value)) {
        return `must be one of: ${spec.enum.join(", ")}`;
      }
      return null;
    }
    case "boolean":
      return typeof value === "boolean" ? null : "must be a boolean";
    case "integer": {
      // Numeric strings (e.g. "10") are still coerced downstream by parse_limit.
      const isInteger =
        typeof value === "number"
          ? Number.isInteger(value)
          : typeof value === "string" && /^\s*-?\d+\s*$/.test(value);
      if (!isInteger) {
        return "must be an integer";
      }
      const number = Number(value);
      const minimum = typeof spec.minimum === "number" ? spec.minimum : -Infinity;
      const maximum = typeof spec.maximum === "number" ? spec.maximum : Infinity;
      if (number >= minimum && number <= maximum) {
        return null;
      }
      if (Number.isFinite(minimum) && Number.isFinite(maximum)) {
        return `must be between ${minimum} and ${maximum}`;
      }
      return Number.isFinite(minimum) ? `must be at least ${minimum}` : `must be at most ${maximum}`;
    }
    case "array": {
      if (!Array.isArray(value)) {
        return "must be an array";
      }
      const itemType = asRecord(spec.items).type;
      if (itemType === "string" && !value.every((entry) => typeof entry === "string")) {
        return "must be an array of strings";
      }
      return null;
    }
    default:
      return null;
  }
}

/**
 * Checks tool arguments against the (small JSON Schema subset of the) tool's
 * input schema. `null` counts as "not provided". Returns one message per problem.
 */
export function validateArguments(
  schema: ToolInputSchema,
  args: Record<string, unknown>,
): string[] {
  const problems: string[] = [];
  for (const name of schema.required ?? []) {
    if (args[name] === undefined || args[name] === null) {
      problems.push(`${name} is required`);
    }
  }
  for (const [name, spec] of Object.entries(schema.properties)) {
    const value = args[name];
    if (value === undefined || value === null) {
      continue;
    }
    const problem = describeSchemaProblem(asRecord(spec), value);
    if (problem) {
      problems.push(`${name} ${problem}`);
    }
  }
  return problems;
}
