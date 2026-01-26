---
type: method
interface: IFeatureManager
member: FeatureCutThicken
returns: Feature
parameters:
  -
    name: Thickness
    type: System.Double
    description: Wall thickness
  -
    name: Direction
    type: System.Int32
    description: 0 = Thicken side 1 1 = Thicken side 2 2 = Thicken both sides
  -
    name: FaceIndex
    type: System.Int32
    description: Not currently used
  -
    name: FillVolume
    type: System.Boolean
    description: True to make the solid from a knitted surface, false to not (see Remarks )
  -
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.FeatureBossThicken
  - IFeatureManager.FeatureCut2
  - IFeatureManager.FeatureCutThin
  - IThickenFeatureData
keywords:
  - cut
  - thicken
  - feature
  - see
  - also
  - ifeature
  - featurecutthicken
  - ifeaturemanager
  - manager
  - thickness
  - double
  - direction
  - int32
  - face
  - index
  - fill
  - volume
  - boolean
  - use
  - feat
  - scope
  - auto
  - select
---

# IFeatureManager.FeatureCutThicken

Thickens the selected reference surface feature, and then generates a cut.

## Signature

```csharp
Feature FeatureCutThicken( 
   System.Double
Thickness
,
   System.Int32
Direction
,
   System.Int32
FaceIndex
,
   System.Boolean
FillVolume
,
   System.Boolean
UseFeatScope
,
   System.Boolean
UseAutoSelect
)
```
## Parameters

- `Thickness` (System.Double): Wall thickness
- `Direction` (System.Int32): 0 = Thicken side 1 1 = Thicken side 2 2 = Thicken both sides
- `FaceIndex` (System.Int32): Not currently used
- `FillVolume` (System.Boolean): True to make the solid from a knitted surface, false to not (see Remarks )
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )

## Return Value

Pointer to the IFeature object

## Remarks

This method creates a cut feature by thickening a selected reference surface. If FillVolume is True, other arguments are ignored. A closed surface is required when FillVolume is True.
When UseAutoSelect is false, the user must select the bodies that the feature will affect.
When using cut or cavity features that result in multiple bodies, you cannot select to keep all of the resulting bodies or one or more selected bodies.

## See Also

- `IFeatureManager.FeatureBossThicken`
- `IFeatureManager.FeatureCut2`
- `IFeatureManager.FeatureCutThin`
- `IThickenFeatureData`