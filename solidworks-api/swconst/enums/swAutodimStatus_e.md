---
type: enum
name: swAutodimStatus_e
description: Statuses returned by ISketch::AutoDimension2 and IDrawingDoc::AutoDimension.
member_count: 19
docset: swconst
categories:
  - constants
used_by: []
---

# swAutodimStatus_e

Statuses returned by ISketch::AutoDimension2 and IDrawingDoc::AutoDimension.

## Values

| Member | Value | Description |
|---|---|---|
| `swAutodimStatus3DSketchNotSupported` | 5 | = Cannot autodimension a 3D sketch |
| `swAutodimStatusAlgorithmFailed` | 17 | = Unspecified algorithm failure |
| `swAutodimStatusBadOptionValue` | 1 | = An option value for an argument is out of range |
| `swAutodimStatusCenterlineNotAllowed` | 10 | = The centerline scheme is not valid for sketches that cannot be revolved to create valid features |
| `swAutodimStatusDatumLineNotCenterline` | 14 | = The datum must be a centerline for the centerline scheme |
| `swAutodimStatusDatumLineNotHorizontal` | 16 | = If the sketch line is a datum, it must be horizontal for horizontal dimensions |
| `swAutodimStatusDatumLineNotVertical` | 15 | = If the sketch line is a datum, it must be vertical for vertical dimension |
| `swAutodimStatusDatumNotSupplied` | 11 | = No datum was selected for either the horizontal or vertical dimensioning schemes |
| `swAutodimStatusDatumNotUnique` | 12 | = More than one datum was selected for either the horizontal or vertical dimensioning schemes |
| `swAutodimStatusDatumNotValidType` | 13 | = One of the selected datums is not valid. Valid types are sketch points and sketch lines |
| `swAutodimStatusDocTypeNotSupported` | 3 | = Only part and assemblies documents are supported |
| `swAutodimStatusEntitiesNotValid` | 9 | = The entitiesToDimension argument has the value of swAutodimEntitiesSelected , but the marked entities are not valid |
| `swAutodimStatusNoActiveDoc` | 2 | = No active document |
| `swAutodimStatusNoActiveSketch` | 4 | = Can only autodimension an active sketch |
| `swAutodimStatusNoEntities` | 8 | = The entitiesToDimension argument has the value of swAutodimEntitiesSelected , but no entities were selected and marked with the value swAutodimMarkEntities |
| `swAutodimStatusSketchIsEmpty` | 6 | = Cannot autodimension an empty sketch |
| `swAutodimStatusSketchIsOverDefined` | 7 | = Cannot autodimension an over defined sketch |
| `swAutodimStatusSketchNoSolutionFound` | 18 | = Cannot autodimension a sketch for which there is no solution |
| `swAutodimStatusSuccess` | 0 | = Sketch successfully dimensioned |