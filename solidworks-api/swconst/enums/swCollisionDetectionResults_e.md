---
type: enum
name: swCollisionDetectionResults_e
description: Collision detection results.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swCollisionDetectionResults_e

Collision detection results.

## Values

| Member | Value | Description |
|---|---|---|
| `swCollisionDetectionResult_CollisionDetected` | 1 |  |
| `swCollisionDetectionResult_FailedNotEnoughGroups` | -1 | = You must define more than one collision group containing two or more unsuppressed components in different collision groups |
| `swCollisionDetectionResult_NoCollision` | 0 |  |