---
type: method
interface: IHoleSeriesFeatureData
member: IGetComponents
returns: Component2
parameters:
  -
    name: NCount
    type: System.Int32
    description: Number of components in this hole series
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IHoleSeriesFeatureData.GetComponents
keywords:
  - igetcomponents
  - iholeseriesfeaturedata
  - hole
  - series
  - feature
  - data
  - components
  - count
  - int32
  - component2
---

# IHoleSeriesFeatureData.IGetComponents

Obsolete. Superseded by IHoleSeriesFeatureData2::IGetComponents.

## Signature

```csharp
Component2 IGetComponents( 
   System.Int32
NCount
)
```
## Parameters

- `NCount` (System.Int32): Number of components in this hole series

## Return Value

in-process, unmanaged C++: Pointer to an array of components in this hole series VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IHoleSeriesFeatureData::GetComponentsCount
to get the value for NCount.

## See Also

- `IHoleSeriesFeatureData.GetComponents`