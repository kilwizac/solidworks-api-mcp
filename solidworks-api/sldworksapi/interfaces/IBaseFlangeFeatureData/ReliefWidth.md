---
type: property
interface: IBaseFlangeFeatureData
member: ReliefWidth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reliefwidth
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - relief
  - width
  - double
readonly: true
---

# IBaseFlangeFeatureData.ReliefWidth

Gets the bend relief width for this base flange feature.

## Signature

```csharp
System.Double ReliefWidth {get;}
```
## Parameters

None.

## Return Value

Bend relief width

## Remarks

This property is valid when:
IBaseFlangeFeatureData::UseReliefRatio
returns false,
- and -
IBaseFlangeFeatureData::ReliefType
is
swSheetMetalReliefTypes_e
.swSheetMetalReliefRectangular or swSheetMetalReliefTypes_e.swSheetMetalReliefObround.
The relief width is set during the
initialization
of this base flange and cannot be changed.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)