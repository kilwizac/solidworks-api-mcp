---
type: enum
name: swCollisionGroupSetComponentsErrors_e
description: Errors when setting components in collision groups.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swCollisionGroupSetComponentsErrors_e

Errors when setting components in collision groups.

## Values

| Member | Value | Description |
|---|---|---|
| `swCollisionGroupSetComponentsErrors_ComponentsAddedElsewhere` | 2 | = One or more components have already been added to a different collision group |
| `swCollisionGroupSetComponentsErrors_GroupRemoved` | 3 | = The specified collision group is no longer available |
| `swCollisionGroupSetComponentsErrors_InvalidComponents` | 1 | = Components from a different assembly cannot be included in this collision detection |
| `swCollisionGroupSetComponentsErrors_None` | 0 |  |