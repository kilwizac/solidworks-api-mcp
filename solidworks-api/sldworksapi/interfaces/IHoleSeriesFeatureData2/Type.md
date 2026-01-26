---
type: property
interface: IHoleSeriesFeatureData2
member: Type
returns: System.Int32
parameters:
  -
    name: HoleSeriesWhichPart
    type: System.Int32
    description: Which part the hole series passes through as defined by swHoleSeriesWhichParts_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - type
  - iholeseriesfeaturedata2
  - hole
  - series
  - feature
  - data2
  - which
  - part
  - int32
readonly: true
---

# IHoleSeriesFeatureData2.Type

Gets the type of fastener in the specified part in this hole series.

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

## Examples

- IHoleSeriesFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHoleSeriesFeatureData2)