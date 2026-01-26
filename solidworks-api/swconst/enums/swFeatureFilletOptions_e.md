---
type: enum
name: swFeatureFilletOptions_e
description: Fillet/chamfer options. Bitmask.
member_count: 15
docset: swconst
categories:
  - constants
used_by: []
---

# swFeatureFilletOptions_e

Fillet/chamfer options. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swFeatureFilletAsymmetric` | 16384 | or 0x4000; requires that you specify Direction 1 and Direction 2 radii for the asymmetric sides of the fillet/chamfer |
| `swFeatureFilletAttachEdges` | 64 | or 0x40; set to fillet attached edges between intersecting features; you must pre-select the features |
| `swFeatureFilletConstantWidth` | 512 | or 0x200; set to create a face fillet of constant width |
| `swFeatureFilletCornerType` | 32 | or 0x20 |
| `swFeatureFilletCurvatureContinuous` | 256 | or 0x100; set to create a smoother curvature between adjacent surfaces; overrides any other cross-sectional profile setting |
| `swFeatureFilletKeepFeatures` | 128 | or 0x80; set to keep cut or boss features visible if you apply a fillet radius large enough to cover them |
| `swFeatureFilletNoTrimNoAttached` | 1024 | or 0x400; set to trim the filleted faces and knit the surfaces into one surface body |
| `swFeatureFilletPropagate` | 1 | or 0x1; set to extend the fillet to all faces that are tangent to the selected face |
| `swFeatureFilletPropagateFeatToParts` | 8192 | or 0x2000 |
| `swFeatureFilletReverseFace1Dir` | 2048 | or 0x800 |
| `swFeatureFilletReverseFace2Dir` | 4096 | or 0x1000 |
| `swFeatureFilletUniformRadius` | 2 | or 0x2; set for a uniform radius; do not set for multiple radii |
| `swFeatureFilletUseHelpPoint` | 8 | or 0x8; valid only for face fillets/chamfers, set to disambiguate placement of the face fillet/chamfer; requires that you specify a vertex close to where the face blend should occur |
| `swFeatureFilletUseTangentHoldLine` | 16 | or 0x10; set to create a face hold line fillet whose shape is to be determined by a specified part edge or a face projected split line; the radius of the fillet is driven by the distance between the hold line and edge fo fillet |
| `swFeatureFilletVarRadiusType` | 4 | or 0x4; set to create a straight transition fillet that changes from one radius to another linearly while matching edge tangency to an adjacent fillet; do not set to create a smooth transition fillet that changes smoothly from one radius to another when matching edge tangency to an adjacent fillet |