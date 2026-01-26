---
type: property
interface: IBoundaryBossFeatureData
member: D1Curves
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.D1CurveInfluence
  - IBoundaryBossFeatureData.D2CurveInfluence
  - IBoundaryBossFeatureData.D2Curves
  - IBoundaryBossFeatureData.GetTangentInfluence
  - IBoundaryBossFeatureData.SetTangentInfluence
  - IBoundaryBossFeatureData.TrimByD1
keywords:
  - d1curves
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - d1
  - curves
  - object
  - insert
  - vb
  - net
  - vba
readonly: null
---

# IBoundaryBossFeatureData.D1Curves

Gets or sets the curves for Direction 1 for this boundary feature.

## Signature

```csharp
System.Object D1Curves {get; set;}
```
## Parameters

None.

## Return Value

Array of curves for Direction 1 (see Remarks )

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

## Examples

- Insert Boundary Feature (C#) (Insert_Boundary_Feature_Example_CSharp.htm)
- Insert Boundary Feature (VB.NET) (Insert_Boundary_Feature_Example_VBNET.htm)
- Insert Boundary Feature (VBA) (Insert_Boundary_Feature_Example_VB.htm)

## See Also

- `IBoundaryBossFeatureData.D1CurveInfluence`
- `IBoundaryBossFeatureData.D2CurveInfluence`
- `IBoundaryBossFeatureData.D2Curves`
- `IBoundaryBossFeatureData.GetTangentInfluence`
- `IBoundaryBossFeatureData.SetTangentInfluence`
- `IBoundaryBossFeatureData.TrimByD1`