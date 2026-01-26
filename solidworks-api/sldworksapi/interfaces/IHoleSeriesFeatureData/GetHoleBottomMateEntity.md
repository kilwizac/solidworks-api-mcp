---
type: method
interface: IHoleSeriesFeatureData
member: GetHoleBottomMateEntity
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
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IHoleSeriesFeatureData.GetHoleTopMateEntity
  - IHoleSeriesFeatureData.IGetHoleTopMateEntity
keywords:
  - getholebottommateentity
  - iholeseriesfeaturedata
  - hole
  - series
  - feature
  - data
  - bottom
  - mate
  - entity
  - instance
  - int32
  - type
  - int16
  - object
---

# IHoleSeriesFeatureData.GetHoleBottomMateEntity

Obsolete. Superseded by IHoleSeriesFeatureData2::GetHoleBottomMateEntity.

## Signature

```csharp
System.Object GetHoleBottomMateEntity( 
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

- `IHoleSeriesFeatureData.GetHoleTopMateEntity`
- `IHoleSeriesFeatureData.IGetHoleTopMateEntity`