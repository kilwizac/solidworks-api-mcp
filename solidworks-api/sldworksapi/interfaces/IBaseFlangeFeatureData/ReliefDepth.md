---
type: property
interface: IBaseFlangeFeatureData
member: ReliefDepth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reliefdepth
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - relief
  - depth
  - double
readonly: true
---

# IBaseFlangeFeatureData.ReliefDepth

Gets the bend relief depth for this base flange feature.

## Signature

```csharp
System.Double ReliefDepth {get;}
```
## Parameters

None.

## Return Value

Bend relief depth

## Remarks

This property is valid when:
IBaseFlangeFeatureData::UseReliefRatio
returns false,
- and -
IBaseFlangeFeatureData::ReliefType
is
swSheetMetalReliefTypes_e
.swSheetMetalReliefRectangular or swSheetMetalReliefTypes_e.swSheetMetalReliefObround.
The relief depth is set during the
initialization
of this base flange and cannot be changed.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)