---
type: property
interface: IHoleSeriesFeatureData
member: Type
returns: System.Int32
parameters:
  -
    name: HoleSeriesWhichPart
    type: System.Int32
    description: Which part the hole series passes through as defined by swHoleSeriesWhichParts_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IHoleSeriesFeatureData.FastenerBottomHoleType
  - IHoleSeriesFeatureData.FastenerDefaultUnits
  - IHoleSeriesFeatureData.FastenerHoleCount
  - IHoleSeriesFeatureData.FastenerTopHoleType
  - IHoleSeriesFeatureData.Size
keywords:
  - type
  - iholeseriesfeaturedata
  - hole
  - series
  - feature
  - data
  - which
  - part
  - int32
readonly: true
---

# IHoleSeriesFeatureData.Type

Obsolete. Superseded by IHoleSeriesFeatureData2::Type.

## Signature

```csharp
System.Int32 Type( 
   System.Int32
HoleSeriesWhichPart
) {get;}
```
## Parameters

- `HoleSeriesWhichPart` (System.Int32): Which part the hole series passes through as defined by swHoleSeriesWhichParts_e

## Return Value

Type of fastener as defined by swWzdHoleStandardFastenerTypes_e

## See Also

- `IHoleSeriesFeatureData.FastenerBottomHoleType`
- `IHoleSeriesFeatureData.FastenerDefaultUnits`
- `IHoleSeriesFeatureData.FastenerHoleCount`
- `IHoleSeriesFeatureData.FastenerTopHoleType`
- `IHoleSeriesFeatureData.Size`