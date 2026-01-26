---
type: property
interface: IConvertSolidFeatureData
member: OverrideBendRadius
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - overridebendradius
  - iconvertsolidfeaturedata
  - convert
  - solid
  - feature
  - data
  - override
  - bend
  - radius
  - boolean
readonly: null
---

# IConvertSolidFeatureData.OverrideBendRadius

Gets or sets whether to override the gauge bend radius for this convert solid feature.

## Signature

```csharp
System.Boolean OverrideBendRadius {get; set;}
```
## Parameters

None.

## Return Value

True to override the gauge bend radius, false to not

## Remarks

This property is related to the gauge table only. This property is valid only before calling
IFeatureManager::CreateFeature
to create a new sheet metal feature.