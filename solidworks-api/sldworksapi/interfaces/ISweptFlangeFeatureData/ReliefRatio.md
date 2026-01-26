---
type: property
interface: ISweptFlangeFeatureData
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
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - relief
  - ratio
  - double
readonly: null
---

# ISweptFlangeFeatureData.ReliefRatio

Gets or sets the bend relief ratio for this swept flange feature.

## Signature

```csharp
System.Double ReliefRatio {get; set;}
```
## Parameters

None.

## Return Value

Ratio of bend relief width to bend relief depth

## Remarks

This property is valid:
For regular swept flanges, but for cylindrical or conical swept flanges only during creation,
When
ISweptFlangeFeatureData::UseReliefRatio
is true,
- and -
When
ISweptFlangeFeatureData::ReliefType
is
swSheetMetalReliefTypes_e
.swSheetMetalReliefRectangular or swSheetMetalReliefTypes_e.swSheetMetalReliefObround.