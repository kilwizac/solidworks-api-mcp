---
type: method
interface: IFeatureManager
member: InsertProtrusionSwept4
returns: Feature
parameters:
  -
    name: Propagate
    type: System.Boolean
    description: True propagates the swept protrusion to the next tangent edge, false does not
  -
    name: Alignment
    type: System.Boolean
    description: True causes the swept protrusion to go through the end faces if the curve used for the sweep goes from one face to another or from one edge to another, false causes the swept protrusion to begin and end perpendicular to the sweep curve; thus, it cannot break through the two end faces of the body
  -
    name: TwistCtrlOption
    type: System.Int32
    description: Twist control options as defined in swTwistControlType_e
  -
    name: KeepTangency
    type: System.Boolean
    description: If the sweep section has tangent segments, then true to cause the corresponding surfaces in the resulting sweep to be tangent, false to not
  -
    name: BAdvancedSmoothing
    type: System.Boolean
    description: If the sweep section has circular or elliptical arcs, then true to approximate the sections and smooth the surfaces, false to not
  -
    name: StartMatchingType
    type: System.Int32
    description: Tangency type as defined in swTangencyType_e
  -
    name: EndMatchingType
    type: System.Int32
    description: Tangency type as defined in swTangencyType_e
  -
    name: IsThinBody
    type: System.Boolean
    description: True if this feature is a thin body, false if not
  -
    name: Thickness1
    type: System.Double
    description: Thickness value for the first direction
  -
    name: Thickness2
    type: System.Double
    description: Thickness value for the second direction
  -
    name: ThinType
    type: System.Int32
    description: Thin wall type as defined in swThinWallType_e
  -
    name: PathAlign
    type: System.Int32
    description: Align path type (see Remarks )
  -
    name: Merge
    type: System.Boolean
    description: True to merge the results in a multibody part, false to not
  -
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
  -
    name: TwistAngle
    type: System.Double
    description: If TwistCtrlOption is swTwistControlType_e.swTwistControlConstantTwistAlongPath, then specify end twist angle
  -
    name: BMergeSmoothFaces
    type: System.Boolean
    description: True to merge smooth faces, false to not
  -
    name: CircularProfile
    type: System.Boolean
    description: True to use a circular profile, false to use the selected sketch profile or solid body
  -
    name: CircularProfileDiameter
    type: System.Double
    description: If CircularProfile is true, then specify the diameter of the circular profile
  -
    name: Direction
    type: System.Int32
    description: Direction as defined in swSweepDirection_e (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertCutSwept5
  - IFeatureManager.InsertSweepSurface3
  - ISweepFeatureData
keywords:
  - insertprotrusionswept4
  - ifeaturemanager
  - feature
  - manager
  - insert
  - protrusion
  - swept4
  - propagate
  - boolean
  - alignment
  - twist
  - ctrl
  - option
  - int32
  - keep
  - tangency
  - advanced
  - smoothing
  - start
  - matching
  - type
  - end
  - thin
  - body
  - thickness1
  - double
  - thickness2
  - path
  - align
  - merge
  - use
  - feat
  - scope
  - auto
  - select
  - angle
  - smooth
  - faces
  - circular
  - profile
  - diameter
  - direction
  - guide
  - curves
  - sweep
  - vb
  - net
  - vba
  - mulitple
  - sketches
---

# IFeatureManager.InsertProtrusionSwept4

Obsolete. See Remarks.

## Signature

```csharp
Feature InsertProtrusionSwept4( 
   System.Boolean
Propagate
,
   System.Boolean
Alignment
,
   System.Int32
TwistCtrlOption
,
   System.Boolean
KeepTangency
,
   System.Boolean
BAdvancedSmoothing
,
   System.Int32
StartMatchingType
,
   System.Int32
EndMatchingType
,
   System.Boolean
IsThinBody
,
   System.Double
Thickness1
,
   System.Double
Thickness2
,
   System.Int32
ThinType
,
   System.Int32
PathAlign
,
   System.Boolean
Merge
,
   System.Boolean
UseFeatScope
,
   System.Boolean
UseAutoSelect
,
   System.Double
TwistAngle
,
   System.Boolean
BMergeSmoothFaces
,
   System.Boolean
CircularProfile
,
   System.Double
CircularProfileDiameter
,
   System.Int32
Direction
)
```
## Parameters

- `Propagate` (System.Boolean): True propagates the swept protrusion to the next tangent edge, false does not
- `Alignment` (System.Boolean): True causes the swept protrusion to go through the end faces if the curve used for the sweep goes from one face to another or from one edge to another, false causes the swept protrusion to begin and end perpendicular to the sweep curve; thus, it cannot break through the two end faces of the body
- `TwistCtrlOption` (System.Int32): Twist control options as defined in swTwistControlType_e
- `KeepTangency` (System.Boolean): If the sweep section has tangent segments, then true to cause the corresponding surfaces in the resulting sweep to be tangent, false to not
- `BAdvancedSmoothing` (System.Boolean): If the sweep section has circular or elliptical arcs, then true to approximate the sections and smooth the surfaces, false to not
- `StartMatchingType` (System.Int32): Tangency type as defined in swTangencyType_e
- `EndMatchingType` (System.Int32): Tangency type as defined in swTangencyType_e
- `IsThinBody` (System.Boolean): True if this feature is a thin body, false if not
- `Thickness1` (System.Double): Thickness value for the first direction
- `Thickness2` (System.Double): Thickness value for the second direction
- `ThinType` (System.Int32): Thin wall type as defined in swThinWallType_e
- `PathAlign` (System.Int32): Align path type (see Remarks )
- `Merge` (System.Boolean): True to merge the results in a multibody part, false to not
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
- `TwistAngle` (System.Double): If TwistCtrlOption is swTwistControlType_e.swTwistControlConstantTwistAlongPath, then specify end twist angle
- `BMergeSmoothFaces` (System.Boolean): True to merge smooth faces, false to not
- `CircularProfile` (System.Boolean): True to use a circular profile, false to use the selected sketch profile or solid body
- `CircularProfileDiameter` (System.Double): If CircularProfile is true, then specify the diameter of the circular profile
- `Direction` (System.Int32): Direction as defined in swSweepDirection_e (see Remarks )

## Return Value

Feature

## Remarks

SOLIDWORKS 2018 introduces a new sweep architecture, making this method obsolete. See
Sweep Features and SweepFeatureData Objects
to create this swept-boss or base feature.
Use
IModelDocExtension::SelectByID2
to select the sketch profile and sweep curves. Specify these marks:
1 = Sketch profile
2 = Guide curve, if provided
4 = Sweep path
The PathAlign argument is available when TwistCtrlOption is set to swTwistControlType_e.swTwistControlFollowPath and can take one of these values:
0 = None; no correction (default)
2 = Direction vector; a plane, planar face, or line defines the path
3 = All faces; includes neighboring faces
When UseAutoSelect is false, the user must select the bodies that the feature will affect.
Direction only applies to sketch profiles and only when the sketch profile is not coincident with an end of the path.

## Examples

- Get Guide Curves in Sweep Feature (C#) (Get_Guide_Curves_in_Sweep_Feature_Example_CSharp.htm)
- Get Guide Curves in Sweep Feature (VB.NET) (Get_Guide_Curves_in_Sweep_Feature_Example_VBNET.htm)
- Get Guide Curves in Sweep Feature (VBA) (Get_Guide_Curves_in_Sweep_Feature_Example_VB.htm)
- Select Mulitple Sketches for Sweep Path (C#) (Select_Multiple_Paths_for_Sweep_Path_Example_CSharp.htm)
- Select Mulitple Sketches for Sweep Path (VB.NET) (Select_Multiple_Paths_for_Sweep_Path_Example_VBNET.htm)
- Select Mulitple Sketches for Sweep Path (VBA) (Select_Multiple_Paths_for_Sweep_Path_Example_VB.htm)

## See Also

- `IFeatureManager.InsertCutSwept5`
- `IFeatureManager.InsertSweepSurface3`
- `ISweepFeatureData`