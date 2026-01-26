---
type: enum
name: swCollisionGroupApplyTransformErrors_e
description: Errors when applying transforms to collision groups.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swCollisionGroupApplyTransformErrors_e

Errors when applying transforms to collision groups.

## Values

| Member | Value | Description |
|---|---|---|
| `swCollisionGroupApplyTransformErrors_GroupRemoved` | 3 | = The specified collision group is no longer available |
| `swCollisionGroupApplyTransformErrors_InvalidTransforms` | 2 | = Array of transforms contains a null pointer for one or more elements or a pointer to an object other than an IMathTransform |
| `swCollisionGroupApplyTransformErrors_None` | 0 |  |
| `swCollisionGroupApplyTransformErrors_SizeMismatch` | 1 | = Array of transforms does not contain one IMathTransform for each component in the collision group |