---
type: property
interface: IHoleSeriesFeatureData2
member: Size
returns: System.String
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
  - size
  - iholeseriesfeaturedata2
  - hole
  - series
  - feature
  - data2
  - which
  - part
  - int32
  - string
readonly: true
---

# IHoleSeriesFeatureData2.Size

Gets the fastener size in the specified part in this hole series.

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

## Examples

- IHoleSeriesFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHoleSeriesFeatureData2)