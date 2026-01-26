---
type: enum
name: swSuppressionError_e
description: Suppression errors.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swSuppressionError_e

Suppression errors.

## Values

| Member | Value | Description |
|---|---|---|
| `swSuppressionBadComponent` | 0 | = Component object is no longer valid; for example, if a configuration changed |
| `swSuppressionBadState` | 1 | = Invalid state was specified |
| `swSuppressionChangeFailed` | 3 | = Change failed, even though the arguments were okay |
| `swSuppressionChangeOk` | 2 | = State was changed |