---
type: property
interface: IBoundaryBossFeatureData
member: ThinFeatureReversed
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.ThinFeatureThickness
  - IBoundaryBossFeatureData.ThinFeatureType
keywords:
  - thinfeaturereversed
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - thin
  - reversed
  - boolean
readonly: true
---

# IBoundaryBossFeatureData.ThinFeatureReversed

Gets whether this thin feature boundary feature is reversed.

## Signature

```csharp
System.Boolean ThinFeatureReversed {get;}
```
## Parameters

None.

## Return Value

True if this thin feature boundary feature is reversed, false if not

## Remarks

Before calling this property, call
IBoundaryBossFeatureData::IsThinFeature
to determine if the boundary feature is a thin feature.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IBoundaryBossFeatureData.ThinFeatureThickness`
- `IBoundaryBossFeatureData.ThinFeatureType`