---
type: method
interface: IHoleSeriesFeatureData
member: GetSketchPointsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - sketches
related:
  - IHoleSeriesFeatureData.GetSketchPoints
keywords:
  - getsketchpointscount
  - iholeseriesfeaturedata
  - hole
  - series
  - feature
  - data
  - sketch
  - points
  - count
  - int32
---

# IHoleSeriesFeatureData.GetSketchPointsCount

Obsolete. Superseded by IHoleSeriesFeatureData2::GetSketchPointsCount.

## Signature

```csharp
System.Int32 GetSketchPointsCount()
```
## Parameters

None.

## Return Value

Number of center-hole sketch points in this hole series

## Remarks

Call this method before calling
IHoleSeriesFeatureData::IGetSketchPoints
to get the size of the array for that method.

## See Also

- `IHoleSeriesFeatureData.GetSketchPoints`