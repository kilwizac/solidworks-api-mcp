---
type: method
interface: IFeatureManager
member: FeatureExtrusionThin2
returns: Feature
parameters:
  -
    name: Sd
    type: System.Boolean
    description: True for single ended, false for double ended
  -
    name: Flip
    type: System.Boolean
    description: Not used
  -
    name: Dir
    type: System.Boolean
    description: Reverse direction; True if you want Direction1 to be opposite the default direction (see Remarks )
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
    description: If you chose to offset the first end condition from another face or plane, then True specifies offset in direction away from the sketch, false specifies offset from the face or plane in direction toward the sketch
  -
    name: OffsetReverse2
    type: System.Boolean
    description: If you chose to offset the second end condition from another face or plane, then True specifies offset in direction away from the sketch, false specifies offset from the face or plane in direction toward the sketch
  -
    name: TranslateSurface1
    type: System.Boolean
    description: When you choose swEndcondOffsetFromSurface as the termination type for the first end, then True specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
  -
    name: TranslateSurface2
    type: System.Boolean
    description: When you choose swEndcondOffsetFromSurface as the termination type for the second end, then True specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
  -
    name: Merge
    type: System.Boolean
    description: True to merge the resultant base or boss body into an existing body, false to create a distinct solid body
  -
    name: Thk1
    type: System.Double
    description: Wall thickness 1 (Mid-plane type uses (Thk1)/2 for each direction)
  -
    name: Thk2
    type: System.Double
    description: Wall thickness 2 (Only used when RevThinType =3 )
  -
    name: EndThk
    type: System.Double
    description: End cap thickness (Only used when CapEnds = 1)
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
  -
    name: T0
    type: System.Int32
    description: Start condition as defined in swStartConditions_e
  -
    name: StartOffset
    type: System.Double
    description: If T0 set to swStartOffset, then specify offset value
  -
    name: FlipStartOffset
    type: System.Boolean
    description: If T0 set to swStartOffset, then True to flip the direction or false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2
  - IFeatureManager.FeatureCutThin
  - IFeatureManager.FeatureExtrusion2
keywords:
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - boss
  - base
  - feature
  - ifeature
  - thin
  - features
  - featureextrusionthin2
  - ifeaturemanager
  - manager
  - extrusion
  - thin2
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
  - merge
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
  - t0
  - start
  - create
  - extruded
  - vba
  - annotations
  - arrays
  - vb
  - net
---

# IFeatureManager.FeatureExtrusionThin2

Creates an extruded thin feature.

## Signature

```csharp
Feature FeatureExtrusionThin2( 
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
Merge
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
,
   System.Int32
T0
,
   System.Double
StartOffset
,
   System.Boolean
FlipStartOffset
)
```
## Parameters

- `Sd` (System.Boolean): True for single ended, false for double ended
- `Flip` (System.Boolean): Not used
- `Dir` (System.Boolean): Reverse direction; True if you want Direction1 to be opposite the default direction (see Remarks )
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
- `OffsetReverse1` (System.Boolean): If you chose to offset the first end condition from another face or plane, then True specifies offset in direction away from the sketch, false specifies offset from the face or plane in direction toward the sketch
- `OffsetReverse2` (System.Boolean): If you chose to offset the second end condition from another face or plane, then True specifies offset in direction away from the sketch, false specifies offset from the face or plane in direction toward the sketch
- `TranslateSurface1` (System.Boolean): When you choose swEndcondOffsetFromSurface as the termination type for the first end, then True specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
- `TranslateSurface2` (System.Boolean): When you choose swEndcondOffsetFromSurface as the termination type for the second end, then True specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
- `Merge` (System.Boolean): True to merge the resultant base or boss body into an existing body, false to create a distinct solid body
- `Thk1` (System.Double): Wall thickness 1 (Mid-plane type uses (Thk1)/2 for each direction)
- `Thk2` (System.Double): Wall thickness 2 (Only used when RevThinType =3 )
- `EndThk` (System.Double): End cap thickness (Only used when CapEnds = 1)
- `RevThinDir` (System.Int32): Thin feature type: 0 = One direction 1 = One direction reverse 2 = Mid-plane 3 = Two direction
- `CapEnds` (System.Int32): Cap the ends: 0 = no cap 1 = cap (base features only)
- `AddBends` (System.Boolean): True to add auto bends (open profile base features only), false to not
- `BendRad` (System.Double): Fillet radii if AddBends = True
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
- `T0` (System.Int32): Start condition as defined in swStartConditions_e
- `StartOffset` (System.Double): If T0 set to swStartOffset, then specify offset value
- `FlipStartOffset` (System.Boolean): If T0 set to swStartOffset, then True to flip the direction or false to not

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

## Examples

- Create Extruded Thin Feature (VBA) (Create_Extruded_Thin_Feature_Example_VB.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)

## See Also

- `IExtrudeFeatureData2`
- `IFeatureManager.FeatureCutThin`
- `IFeatureManager.FeatureExtrusion2`