---
type: property
interface: ISweptFlangeFeatureData
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
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - use
  - relief
  - ratio
  - boolean
readonly: null
---

# ISweptFlangeFeatureData.UseReliefRatio

Gets or sets whether to use the relief ratio in this swept flange feature.

## Signature

```csharp
System.Boolean UseReliefRatio {get; set;}
```
## Parameters

None.

## Return Value

True to use the relief ratio, false to not

## Remarks

This property is valid:
If
ISweptFlangeFeatureData::UseDefaultBendRelief
is false,
- and -
For regular swept flanges, but for cylindrical/conical swept flanges only during creation,
- and -
When
ISweptFlangeFeatureData::ReliefType
is
swSheetMetalReliefTypes_e
.swSheetMetalReliefRectangular or swSheetMetalReliefTypes_e.swSheetMetalReliefObround.
If this property is:
True, then use
ISweptFlangeFeatureData::ReliefRatio
to set a ratio of bend relief width to bend relief depth.
False, then specify
ISweptFlangeFeatureData::ReliefWidth
and
ISweptFlangeFeatureData::ReliefDepth
.