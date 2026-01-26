---
type: method
interface: IModelDoc2
member: InsertCutSurface
returns: void
parameters:
  -
    name: Flip
    type: System.Boolean
    description: True to flip the direction, false to not
  -
    name: KeepPieceIndex
    type: System.Int32
    description: Piece to keep if there is ambiguity
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISurfaceCutFeatureData
keywords:
  - insertcutsurface
  - imodeldoc2
  - model
  - doc2
  - insert
  - cut
  - surface
  - flip
  - boolean
  - keep
  - piece
  - index
  - int32
  - void
---

# IModelDoc2.InsertCutSurface

Obsolete. Superseded by IFeatureManager::InsertCutSurface.

## Signature

```csharp
void InsertCutSurface( 
   System.Boolean
Flip
,
   System.Int32
KeepPieceIndex
)
```
## Parameters

- `Flip` (System.Boolean): True to flip the direction, false to not
- `KeepPieceIndex` (System.Int32): Piece to keep if there is ambiguity

## Return Value

Unknown.

## Remarks

When there is ambiguity in the result of a cut, KeepPieceIndex is used to resolve which of the possible results is used. This can be set to -1 if there is no ambiguity; otherwise, it should be the index of the result, starting from 0 (up to one less than the possible number of outcomes).

## See Also

- `ISurfaceCutFeatureData`