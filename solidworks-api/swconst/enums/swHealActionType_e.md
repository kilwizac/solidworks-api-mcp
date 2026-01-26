---
type: enum
name: swHealActionType_e
description: Healing actions.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swHealActionType_e

Healing actions.

## Values

| Member | Value | Description |
|---|---|---|
| `swHealAction_Cap` | 2 | = Finds a surface where all edges of the wound lie and attaches this to a face and covers the wound; SOLIDWORKS creates a new face to cover the wound |
| `swHealAction_GrowParent` | 1 | = Extends the parent faces around the wound to cover it |
| `swHealAction_Shrink` | 0 | = If extending faces does not yield a solution, then SOLIDWORKS tries to shrink the faces |