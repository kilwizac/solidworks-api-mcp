---
type: enum
name: swFaceCoincidentResult_e
description: Face coincidence results.
member_count: 9
docset: swconst
categories:
  - constants
used_by: []
---

# swFaceCoincidentResult_e

Face coincidence results.

## Values

| Member | Value | Description |
|---|---|---|
| `swFaceCoincident_FalseBoundary1` | 3 | = The two faces are not coincident. At least one point on the boundary of face 1 is not coincident with the boundary of face 2. |
| `swFaceCoincident_FalseBoundary2` | 4 | = The two faces are not coincident. At least one point on the boundary of face 2 is not coincident with the boundary of face 1. |
| `swFaceCoincident_FalseFace1` | 5 | = The two faces are not coincident. At least one point on face 1 is not coincident with face 2. |
| `swFaceCoincident_FalseFace2` | 6 | = The two faces are not coincident. At least one point on face 2 is not coincident with face 1. |
| `swFaceCoincident_FalseSurface` | 7 | = At least one of the faces does not have a surface attached. |
| `swFaceCoincident_FalseTopology` | 2 | = The two faces are not coincident. The number of holes are different. |
| `swFaceCoincident_True` | 0 | = The faces are coincident to the specified tolerance. |
| `swFaceCoincident_TrueReversed` | 1 | = The two faces are coincident to the specified tolerance, but their normals are reversed. |
| `swFaceCoincidentUnknownResult` | -1 | = Unknown |