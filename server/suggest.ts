/** Edit distance, giving up (returning `limit + 1`) once it can't beat `limit`. */
function editDistance(left: string, right: string, limit: number): number {
  if (Math.abs(left.length - right.length) > limit) {
    return limit + 1;
  }
  let previous = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let i = 1; i <= left.length; i += 1) {
    const current = [i];
    let rowMin = i;
    for (let j = 1; j <= right.length; j += 1) {
      const cost = left[i - 1] === right[j - 1] ? 0 : 1;
      const value = Math.min(
        (previous[j] as number) + 1,
        (current[j - 1] as number) + 1,
        (previous[j - 1] as number) + cost,
      );
      current.push(value);
      rowMin = Math.min(rowMin, value);
    }
    if (rowMin > limit) {
      return limit + 1;
    }
    previous = current;
  }
  return previous[right.length] as number;
}

function squash(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * "Did you mean" candidates for a mistyped name: prefix/substring matches
 * first, then names within a small edit distance.
 */
export function suggestNames(
  input: string | undefined,
  candidates: Iterable<string>,
  max = 5,
): string[] {
  const needle = squash(input ?? "");
  if (needle.length === 0) {
    return [];
  }
  const maxDistance = Math.max(1, Math.min(3, Math.floor(needle.length / 4)));

  const ranked: Array<{ name: string; rank: number; distance: number }> = [];
  for (const name of candidates) {
    const hay = squash(name);
    if (hay === needle) {
      ranked.push({ name, rank: 0, distance: 0 });
    } else if (needle.length >= 3 && hay.startsWith(needle)) {
      ranked.push({ name, rank: 1, distance: hay.length - needle.length });
    } else if (needle.length >= 3 && hay.includes(needle)) {
      ranked.push({ name, rank: 2, distance: hay.length - needle.length });
    } else {
      const distance = editDistance(needle, hay, maxDistance);
      if (distance <= maxDistance) {
        ranked.push({ name, rank: 3, distance });
      }
    }
  }

  return ranked
    .sort(
      (left, right) =>
        left.rank - right.rank ||
        left.distance - right.distance ||
        left.name.length - right.name.length ||
        left.name.localeCompare(right.name),
    )
    .slice(0, max)
    .map((entry) => entry.name);
}
