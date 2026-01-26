---
type: method
interface: IFeatureManager
member: FeatureCut4
returns: Feature
parameters:
  -
    name: Sd
    type: System.Boolean
    description: True for a single-ended cut, false for a doubled-ended cut
  -
    name: Flip
    type: System.Boolean
    description: True to remove material outside of the profile of the flip side to cut, false to not
  -
    name: Dir
    type: System.Boolean
    description: True for Direction 1 to be opposite of the default direction (see Remarks )
  -
    name: T1
    type: System.Int32
    description: Termination type for the first end as defined in swEndConditions_e
  -
    name: T2
    type: System.Int32
    description: Termination type for the second end as defined in swEndConditions_e
  -
    name: D1
    type: System.Double
    description: Depth of extrusion for the first end in meters
  -
    name: D2
    type: System.Double
    description: Depth of extrusion for the second end in meters
  -
    name: Dchk1
    type: System.Boolean
    description: True allows a draft angle in the first direction, false does not allow drafting in the first direction
  -
    name: Dchk2
    type: System.Boolean
    description: True allows a draft angle in the second direction, false does not allow drafting in the second direction
  -
    name: Ddir1
    type: System.Boolean
    description: True for the first draft angle to be inward, false to be outward; only valid when Dchk1 is true
  -
    name: Ddir2
    type: System.Boolean
    description: True for the second draft angle to be inward, false to be outward; only valid when Dchk2 is true
  -
    name: Dang1
    type: System.Double
    description: Draft angle for the first end; only valid when Dchk1 is true
  -
    name: Dang2
    type: System.Double
    description: Draft angle for the second end; only valid when Dchk2 is true
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
    description: When you choose swEndConditions_e.swEndCondOffsetFromSurface as the termination type for the first end, then true specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
  -
    name: TranslateSurface2
    type: System.Boolean
    description: When you choose swEndConditions_e.swEndCondOffsetFromSurface as the termination type for the second end, then true specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
  -
    name: NormalCut
    type: System.Boolean
    description: True to create the cut normal to the sheet metal thickness, false to not (only valid for sheet metal parts; use false for non-sheet metal parts)
  -
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies or components, false if the feature affects all bodies or components
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True to automatically select all bodies or components and have the feature affect those bodies or components, false to only select the bodies or components the feature affects (see Remarks )
  -
    name: AssemblyFeatureScope
    type: System.Boolean
    description: True if the assembly feature only affects selected components in the assembly, false if the assembly feature affects all components in the assembly
  -
    name: AutoSelectComponents
    type: System.Boolean
    description: True to automatically select all affected components, false to use only the selected components
  -
    name: PropagateFeatureToParts
    type: System.Boolean
    description: True to propagate the assembly feature to the components in the model that it affects, false to not
  -
    name: T0
    type: System.Int32
    description: Start conditions as defined in swStartConditions_e
  -
    name: StartOffset
    type: System.Double
    description: If T0 is swStartConditions_e.swStartOffset, then specify an offset value
  -
    name: FlipStartOffset
    type: System.Boolean
    description: If T0 is swStartConditions_e.swStartOffset, then true to flip the direction of cut, false to not
  -
    name: OptimizeGeometry
    type: System.Boolean
    description: True to optimize the normal cut in a sheet metal part, false to not; only valid for sheet metal parts and when NormalCut is true
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2
  - IFeatureManager.FeatureCutThicken
  - IFeatureManager.FeatureCutThin2
keywords:
  - cut
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - feature
  - ifeature
  - featurecut4
  - ifeaturemanager
  - manager
  - cut4
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
  - use
  - feat
  - scope
  - auto
  - select
  - assembly
  - components
  - propagate
  - parts
  - t0
  - start
  - optimize
  - geometry
  - create
  - sheet
  - metal
  - part
  - vb
  - net
  - vba
---

# IFeatureManager.FeatureCut4

Creates a cut extrude feature.

## Signature

```csharp
Feature FeatureCut4( 
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
,
   System.Int32
T0
,
   System.Double
StartOffset
,
   System.Boolean
FlipStartOffset
,
   System.Boolean
OptimizeGeometry
)
```
## Parameters

- `Sd` (System.Boolean): True for a single-ended cut, false for a doubled-ended cut
- `Flip` (System.Boolean): True to remove material outside of the profile of the flip side to cut, false to not
- `Dir` (System.Boolean): True for Direction 1 to be opposite of the default direction (see Remarks )
- `T1` (System.Int32): Termination type for the first end as defined in swEndConditions_e
- `T2` (System.Int32): Termination type for the second end as defined in swEndConditions_e
- `D1` (System.Double): Depth of extrusion for the first end in meters
- `D2` (System.Double): Depth of extrusion for the second end in meters
- `Dchk1` (System.Boolean): True allows a draft angle in the first direction, false does not allow drafting in the first direction
- `Dchk2` (System.Boolean): True allows a draft angle in the second direction, false does not allow drafting in the second direction
- `Ddir1` (System.Boolean): True for the first draft angle to be inward, false to be outward; only valid when Dchk1 is true
- `Ddir2` (System.Boolean): True for the second draft angle to be inward, false to be outward; only valid when Dchk2 is true
- `Dang1` (System.Double): Draft angle for the first end; only valid when Dchk1 is true
- `Dang2` (System.Double): Draft angle for the second end; only valid when Dchk2 is true
- `OffsetReverse1` (System.Boolean): If you chose to offset the first end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in a direction toward the sketch
- `OffsetReverse2` (System.Boolean): If you chose to offset the second end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in a direction toward the sketch
- `TranslateSurface1` (System.Boolean): When you choose swEndConditions_e.swEndCondOffsetFromSurface as the termination type for the first end, then true specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
- `TranslateSurface2` (System.Boolean): When you choose swEndConditions_e.swEndCondOffsetFromSurface as the termination type for the second end, then true specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
- `NormalCut` (System.Boolean): True to create the cut normal to the sheet metal thickness, false to not (only valid for sheet metal parts; use false for non-sheet metal parts)
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies or components, false if the feature affects all bodies or components
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies or components and have the feature affect those bodies or components, false to only select the bodies or components the feature affects (see Remarks )
- `AssemblyFeatureScope` (System.Boolean): True if the assembly feature only affects selected components in the assembly, false if the assembly feature affects all components in the assembly
- `AutoSelectComponents` (System.Boolean): True to automatically select all affected components, false to use only the selected components
- `PropagateFeatureToParts` (System.Boolean): True to propagate the assembly feature to the components in the model that it affects, false to not
- `T0` (System.Int32): Start conditions as defined in swStartConditions_e
- `StartOffset` (System.Double): If T0 is swStartConditions_e.swStartOffset, then specify an offset value
- `FlipStartOffset` (System.Boolean): If T0 is swStartConditions_e.swStartOffset, then true to flip the direction of cut, false to not
- `OptimizeGeometry` (System.Boolean): True to optimize the normal cut in a sheet metal part, false to not; only valid for sheet metal parts and when NormalCut is true

## Return Value

Cut extrude feature

## Remarks

The default direction for:
cut operations is opposite the sketch normal.
boss operations is along the sketch normal.
Setting the direction parameters to true reverses the default direction. For double-ended extrusions, Direction 2 is always opposite to Direction 1.
The default sketch normal is the face or plane that is perpendicular to the sketch plane. To determine the sketch normal, see
IFace2::Normal
and
IRefPlane::Transform
.
When UseAutoSelect is false, the user must select the bodies that the feature will affect.
When using cut or cavity features that result in multiple bodies, you cannot select to keep all of the resulting bodies or one or more selected bodies.

## Examples

- Create Cut Extrude in Sheet Metal Part (C#) (Create_Cut_Extrude_in_Sheet_Metal_Part_Example_CSharp.htm)
- Create Cut Extrude in Sheet Metal Part (VB.NET) (Create_Cut_Extrude_in_Sheet_Metal_Part_Example_VBNET.htm)
- Create Cut Extrude in Sheet Metal Part (VBA) (Create_Cut_Extrude_in_Sheet_Metal_Part_Example_VB.htm)

## See Also

- `IExtrudeFeatureData2`
- `IFeatureManager.FeatureCutThicken`
- `IFeatureManager.FeatureCutThin2`