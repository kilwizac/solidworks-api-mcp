---
type: method
interface: ISurfaceTrimFeatureData
member: ISetPiecesToKeep
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of pieces to keep
  -
    name: BodyArr
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of pieces to keep of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceTrimFeatureData.GetPiecesToKeepCount
  - ISurfaceTrimFeatureData.IGetPiecesToKeep
  - ISurfaceTrimFeatureData.PiecesToKeep
keywords:
  - isetpiecestokeep
  - isurfacetrimfeaturedata
  - surface
  - trim
  - feature
  - data
  - pieces
  - keep
  - count
  - int32
  - body
  - arr
  - body2
  - void
---

# ISurfaceTrimFeatureData.ISetPiecesToKeep

Sets the pieces to keep for this surface trim feature.

## Signature

```csharp
void ISetPiecesToKeep( 
   System.Int32
Count
,
   ref Body2
BodyArr
)
```
## Parameters

- `Count` (System.Int32): Number of pieces to keep
- `BodyArr` (Body2): in-process, unmanaged C++: Pointer to an array of pieces to keep of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceTrimFeatureData.GetPiecesToKeepCount`
- `ISurfaceTrimFeatureData.IGetPiecesToKeep`
- `ISurfaceTrimFeatureData.PiecesToKeep`