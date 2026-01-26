---
type: method
interface: ISurfaceTrimFeatureData
member: IGetPiecesToKeep
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of pieces to keep
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceTrimFeatureData.ISetPiecesToKeep
  - ISurfaceTrimFeatureData.PiecesToKeep
keywords:
  - igetpiecestokeep
  - isurfacetrimfeaturedata
  - surface
  - trim
  - feature
  - data
  - pieces
  - keep
  - count
  - int32
  - body2
---

# ISurfaceTrimFeatureData.IGetPiecesToKeep

Gets the pieces to keep for this surface trim feature.

## Signature

```csharp
Body2 IGetPiecesToKeep( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of pieces to keep

## Return Value

in-process, unmanaged C++: Pointer to an array of pieces to keep of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISurfaceTrimFeatureData::GetPiecesToKeepCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceTrimFeatureData.ISetPiecesToKeep`
- `ISurfaceTrimFeatureData.PiecesToKeep`