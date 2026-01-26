---
type: enum
name: swRevolveType_e
description: Revolve feature types.
member_count: 6
docset: swconst
categories:
  - constants
used_by: []
---

# swRevolveType_e

Revolve feature types.

## Values

| Member | Value | Description |
|---|---|---|
| `swRevolveTypeMidPlane` | 1 | = Mid-plane revolution |
| `swRevolveTypeMidPlane360Degrees` | 4 | = Create revolve: mid-plane revolution with a 360-degree angle - or - Edit revolve: mid-plane revolution with a 360-degree angle; if you use IRevolveFeatureData2::SetRevolutionAngle , then the 360-degree angle is overwritten |
| `swRevolveTypeOneDirection` | 0 | = One-direction revolution |
| `swRevolveTypeOneDirection360Degrees` | 3 | = Create revolve: one direction revolution with a 360-degree angle - or - Edit revolve: one direction revolution with a 360-degree angle; if you use IRevolveFeatureData2::SetRevolutionAngle , then the 360-degree angle is overwritten |
| `swRevolveTypeTwoDirection` | 2 | = Two direction revolution |
| `swRevolveTypeTwoDirection360Degrees` | 5 | = Create and edit revolves: two direction revolution |