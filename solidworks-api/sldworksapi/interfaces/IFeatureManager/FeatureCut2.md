---
type: method
interface: IFeatureManager
member: FeatureCut2
returns: Feature
parameters:
  -
    name: Sd
    type: System.Boolean
    description: True for single-ended, false for doubled-ended
  -
    name: Flip
    type: System.Boolean
    description: Flip to side cut; true if you want to remove material outside of the profile, false if not
  -
    name: Dir
    type: System.Boolean
    description: Reverse direction; true if you want Direction 1 to be opposite of the default direction (see Remarks )
  -
    name: T1
    type: System.Int32
    description: Termination type for first end as defined in swEndConditions_e
  -
    name: T2
    type: System.Int32
    description: Termination type for second end as defined in swEndConditions_e
  -
    name: D1
    type: System.Double
    description: Depth of extrusion for first end in meters
  -
    name: D2
    type: System.Double
    description: Depth of extrusion for second end in meters
  -
    name: Dchk1
    type: System.Boolean
    description: True allows draft angle in first direction, false does not allow drafting
  -
    name: Dchk2
    type: System.Boolean
    description: True allows draft angle in second direction, false does not allow drafting
  -
    name: Ddir1
    type: System.Boolean
    description: True for first draft angle to be inward, false to be outward
  -
    name: Ddir2
    type: System.Boolean
    description: True for second draft angle to be inward, false be outward
  -
    name: Dang1
    type: System.Double
    description: Draft angle for first end
  -
    name: Dang2
    type: System.Double
    description: Draft angle for second end
  -
    name: OffsetReverse1
    type: System.Boolean
    description: If you chose to offset the first end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in a direction toward the sketch
  -
    name: OffsetReverse2
    type: System.Boolean
    description: If you chose to offset the second end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in a direction toward the sketch
  -
    name: TranslateSurface1
    type: System.Boolean
    description: When you choose swEndcondOffsetFromSurface as the termination type for the first end, then true specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
  -
    name: TranslateSurface2
    type: System.Boolean
    description: When you choose swEndcondOffsetFromSurface as the termination type for the second end, then true specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
  -
    name: NormalCut
    type: System.Boolean
    description: True ensures that the cut is created normal to the sheet metal thickness, false does not (this argument applies only to sheet metal parts, use false for non-sheet metal parts)
  -
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies or components, false if the feature affects all bodies or components
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True to automatically select all bodies or components and have the feature affect those bodies or components, false to select the bodies or components the feature affects
  -
    name: AssemblyFeatureScope
    type: System.Boolean
    description: True if the assembly feature only affects selected components in the assembly, false if the assembly feature affects all components in the assembly
  -
    name: AutoSelectComponents
    type: System.Boolean
    description: True to auto-select all affected components, false to not (use the selected components only)
  -
    name: PropagateFeatureToParts
    type: System.Boolean
    description: True to propagate the assembly feature to the components in the model that it affects, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2
  - IFeatureManager.FeatureCutThicken
  - IFeatureManager.FeatureCutThin
keywords:
  - featurecut2
  - ifeaturemanager
  - feature
  - manager
  - cut2
  - sd
  - boolean
  - flip
  - dir
  - t1
  - int32
  - t2
  - d1
  - double
  - d2
  - dchk1
  - dchk2
  - ddir1
  - ddir2
  - dang1
  - dang2
  - offset
  - reverse1
  - reverse2
  - translate
  - surface1
  - surface2
  - normal
  - cut
  - use
  - feat
  - scope
  - auto
  - select
  - assembly
  - components
  - propagate
  - parts
---

# IFeatureManager.FeatureCut2

Obsolete. Superseded by IFeatureManager::FeatureCut3.

## Signature

```csharp
Feature FeatureCut2( 
   System.Boolean
Sd
,
   System.Boolean
Flip
,
   System.Boolean
Dir
,
   System.Int32
T1
,
   System.Int32
T2
,
   System.Double
D1
,
   System.Double
D2
,
   System.Boolean
Dchk1
,
   System.Boolean
Dchk2
,
   System.Boolean
Ddir1
,
   System.Boolean
Ddir2
,
   System.Double
Dang1
,
   System.Double
Dang2
,
   System.Boolean
OffsetReverse1
,
   System.Boolean
OffsetReverse2
,
   System.Boolean
TranslateSurface1
,
   System.Boolean
TranslateSurface2
,
   System.Boolean
NormalCut
,
   System.Boolean
UseFeatScope
,
   System.Boolean
UseAutoSelect
,
   System.Boolean
AssemblyFeatureScope
,
   System.Boolean
AutoSelectComponents
,
   System.Boolean
PropagateFeatureToParts
)
```
## Parameters

- `Sd` (System.Boolean): True for single-ended, false for doubled-ended
- `Flip` (System.Boolean): Flip to side cut; true if you want to remove material outside of the profile, false if not
- `Dir` (System.Boolean): Reverse direction; true if you want Direction 1 to be opposite of the default direction (see Remarks )
- `T1` (System.Int32): Termination type for first end as defined in swEndConditions_e
- `T2` (System.Int32): Termination type for second end as defined in swEndConditions_e
- `D1` (System.Double): Depth of extrusion for first end in meters
- `D2` (System.Double): Depth of extrusion for second end in meters
- `Dchk1` (System.Boolean): True allows draft angle in first direction, false does not allow drafting
- `Dchk2` (System.Boolean): True allows draft angle in second direction, false does not allow drafting
- `Ddir1` (System.Boolean): True for first draft angle to be inward, false to be outward
- `Ddir2` (System.Boolean): True for second draft angle to be inward, false be outward
- `Dang1` (System.Double): Draft angle for first end
- `Dang2` (System.Double): Draft angle for second end
- `OffsetReverse1` (System.Boolean): If you chose to offset the first end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in a direction toward the sketch
- `OffsetReverse2` (System.Boolean): If you chose to offset the second end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in a direction toward the sketch
- `TranslateSurface1` (System.Boolean): When you choose swEndcondOffsetFromSurface as the termination type for the first end, then true specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
- `TranslateSurface2` (System.Boolean): When you choose swEndcondOffsetFromSurface as the termination type for the second end, then true specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
- `NormalCut` (System.Boolean): True ensures that the cut is created normal to the sheet metal thickness, false does not (this argument applies only to sheet metal parts, use false for non-sheet metal parts)
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies or components, false if the feature affects all bodies or components
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies or components and have the feature affect those bodies or components, false to select the bodies or components the feature affects
- `AssemblyFeatureScope` (System.Boolean): True if the assembly feature only affects selected components in the assembly, false if the assembly feature affects all components in the assembly
- `AutoSelectComponents` (System.Boolean): True to auto-select all affected components, false to not (use the selected components only)
- `PropagateFeatureToParts` (System.Boolean): True to propagate the assembly feature to the components in the model that it affects, false to not

## Return Value

Feature

## Remarks

The default direction for cut operations are opposite the sketch normal. The default direction for boss operations is along the sketch normal. Setting the direction arguments to true reverse the default direction. For double-ended extrusions, Direction 2 is always be opposite to Direction 1.
The default sketch normal is the same as the face or plane normal where the sketch was placed. To determine this normal vector, see
IFace2::Normal
and
IRefPlane::Transform
, respectively.
When UseAutoSelect is false, the user must select the bodies that the feature will affect.
When using cut or cavity features that result in multiple bodies, you cannot select to keep all of the resulting bodies or one or more selected bodies.

## See Also

- `IExtrudeFeatureData2`
- `IFeatureManager.FeatureCutThicken`
- `IFeatureManager.FeatureCutThin`