---
type: method
interface: IHoleSeriesFeatureData2
member: GetSketchPointsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - IHoleSeriesFeatureData2.GetSketchPoints
keywords:
  - getsketchpointscount
  - iholeseriesfeaturedata2
  - hole
  - series
  - feature
  - data2
  - sketch
  - points
  - count
  - int32
---

# IHoleSeriesFeatureData2.GetSketchPointsCount

Gets the number of center-hole sketch points in this hole series.

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

## Examples

- IHoleSeriesFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHoleSeriesFeatureData2)

## See Also

- `IHoleSeriesFeatureData2.GetSketchPoints`