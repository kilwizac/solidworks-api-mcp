---
type: method
interface: IFeatureManager
member: FeatureCutThin
returns: Feature
parameters:
  -
    name: Sd
    type: System.Boolean
    description: True for single ended, false for double ended
  -
    name: Flip
    type: System.Boolean
    description: Flip side to cut; true to remove material outside of the profile, false to not
  -
    name: Dir
    type: System.Boolean
    description: Reverse direction; true if you want Direction1 to be opposite the default direction (see Remarks )
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
    description: True for second draft angle to be inward, false to be outward
  -
    name: Dang1
    type: System.Double
    description: First draft angle
  -
    name: Dang2
    type: System.Double
    description: Second draft angle
  -
    name: OffsetReverse1
    type: System.Boolean
    description: If you chose to offset the first end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in direction toward the sketch
  -
    name: OffsetReverse2
    type: System.Boolean
    description: If you chose to offset the second end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in direction toward the sketch
  -
    name: TranslateSurface1
    type: System.Boolean
    description: When you choose swEndcondOffsetFromSurface as the termination type for the first end, then true specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
  -
    name: TranslateSurface2
    type: System.Boolean
    description: When you choose swEndcondOffsetFromSurface as the termination type for the second end, then true specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
  -
    name: Thk1
    type: System.Double
    description: Wall thickness 1 (Mid-plane type uses (Thk1)/2 for each direction)
  -
    name: Thk2
    type: System.Double
    description: Wall thickness 2 (only used when RevThinDir=3 )
  -
    name: EndThk
    type: System.Double
    description: End cap thickness (Only used when CapEnds=1)
  -
    name: RevThinDir
    type: System.Int32
    description: Thin feature type: 0 = One direction 1 = One direction reverse 2 = Mid-plane 3 = Two direction
  -
    name: CapEnds
    type: System.Int32
    description: Cap the ends: 0 = no cap 1 = cap (base features only)
  -
    name: AddBends
    type: System.Boolean
    description: True to add auto bends (open profile base features only), false to not
  -
    name: BendRad
    type: System.Double
    description: Fillet radii if AddBends = True
  -
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2
  - IFeatureManager.FeatureCut2
  - IFeatureManager.FeatureCutThicken
  - IFeatureManager.FeatureExtrusionThin2
keywords:
  - featurecutthin
  - ifeaturemanager
  - feature
  - manager
  - cut
  - thin
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
  - thk1
  - thk2
  - end
  - thk
  - rev
  - cap
  - ends
  - add
  - bends
  - bend
  - rad
  - use
  - feat
  - scope
  - auto
  - select
---

# IFeatureManager.FeatureCutThin

Obsolete. Superseded by IFeatureManager::FeatureCutThin2.

## Signature

```csharp
Feature FeatureCutThin( 
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
   System.Double
Thk1
,
   System.Double
Thk2
,
   System.Double
EndThk
,
   System.Int32
RevThinDir
,
   System.Int32
CapEnds
,
   System.Boolean
AddBends
,
   System.Double
BendRad
,
   System.Boolean
UseFeatScope
,
   System.Boolean
UseAutoSelect
)
```
## Parameters

- `Sd` (System.Boolean): True for single ended, false for double ended
- `Flip` (System.Boolean): Flip side to cut; true to remove material outside of the profile, false to not
- `Dir` (System.Boolean): Reverse direction; true if you want Direction1 to be opposite the default direction (see Remarks )
- `T1` (System.Int32): Termination type for first end as defined in swEndConditions_e
- `T2` (System.Int32): Termination type for second end as defined in swEndConditions_e
- `D1` (System.Double): Depth of extrusion for first end in meters
- `D2` (System.Double): Depth of extrusion for second end in meters
- `Dchk1` (System.Boolean): True allows draft angle in first direction, false does not allow drafting
- `Dchk2` (System.Boolean): True allows draft angle in second direction, false does not allow drafting
- `Ddir1` (System.Boolean): True for first draft angle to be inward, false to be outward
- `Ddir2` (System.Boolean): True for second draft angle to be inward, false to be outward
- `Dang1` (System.Double): First draft angle
- `Dang2` (System.Double): Second draft angle
- `OffsetReverse1` (System.Boolean): If you chose to offset the first end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in direction toward the sketch
- `OffsetReverse2` (System.Boolean): If you chose to offset the second end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in direction toward the sketch
- `TranslateSurface1` (System.Boolean): When you choose swEndcondOffsetFromSurface as the termination type for the first end, then true specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
- `TranslateSurface2` (System.Boolean): When you choose swEndcondOffsetFromSurface as the termination type for the second end, then true specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
- `Thk1` (System.Double): Wall thickness 1 (Mid-plane type uses (Thk1)/2 for each direction)
- `Thk2` (System.Double): Wall thickness 2 (only used when RevThinDir=3 )
- `EndThk` (System.Double): End cap thickness (Only used when CapEnds=1)
- `RevThinDir` (System.Int32): Thin feature type: 0 = One direction 1 = One direction reverse 2 = Mid-plane 3 = Two direction
- `CapEnds` (System.Int32): Cap the ends: 0 = no cap 1 = cap (base features only)
- `AddBends` (System.Boolean): True to add auto bends (open profile base features only), false to not
- `BendRad` (System.Double): Fillet radii if AddBends = True
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )

## Return Value

Pointer to the IFeature object

## Remarks

The default direction for cut operations is opposite the sketch normal. The default direction for boss operations is along the sketch normal. Setting the Dir argument to True reverses the default direction. For double-ended extrusions, Direction 2 is always opposite of Direction 1.
The default sketch normal is the same as the face or plane normal where the sketch was placed. To determine this normal vector, see
IFace2::Normal
and
IRefPlane::Transform
, respectively.
When UseAutoSelect is false, the user must select the bodies that the feature will affect.
When using cut or cavity features that result in multiple bodies, you cannot select to keep all of the resulting bodies or one or more selected bodies.

## See Also

- `IExtrudeFeatureData2`
- `IFeatureManager.FeatureCut2`
- `IFeatureManager.FeatureCutThicken`
- `IFeatureManager.FeatureExtrusionThin2`