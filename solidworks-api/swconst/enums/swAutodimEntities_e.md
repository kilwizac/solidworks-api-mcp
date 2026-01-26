---
type: enum
name: swAutodimEntities_e
description: Entities to dimension ISketch::AutoDimension2 and IDrawingDoc::AutoDimension.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swAutodimEntities_e

Entities to dimension ISketch::AutoDimension2 and IDrawingDoc::AutoDimension.

## Values

| Member | Value | Description |
|---|---|---|
| `swAutodimEntitiesAll` | 1 | = Autodimensions all of the supported entities in the sketch |
| `swAutodimEntitiesBasedOnPreselect` | 0 | = SOLIDWORKS to figure out what to do based on the selected supported entities marked with swAutodimMarkEntities . If any exist, then autodimension them, just like swAutodimEntitiesSelected. If none exist, then autodimension all supported entities, just like swAutodimEntitiesAll |
| `swAutodimEntitiesSelected` | 2 | = Autodimensions selected supported entities marked with swAutodimMarkEntities . If none exist, then autodimensions all supported entities, just like swAutodimEntitiesAll |