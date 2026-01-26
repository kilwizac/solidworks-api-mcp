---
type: method
interface: IHoleSeriesFeatureData
member: GetComponentsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IHoleSeriesFeatureData.GetComponents
keywords:
  - getcomponentscount
  - iholeseriesfeaturedata
  - hole
  - series
  - feature
  - data
  - components
  - count
  - int32
---

# IHoleSeriesFeatureData.GetComponentsCount

Obsolete. Superseded by IHoleSeriesFeatureData2::GetComponentsCount.

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
IHoleSeriesFeatureData::IGetComponents
to get the size of the array for that method.

## See Also

- `IHoleSeriesFeatureData.GetComponents`