---
type: property
interface: IBaseFlangeFeatureData
member: UseMaterialSheetMetalParameters
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - usematerialsheetmetalparameters
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - use
  - material
  - sheet
  - metal
  - parameters
  - boolean
readonly: true
---

# IBaseFlangeFeatureData.UseMaterialSheetMetalParameters

Gets whether the properties of the material applied are used when creating this base flange.

## Signature

```csharp
System.Boolean UseMaterialSheetMetalParameters {get;}
```
## Parameters

None.

## Return Value

True uses the applied material's sheet metal parameters, false does not

## Remarks

This property is valid only:
when not creating the base flange on an existing sheet metal feature,
- and -
when
IBaseFlangeFeatureData::UseGaugeTable
is false.
If this property returns false, then specify sheet metal parameters using:
IBaseFlangeFeatureData::BendRadius
IBaseFlangeFeatureData::Thickness
IBaseFlangeFeatureData::ReverseThickness
Whether to use the applied material's sheet metal parameters was set during the
initialization
of this base flange and cannot be changed.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)