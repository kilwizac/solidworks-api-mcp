---
type: method
interface: IHoleSeriesFeatureData2
member: IGetHoleBottomMateEntity
returns: Entity
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
  - IHoleSeriesFeatureData2.GetHoleTopMateEntity
  - IHoleSeriesFeatureData2.IGetHoleTopMateEntity
keywords:
  - igetholebottommateentity
  - iholeseriesfeaturedata2
  - hole
  - series
  - feature
  - data2
  - bottom
  - mate
  - entity
  - instance
  - int32
  - type
  - int16
---

# IHoleSeriesFeatureData2.IGetHoleBottomMateEntity

Gets the entity to which the bottom of the hole is mated in this hole series.

## Signature

```csharp
Entity IGetHoleBottomMateEntity( 
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

Entity to which the bottom of the hole is mated

## See Also

- `IHoleSeriesFeatureData2.GetHoleBottomMateEntity`
- `IHoleSeriesFeatureData2.GetHoleTopMateEntity`
- `IHoleSeriesFeatureData2.IGetHoleTopMateEntity`