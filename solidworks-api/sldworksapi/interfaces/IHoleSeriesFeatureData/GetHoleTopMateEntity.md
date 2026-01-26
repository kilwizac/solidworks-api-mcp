---
type: method
interface: IHoleSeriesFeatureData
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
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IHoleSeriesFeatureData.GetHoleBottomMateEntity
  - IHoleSeriesFeatureData.IGetHoleBottomMateEntity
  - IHoleSeriesFeatureData.IGetHoleTopMateEntity
keywords:
  - getholetopmateentity
  - iholeseriesfeaturedata
  - hole
  - series
  - feature
  - data
  - top
  - mate
  - entity
  - instance
  - int32
  - type
  - int16
  - object
---

# IHoleSeriesFeatureData.GetHoleTopMateEntity

Obsolete. Superseded by IHoleSeriesFeatureData2::GetHoleTopMateEntity.

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

- `IHoleSeriesFeatureData.GetHoleBottomMateEntity`
- `IHoleSeriesFeatureData.IGetHoleBottomMateEntity`
- `IHoleSeriesFeatureData.IGetHoleTopMateEntity`