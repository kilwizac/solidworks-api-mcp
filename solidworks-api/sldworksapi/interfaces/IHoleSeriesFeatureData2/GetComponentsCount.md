---
type: method
interface: IHoleSeriesFeatureData2
member: GetComponentsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IHoleSeriesFeatureData2.GetComponents
keywords:
  - getcomponentscount
  - iholeseriesfeaturedata2
  - hole
  - series
  - feature
  - data2
  - components
  - count
  - int32
---

# IHoleSeriesFeatureData2.GetComponentsCount

Gets the number of components in this hole series.

## Signature

```csharp
System.Int32 GetComponentsCount()
```
## Parameters

None.

## Return Value

Number of components in this hole series

## Remarks

Call this method before calling
IHoleSeriesFeatureData2::IGetComponents
to get the size of the array for that method.

## Examples

- IHoleSeriesFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHoleSeriesFeatureData2)

## See Also

- `IHoleSeriesFeatureData2.GetComponents`