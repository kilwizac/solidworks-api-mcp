---
type: method
interface: ISurfaceTrimFeatureData
member: GetPiecesToKeepCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceTrimFeatureData.ISetPiecesToKeep
  - ISurfaceTrimFeatureData.PiecesToKeep
keywords:
  - getpiecestokeepcount
  - isurfacetrimfeaturedata
  - surface
  - trim
  - feature
  - data
  - pieces
  - keep
  - count
  - int32
---

# ISurfaceTrimFeatureData.GetPiecesToKeepCount

Gets the number of pieces to keep for this surface trim feature.

## Signature

```csharp
System.Int32 GetPiecesToKeepCount()
```
## Parameters

None.

## Return Value

Number of pieces to keep

## Remarks

Call this method before calling
ISurfaceTrimFeatureData::IGetPiecesToKeep
to get the size of the array for that method.

## Examples

- ISurfaceTrimFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfaceTrimFeatureData)

## See Also

- `ISurfaceTrimFeatureData.ISetPiecesToKeep`
- `ISurfaceTrimFeatureData.PiecesToKeep`