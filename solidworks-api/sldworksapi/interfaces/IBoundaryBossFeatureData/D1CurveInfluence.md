---
type: property
interface: IBoundaryBossFeatureData
member: D1CurveInfluence
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.D1Curves
  - IBoundaryBossFeatureData.D2CurveInfluence
  - IBoundaryBossFeatureData.D2Curves
  - IBoundaryBossFeatureData.GetTangentInfluence
  - IBoundaryBossFeatureData.SetTangentInfluence
  - IBoundaryBossFeatureData.TrimByD1
keywords:
  - d1curveinfluence
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - d1
  - curve
  - influence
  - int32
readonly: null
---

# IBoundaryBossFeatureData.D1CurveInfluence

Gets or sets the type of curve influence for Direction 1 for this boundary feature.

## Signature

```csharp
System.Int32 D1CurveInfluence {get; set;}
```
## Parameters

None.

## Return Value

Type of curve influence for Direction 1 as defined in swBoundaryBossCurveInfluenceType_e

## Remarks

The type of curve influence direction that you specify for Direction 1 is applied to all selections in that direction. The availability of the types of curve influences depends on the geometry of the curves that you select for Direction 1.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IBoundaryBossFeatureData.D1Curves`
- `IBoundaryBossFeatureData.D2CurveInfluence`
- `IBoundaryBossFeatureData.D2Curves`
- `IBoundaryBossFeatureData.GetTangentInfluence`
- `IBoundaryBossFeatureData.SetTangentInfluence`
- `IBoundaryBossFeatureData.TrimByD1`