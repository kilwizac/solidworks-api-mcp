---
type: property
interface: IConvertSolidFeatureData
member: OverrideSheetThickness
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - overridesheetthickness
  - iconvertsolidfeaturedata
  - convert
  - solid
  - feature
  - data
  - override
  - sheet
  - thickness
  - boolean
readonly: null
---

# IConvertSolidFeatureData.OverrideSheetThickness

Gets or sets whether to override the gauge thickness for this convert solid feature.

## Signature

```csharp
System.Boolean OverrideSheetThickness {get; set;}
```
## Parameters

None.

## Return Value

True to override the gauge thickness, false to not

## Remarks

This property is related to the gauge table only. This property is valid only before calling
IFeatureManager::CreateFeature
to create a new sheet metal feature.