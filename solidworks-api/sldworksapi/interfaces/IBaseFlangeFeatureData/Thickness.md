---
type: property
interface: IBaseFlangeFeatureData
member: Thickness
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.ReverseThickness
keywords:
  - thickness
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - double
readonly: null
---

# IBaseFlangeFeatureData.Thickness

Gets or sets the thickness for this base flange feature.

## Signature

```csharp
System.Double Thickness {get; set;}
```
## Parameters

None.

## Return Value

Value for thickness

## Remarks

This property is valid only when not creating the base flange on an existing sheet metal feature.
The setter of this property is valid only if
IBaseFlangeFeatureData::OverrideDefaultSheetMetalParameters
is true and
IBaseFlangeFeatureData::UseMaterialSheetMetalParameters
is false.
This property gets:
Default thickness if IBaseFlangeFeatureData::OverrideDefaultSheetMetalParameters is false.
Custom thickness if IBaseFlangeFeatureData::OverrideDefaultSheetMetalParameters is true.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)

## See Also

- `IBaseFlangeFeatureData.ReverseThickness`