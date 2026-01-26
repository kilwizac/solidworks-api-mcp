---
type: property
interface: IBaseFlangeFeatureData
member: OverrideDefaultSheetMetalParameters
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - overridedefaultsheetmetalparameters
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - override
  - default
  - sheet
  - metal
  - parameters
  - boolean
readonly: null
---

# IBaseFlangeFeatureData.OverrideDefaultSheetMetalParameters

Gets or sets whether to override the default sheet metal parameters for this sheet metal base flange feature.

## Signature

```csharp
System.Boolean OverrideDefaultSheetMetalParameters {get; set;}
```
## Parameters

None.

## Return Value

True to override the default values, false to not

## Remarks

This property is valid only when creating the base flange in a non-sheet-metal part.
If this property is:
True, then
IBaseFlangeFeatureData::Thickness
and
IBaseFlangeFeatureData::BendRadius
get and set user-defined values.
False, then IBaseFlangeFeatureData::Thickness and IBaseFlangeFeatureData::BendRadius are invalid setters; those properties only get default values.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)