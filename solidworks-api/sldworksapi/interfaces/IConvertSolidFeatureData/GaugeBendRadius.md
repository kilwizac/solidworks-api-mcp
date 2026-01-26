---
type: property
interface: IConvertSolidFeatureData
member: GaugeBendRadius
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - gaugebendradius
  - iconvertsolidfeaturedata
  - convert
  - solid
  - feature
  - data
  - gauge
  - bend
  - radius
  - double
readonly: null
---

# IConvertSolidFeatureData.GaugeBendRadius

Gets or sets the gauge bend radius in this convert solid feature.

## Signature

```csharp
System.Double GaugeBendRadius {get; set;}
```
## Parameters

None.

## Return Value

Gauge bend radius

## Remarks

This property is related to the gauge table only. This property is valid only before calling
IFeatureManager::CreateFeature
to create a new sheet metal feature.