---
type: enum
name: swInsertSlicingError_e
description: Error codes for slicing insertion. Bitmask.
member_count: 9
docset: swconst
categories:
  - constants
used_by: []
---

# swInsertSlicingError_e

Error codes for slicing insertion. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swInsertSlicingError_EntitiesCannotFormPlane` | 0 | x10 = Point and provided line overlap |
| `swInsertSlicingError_GenericError` | 0 | x1 = Slicing inserted successfully |
| `swInsertSlicingError_InvalidNumberOfPlanes` | 0 | x80 = Number of planes must be <= 100 |
| `swInsertSlicingError_InvalidSlicesToGenerateOption` | 0 | x4 = Slicing method specified in ISlicingData::SlicesToGenerate is not valid |
| `swInsertSlicingError_InvalidSlicingData` | 0 | x40 = Null or invalid slicing data |
| `swInsertSlicingError_InvalidSlicingPlaneEntities` | 0 | x8 = None or invalid type of entities specified |
| `swInsertSlicingError_InvalidTotalAngle` | 0 | x2 = ( ISlicingData::NumberOfPlanes * ISlicingData::Offset ) is invalid |
| `swInsertSlicingError_NoBodiesInsideBox` | 0 | x20 = No bodies are inside the bounding box |
| `swInsertSlicingError_NoError` | 0 | x0 = Slicing inserted successfully |