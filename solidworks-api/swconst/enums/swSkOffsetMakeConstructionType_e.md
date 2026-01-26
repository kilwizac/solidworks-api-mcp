---
type: enum
name: swSkOffsetMakeConstructionType_e
description: Convert original and offset sketch entities to construction sketch entities.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swSkOffsetMakeConstructionType_e

Convert original and offset sketch entities to construction sketch entities.

## Values

| Member | Value | Description |
|---|---|---|
| `swSkOffsetDontMakeConstruction` | 0 | = Do not the convert original or offset sketch entities to construction sketch entities |
| `swSkOffsetMakeBothConstruction` | 3 | = Convert the original and offset sketch entities to construction sketch entities |
| `swSkOffsetMakeOffsConstruction` | 2 | = Convert only the offset sketch entities to construction sketch entities |
| `swSkOffsetMakeOrigConstruction` | 1 | = Convert only the original sketch entities to construction sketch entities |