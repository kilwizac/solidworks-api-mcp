---
type: property
interface: ISweptFlangeFeatureData
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
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - relief
  - depth
  - double
readonly: null
---

# ISweptFlangeFeatureData.ReliefDepth

Gets or sets the bend relief depth for this swept flange feature.

## Signature

```csharp
System.Double ReliefDepth {get; set;}
```
## Parameters

None.

## Return Value

Bend relief depth

## Remarks

This property is valid:
If
ISweptFlangeFeatureData::UseReliefRatio
is false,
- and -
For regular swept flanges, but for cylindrical or conical swept flanges only during creation,
- and -
When
ISweptFlangeFeatureData::ReliefType
is
swSheetMetalReliefTypes_e
.swSheetMetalReliefRectangular or swSheetMetalReliefTypes_e.swSheetMetalReliefObround.