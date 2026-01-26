---
type: property
interface: IBaseFlangeFeatureData
member: ReliefRatio
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reliefratio
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - relief
  - ratio
  - double
readonly: true
---

# IBaseFlangeFeatureData.ReliefRatio

Gets the bend relief ratio for this base flange feature.

## Signature

```csharp
System.Double ReliefRatio {get;}
```
## Parameters

None.

## Return Value

Ratio of bend relief width to bend relief depth

## Remarks

This property is valid when:
IBaseFlangeFeatureData::UseReliefRatio
returns true,
- and -
IBaseFlangeFeatureData::ReliefType
is
swSheetMetalReliefTypes_e
.swSheetMetalReliefRectangular or swSheetMetalReliefTypes_e.swSheetMetalReliefObround.
The relief ratio is set during the
initialization
of this base flange and cannot be changed.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)