---
type: property
interface: ISweptFlangeFeatureData
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
  - isweptflangefeaturedata
  - swept
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

# ISweptFlangeFeatureData.OverrideDefaultSheetMetalParameters

Gets or sets whether to override the default sheet metal parameters for this swept flange feature.

## Signature

```csharp
System.Boolean OverrideDefaultSheetMetalParameters {get; set;}
```
## Parameters

None.

## Return Value

True to override the default values, false to not

## Remarks

This property is valid only when creating the swept flange in a non-sheet-metal part.
If this property is:
True, then
ISweptFlangeFeatureData::Thickness
and
ISweptFlangeFeatureData::BendRadius
get and set user-defined values.
False, then ISweptFlangeFeatureData::Thickness and ISweptFlangeFeatureData::BendRadius are invalid as setters and get only default values.

## Examples

- ISweptFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweptFlangeFeatureData)