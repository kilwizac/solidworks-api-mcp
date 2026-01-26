---
type: property
interface: ISweptFlangeFeatureData
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
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - relief
  - width
  - double
readonly: null
---

# ISweptFlangeFeatureData.ReliefWidth

Gets or sets the bend relief width for this swept flange feature.

## Signature

```csharp
System.Double ReliefWidth {get; set;}
```
## Parameters

None.

## Return Value

Bend relief width

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