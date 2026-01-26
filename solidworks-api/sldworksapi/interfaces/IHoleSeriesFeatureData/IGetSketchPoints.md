---
type: method
interface: IHoleSeriesFeatureData
member: IGetSketchPoints
returns: SketchPoint
parameters:
  -
    name: NCount
    type: System.Int32
    description: Number of center-hole sketch points
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - sketches
related:
  - IHoleSeriesFeatureData.GetSketchPoints
keywords:
  - igetsketchpoints
  - iholeseriesfeaturedata
  - hole
  - series
  - feature
  - data
  - sketch
  - points
  - count
  - int32
  - point
---

# IHoleSeriesFeatureData.IGetSketchPoints

Obsolete. Superseded by IHoleSeriesFeatureData2::IGetSketchPoints.

## Signature

```csharp
SketchPoint IGetSketchPoints( 
   System.Int32
NCount
)
```
## Parameters

- `NCount` (System.Int32): Number of center-hole sketch points

## Return Value

in-process, unmanaged C++: Pointer to an array of center-hole sketch points VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IHoleSeriesFeatureData::GetSketchPointsCount
to get the value for NCount.

## See Also

- `IHoleSeriesFeatureData.GetSketchPoints`