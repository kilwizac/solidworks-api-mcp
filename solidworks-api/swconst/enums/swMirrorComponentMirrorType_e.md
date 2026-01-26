---
type: enum
name: swMirrorComponentMirrorType_e
description: Mirror positions for mirroring components.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swMirrorComponentMirrorType_e

Mirror positions for mirroring components.

## Values

| Member | Value | Description |
|---|---|---|
| `swMirrorType_CenterOfBoundingBox` | 0 | = Positions the mirror so that the center of a bounding box for the selected components is mirrored about the mirror plane |
| `swMirrorType_CenterOfMass` | 1 | = Positions the mirror so that the center of mass of the selected components is mirrored about the mirror plane |
| `swMirrorType_ComponentOrigin` | 2 | = Positions the mirror so that the component origins are mirrored about the mirror plane |