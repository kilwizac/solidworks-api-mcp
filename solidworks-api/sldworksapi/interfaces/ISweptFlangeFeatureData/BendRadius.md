---
type: property
interface: ISweptFlangeFeatureData
member: BendRadius
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - bendradius
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - bend
  - radius
  - double
readonly: null
---

# ISweptFlangeFeatureData.BendRadius

Gets or sets the bend radius of this swept flange feature.

## Signature

```csharp
System.Double BendRadius {get; set;}
```
## Parameters

None.

## Return Value

Bend radius

## Remarks

The setter of this property is valid only if
ISweptFlangeFeatureData::OverrideDefaultSheetMetalParameters
is true.
This property gets a:
- Default bend radius if:
ISweptFlangeFeatureData::UseDefaultRadius
is true,
- and -
ISweptFlangeFeatureData::OverrideDefaultSheetMetalParameters is false.
- Custom bend radius if:
ISweptFlangeFeatureData::UseDefaultRadius is false,
- and -
ISweptFlangeFeatureData::OverrideDefaultSheetMetalParameters is true.