---
type: property
interface: IHoleSeriesFeatureData
member: Size
returns: System.String
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
  - IHoleSeriesFeatureData.Type
keywords:
  - size
  - iholeseriesfeaturedata
  - hole
  - series
  - feature
  - data
  - which
  - part
  - int32
  - string
readonly: true
---

# IHoleSeriesFeatureData.Size

Obsolete. Superseded by IHoleSeriesFeatureData2::Size.

## Signature

```csharp
System.String Size( 
   System.Int32
HoleSeriesWhichPart
) {get;}
```
## Parameters

- `HoleSeriesWhichPart` (System.Int32): Which part the hole series passes through as defined by swHoleSeriesWhichParts_e

## Return Value

Fastener size

## See Also

- `IHoleSeriesFeatureData.FastenerBottomHoleType`
- `IHoleSeriesFeatureData.FastenerDefaultUnits`
- `IHoleSeriesFeatureData.FastenerHoleCount`
- `IHoleSeriesFeatureData.FastenerTopHoleType`
- `IHoleSeriesFeatureData.Type`