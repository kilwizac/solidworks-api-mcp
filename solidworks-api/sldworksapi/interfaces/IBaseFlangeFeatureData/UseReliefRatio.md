---
type: property
interface: IBaseFlangeFeatureData
member: UseReliefRatio
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - usereliefratio
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - use
  - relief
  - ratio
  - boolean
readonly: true
---

# IBaseFlangeFeatureData.UseReliefRatio

Gets whether the relief ratio is used in this base flange feature.

## Signature

```csharp
System.Boolean UseReliefRatio {get;}
```
## Parameters

None.

## Return Value

True uses the relief ratio, false uses relief depth / relief width

## Remarks

This property is valid when:
IBaseFlangeFeatureData::UseDefaultBendRelief
is false,
- and -
IBaseFlangeFeatureData::ReliefType
is
swSheetMetalReliefTypes_e
.swSheetMetalReliefRectangular or swSheetMetalReliefTypes_e.swSheetMetalReliefObround.
If this property is:
True, then use
IBaseFlangeFeatureData::ReliefRatio
to get the relief ratio used to
initialize
this base flange.
False, then use
IBaseFlangeFeatureData::ReliefWidth
and
IBaseFlangeFeatureData::ReliefDepth
to get the relief width and relief depth used to initialize this base flange.
Whether to use a relief ratio was set during the
initialization
of this base flange and cannot be changed.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)