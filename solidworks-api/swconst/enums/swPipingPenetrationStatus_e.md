---
type: enum
name: swPipingPenetrationStatus_e
description: Piping pentration status.
member_count: 10
docset: swconst
categories:
  - constants
used_by: []
---

# swPipingPenetrationStatus_e

Piping pentration status.

## Values

| Member | Value | Description |
|---|---|---|
| `swPenetrationFailed` | 1 | = Unspecified error |
| `swPenetrationFailedAlreadyPenetrating` | 8 | = Pipe is already penetrating |
| `swPenetrationFailedBadFitting` | 7 | = Pipe cannot be found or fitting to pierce cannot be found |
| `swPenetrationFailedBadSelection` | 6 | = Sketch point cannot be used for penetration |
| `swPenetrationFailedDllNotLoaded` | 3 | = Routing not installed |
| `swPenetrationFailedMultiBody` | 9 | = Pipe cannot pentrate multibody |
| `swPenetrationFailedNoSelection` | 4 | = No sketch point selected |
| `swPenetrationFailedNotRouting` | 5 | = Sketch is not a routing sketch |
| `swPenetrationFailedPipeTooWide` | 2 | = Pipe too wide to cut other pipe |
| `swPenetrationSucceeded` | 0 | = Okay |