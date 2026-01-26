---
type: property
interface: IConvertSolidFeatureData
member: GaugeThickness
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - gaugethickness
  - iconvertsolidfeaturedata
  - convert
  - solid
  - feature
  - data
  - gauge
  - thickness
  - string
readonly: null
---

# IConvertSolidFeatureData.GaugeThickness

See ConvertSolidFeatureData::GaugeTableFile.

## Signature

```csharp
System.String GaugeThickness {get; set;}
```
## Parameters

None.

## Return Value

Gauge thickness

## Remarks

This property is related to the gauge table only. This property is valid only before calling
IFeatureManager::CreateFeature
to create a new sheet metal feature.