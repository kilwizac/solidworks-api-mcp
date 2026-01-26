---
type: property
interface: IBaseFlangeFeatureData
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
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - bend
  - radius
  - double
readonly: null
---

# IBaseFlangeFeatureData.BendRadius

Gets or sets the bend radius of this bend flange feature.

## Signature

```csharp
System.Double BendRadius {get; set;}
```
## Parameters

None.

## Return Value

Value of the bend radius

## Remarks

The setter of this property is valid only if
IBaseFlangeFeatureData::OverrideDefaultSheetMetalParameters
is true and
IBaseFlangeFeatureData::UseMaterialSheetMetalParameters
is false.
This property gets a:
- Default bend radius if:
IBaseFlangeFeatureData::UseMaterialSheetMetalParameters is true,
- and -
IBaseFlangeFeatureData:: OverrideDefaultSheetMetalParameters is false.
- Custom bend radius if:
IBaseFlangeFeatureData::UseDefaultRadius is false,
- and -
IBaseFlangeFeatureData:: OverrideDefaultSheetMetalParameters is true.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)