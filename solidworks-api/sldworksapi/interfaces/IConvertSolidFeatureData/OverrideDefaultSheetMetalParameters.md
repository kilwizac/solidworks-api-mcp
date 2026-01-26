---
type: property
interface: IConvertSolidFeatureData
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
  - iconvertsolidfeaturedata
  - convert
  - solid
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

# IConvertSolidFeatureData.OverrideDefaultSheetMetalParameters

Gets or sets whether to override the default sheet metal parameters such as sheet thickness and default bend radius for this convert solid feature.

## Signature

```csharp
System.Boolean OverrideDefaultSheetMetalParameters {get; set;}
```
## Parameters

None.

## Return Value

True to override the default sheet metal parameters, false to not

## Remarks

If this property is set to true, you can set:
IConvertSolidFeatureData::SheetThickness
IConvertSolidFeatureData::BendRadius