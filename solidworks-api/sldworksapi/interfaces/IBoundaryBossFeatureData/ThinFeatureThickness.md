---
type: property
interface: IBoundaryBossFeatureData
member: ThinFeatureThickness
returns: System.Double
parameters:
  -
    name: ThicknessDirection
    type: System.Boolean
    description: Direction of thickness as defined in swBoundaryBossDirection_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.ThinFeatureReversed
  - IBoundaryBossFeatureData.ThinFeatureType
keywords:
  - thinfeaturethickness
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - thin
  - thickness
  - direction
  - boolean
  - double
readonly: null
---

# IBoundaryBossFeatureData.ThinFeatureThickness

Gets or sets the thickness of this thin feature boundary feature.

## Signature

```csharp
System.Double ThinFeatureThickness( 
   System.Boolean
ThicknessDirection
) {get; set;}
```
## Parameters

- `ThicknessDirection` (System.Boolean): Direction of thickness as defined in swBoundaryBossDirection_e

## Return Value

Thickness of this thin feature boundary feature

## Remarks

Before calling this property, call
IBoundaryBossFeatureData::IsThinFeature
to determine if the boundary feature is a thin feature.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IBoundaryBossFeatureData.ThinFeatureReversed`
- `IBoundaryBossFeatureData.ThinFeatureType`