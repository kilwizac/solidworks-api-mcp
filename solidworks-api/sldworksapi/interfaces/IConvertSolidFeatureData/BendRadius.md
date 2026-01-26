---
type: property
interface: IConvertSolidFeatureData
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
  - iconvertsolidfeaturedata
  - convert
  - solid
  - feature
  - data
  - bend
  - radius
  - double
readonly: null
---

# IConvertSolidFeatureData.BendRadius

Gets or sets the default radius for bends in this convert solid feature.

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
IConvertSolidFeatureData::OverrideDefaultSheetMetalParameters
is true.

## Examples

- IConvertSolidFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IConvertSolidFeatureData)