---
type: method
interface: IFeatureManager
member: InsertCutSurface
returns: Feature
parameters:
  -
    name: Flip
    type: System.Boolean
    description: True to flip the direction of the cut, false to not
  -
    name: KeepPieceIndex
    type: System.Int32
    description: Piece to keep if there is ambiguity (see Remarks )
  -
    name: UseFeatScope
    type: System.Boolean
    description: True to cut only the bodies passed to Bodies that intersect with the cut, false to cut all bodies that intersect with the cut
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True to automatically cut all bodies that intersect with the cut, false to cut only the bodies passed to Bodies that intersect with the cut
  -
    name: Bodies
    type: System.Object
    description: Array of specific bodies that intersect with the cut UseFeatScope = true UseAutoSelect = false - or - Empty array indicating to cut all bodies that intersect with the cut UseFeatScope = false UseAutoSelect = true
  -
    name: Error
    type: System.Int32
    description: Status of the cut as defined in swSurfaceCutFeatureError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceCutFeatureData
keywords:
  - cut
  - surface
  - feature
  - see
  - also
  - ifeature
  - isurface
  - isurfacecutfeaturedata
  - insertcutsurface
  - ifeaturemanager
  - manager
  - insert
  - flip
  - boolean
  - keep
  - piece
  - index
  - int32
  - use
  - feat
  - scope
  - auto
  - select
  - bodies
  - object
  - error
  - vb
  - net
  - vba
---

# IFeatureManager.InsertCutSurface

Inserts a surface-cut feature using the preselected surface or plane.

## Signature

```csharp
Feature InsertCutSurface( 
   System.Boolean
Flip
,
   System.Int32
KeepPieceIndex
,
   System.Boolean
UseFeatScope
,
   System.Boolean
UseAutoSelect
,
   System.Object
Bodies
,
   out System.Int32
Error
)
```
## Parameters

- `Flip` (System.Boolean): True to flip the direction of the cut, false to not
- `KeepPieceIndex` (System.Int32): Piece to keep if there is ambiguity (see Remarks )
- `UseFeatScope` (System.Boolean): True to cut only the bodies passed to Bodies that intersect with the cut, false to cut all bodies that intersect with the cut
- `UseAutoSelect` (System.Boolean): True to automatically cut all bodies that intersect with the cut, false to cut only the bodies passed to Bodies that intersect with the cut
- `Bodies` (System.Object): Array of specific bodies that intersect with the cut UseFeatScope = true UseAutoSelect = false - or - Empty array indicating to cut all bodies that intersect with the cut UseFeatScope = false UseAutoSelect = true
- `Error` (System.Int32): Status of the cut as defined in swSurfaceCutFeatureError_e

## Return Value

Surface-cut feature

## Remarks

When there is ambiguity in the result of a cut, KeepPieceIndex is used to resolve which of the possible results is used. This can be set to -1 if there is no ambiguity; otherwise, it should be the index of the result, starting from 0 (up to one less than the possible number of outcomes).

## Examples

- Insert Surface-cut Feature (C#) (Insert_Surface-cut_Feature_Example_CSharp.htm)
- Insert Surface-cut Feature (VB.NET) (Insert_Surface-cut_Feature_Example_VBNET.htm)
- Insert Surface-cut Feature (VBA) (Insert_Surface-cut_Feature_Example_VB.htm)

## See Also

- `ISurfaceCutFeatureData`