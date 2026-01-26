---
type: property
interface: IBoundaryBossFeatureData
member: D2Curves
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.D1CurveInfluence
  - IBoundaryBossFeatureData.D1Curves
  - IBoundaryBossFeatureData.D2CurveInfluence
  - IBoundaryBossFeatureData.GetTangentInfluence
  - IBoundaryBossFeatureData.SetTangentInfluence
  - IBoundaryBossFeatureData.TrimByD1
keywords:
  - d2curves
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - d2
  - curves
  - object
readonly: null
---

# IBoundaryBossFeatureData.D2Curves

Gets or sets the curves for Direction 2 for this boundary feature.

## Signature

```csharp
System.Object D2Curves {get; set;}
```
## Parameters

None.

## Return Value

Array of curves for Direction 2 (see Remarks )

## Remarks

Sketch curves
,
faces
, or
edges
can be used to create the boundary feature. Boundary features are
created based on the order of the curve selection.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IBoundaryBossFeatureData.D1CurveInfluence`
- `IBoundaryBossFeatureData.D1Curves`
- `IBoundaryBossFeatureData.D2CurveInfluence`
- `IBoundaryBossFeatureData.GetTangentInfluence`
- `IBoundaryBossFeatureData.SetTangentInfluence`
- `IBoundaryBossFeatureData.TrimByD1`