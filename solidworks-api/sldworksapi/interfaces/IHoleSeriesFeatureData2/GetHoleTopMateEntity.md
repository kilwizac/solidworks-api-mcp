---
type: method
interface: IHoleSeriesFeatureData2
member: GetHoleTopMateEntity
returns: System.Object
parameters:
  -
    name: HoleInstance
    type: System.Int32
    description: Index number of the hole whose entity you want
  -
    name: HoleType
    type: System.Int16
    description: Type of hole as defined by swWzdHoleTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IHoleSeriesFeatureData2.GetHoleBottomMateEntity
  - IHoleSeriesFeatureData2.IGetHoleBottomMateEntity
  - IHoleSeriesFeatureData2.IGetHoleTopMateEntity
keywords:
  - getholetopmateentity
  - iholeseriesfeaturedata2
  - hole
  - series
  - feature
  - data2
  - top
  - mate
  - entity
  - instance
  - int32
  - type
  - int16
  - object
---

# IHoleSeriesFeatureData2.GetHoleTopMateEntity

Gets the entity to which the top of the hole is mated in this hole series.

## Signature

```csharp
System.Object GetHoleTopMateEntity( 
   System.Int32
HoleInstance
,
   System.Int16
HoleType
)
```
## Parameters

- `HoleInstance` (System.Int32): Index number of the hole whose entity you want
- `HoleType` (System.Int16): Type of hole as defined by swWzdHoleTypes_e

## Return Value

Entity to which the top of the hole is mated

## See Also

- `IHoleSeriesFeatureData2.GetHoleBottomMateEntity`
- `IHoleSeriesFeatureData2.IGetHoleBottomMateEntity`
- `IHoleSeriesFeatureData2.IGetHoleTopMateEntity`