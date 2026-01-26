---
type: enum
name: swReverseEndPointTangentResult_e
description: Result codes for ISketchManager::ReverseEndPointTangent.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swReverseEndPointTangentResult_e

Result codes for ISketchManager::ReverseEndPointTangent.

## Values

| Member | Value | Description |
|---|---|---|
| `swReverseEndPointTangent_ConstraintConflict` | 2 | = Reversing the end point tangent direction creates a conflict with existing constraints |
| `swReverseEndPointTangent_InvalidSelection` | 1 | = Select a valid end point tangent direction entity |
| `swReverseEndPointTangent_Success` | 0 |  |