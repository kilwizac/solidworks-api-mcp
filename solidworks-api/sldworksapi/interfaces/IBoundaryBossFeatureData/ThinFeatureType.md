---
type: property
interface: IBoundaryBossFeatureData
member: ThinFeatureType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.ThinFeatureReversed
  - IBoundaryBossFeatureData.ThinFeatureThickness
keywords:
  - thinfeaturetype
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - thin
  - type
  - int32
readonly: null
---

# IBoundaryBossFeatureData.ThinFeatureType

Gets or sets the type of thin feature for this boundary feature.

## Signature

```csharp
System.Int32 ThinFeatureType {get; set;}
```
## Parameters

None.

## Return Value

Type of thin feature as defined in swThinWallType_e

## Remarks

Before calling this property, call
IBoundaryBossFeatureData::IsThinFeature
to determine if the boundary feature is a thin feature.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IBoundaryBossFeatureData.ThinFeatureReversed`
- `IBoundaryBossFeatureData.ThinFeatureThickness`