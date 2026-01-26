---
type: method
interface: IFeatureManager
member: InsertCutSwept5
returns: Feature
parameters:
  -
    name: Propagate
    type: System.Boolean
    description: True propagates the sweep cut to the next edge, false causes the sweep cut to occur only on the selected edge; to propagate to the next edge, the next edge must be tangent to the current edge
  -
    name: Alignment
    type: System.Boolean
    description: If the curve used to sweep goes from one face to another or from one edge to another, then true causes the sweep to cut completely through the end faces of the cut, and false causes the cut to begin and end perpendicular to the sweep curve; thus, it cannot break through the two end faces of the body being cut
  -
    name: TwistCtrlOption
    type: System.Int32
    description: Twist control options as defined in swTwistControlType_e
  -
    name: KeepTangency
    type: System.Boolean
    description: If the sweep section has tangent segments, true to cause the corresponding surfaces in the resulting sweep to be tangent, false to not
  -
    name: BAdvancedSmoothing
    type: System.Boolean
    description: If the sweep section has circular or elliptical arcs, true to approximate the sections and smooth the surfaces, false to not
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
    description: If TwistCtrlOption set to swTwistControlType_e.swTwistControlConstantTwistAlongPath, then specify end twist angle
  -
    name: BMergeSmoothFaces
    type: System.Boolean
    description: True to merge smooth faces, false to not
  -
    name: AssemblyFeatureScope
    type: System.Boolean
    description: True if the sweep cut affects only selected components in the assembly, false if the sweep cut affects all components in the assembly ( see Remarks )
  -
    name: AutoSelectComponents
    type: System.Boolean
    description: True to auto-select all affected components in the assembly, false to use manually selected components ( see Remarks )
  -
    name: PropagateFeatureToParts
    type: System.Boolean
    description: True to extend the sweep cut feature to all affected parts in the assembly, false to just insert the sweep cut into the assembly ( see Remarks )
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
  - IFeatureManager.InsertProtrusionSwept4
  - IFeatureManager.InsertSweepSurface3
  - ISweepFeatureData
keywords:
  - insertcutswept5
  - ifeaturemanager
  - feature
  - manager
  - insert
  - cut
  - swept5
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
  - use
  - feat
  - scope
  - auto
  - select
  - angle
  - merge
  - smooth
  - faces
  - assembly
  - components
  - parts
  - circular
  - profile
  - diameter
  - direction
  - create
  - sweep
  - using
  - tool
  - vb
  - net
  - vba
---

# IFeatureManager.InsertCutSwept5

Obsolete. See Remarks.

## Signature

```csharp
Feature InsertCutSwept5( 
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
AssemblyFeatureScope
,
   System.Boolean
AutoSelectComponents
,
   System.Boolean
PropagateFeatureToParts
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

- `Propagate` (System.Boolean): True propagates the sweep cut to the next edge, false causes the sweep cut to occur only on the selected edge; to propagate to the next edge, the next edge must be tangent to the current edge
- `Alignment` (System.Boolean): If the curve used to sweep goes from one face to another or from one edge to another, then true causes the sweep to cut completely through the end faces of the cut, and false causes the cut to begin and end perpendicular to the sweep curve; thus, it cannot break through the two end faces of the body being cut
- `TwistCtrlOption` (System.Int32): Twist control options as defined in swTwistControlType_e
- `KeepTangency` (System.Boolean): If the sweep section has tangent segments, true to cause the corresponding surfaces in the resulting sweep to be tangent, false to not
- `BAdvancedSmoothing` (System.Boolean): If the sweep section has circular or elliptical arcs, true to approximate the sections and smooth the surfaces, false to not
- `StartMatchingType` (System.Int32): Tangency type as defined in swTangencyType_e
- `EndMatchingType` (System.Int32): Tangency type as defined in swTangencyType_e
- `IsThinBody` (System.Boolean): True if this feature is a thin body, false if not
- `Thickness1` (System.Double): Thickness value for the first direction
- `Thickness2` (System.Double): Thickness value for the second direction
- `ThinType` (System.Int32): Thin wall type as defined in swThinWallType_e
- `PathAlign` (System.Int32): Align path type (see Remarks )
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
- `TwistAngle` (System.Double): If TwistCtrlOption set to swTwistControlType_e.swTwistControlConstantTwistAlongPath, then specify end twist angle
- `BMergeSmoothFaces` (System.Boolean): True to merge smooth faces, false to not
- `AssemblyFeatureScope` (System.Boolean): True if the sweep cut affects only selected components in the assembly, false if the sweep cut affects all components in the assembly ( see Remarks )
- `AutoSelectComponents` (System.Boolean): True to auto-select all affected components in the assembly, false to use manually selected components ( see Remarks )
- `PropagateFeatureToParts` (System.Boolean): True to extend the sweep cut feature to all affected parts in the assembly, false to just insert the sweep cut into the assembly ( see Remarks )
- `CircularProfile` (System.Boolean): True to use a circular profile, false to use the selected sketch profile or solid body
- `CircularProfileDiameter` (System.Double): If CircularProfile is true, then specify the diameter of the circular profile
- `Direction` (System.Int32): Direction as defined in swSweepDirection_e (see Remarks )

## Return Value

Feature

## Remarks

SOLIDWORKS 2018 introduces a new sweep architecture, making this method obsolete. See
Sweep Features and SweepFeatureData Objects
to create this cut-sweep feature.
Before calling this method, call
IModelDocExtension::SelectByID2
multiple times to select the sketch profile or tool body, guide curves, and sweep path for the cut. Specify these marks:
1 = Sketch profile or tool body
2 = Guide curve, if provided
4 = Sweep path
The PathAlign argument is available when TwistCtrlOption is set to swTwistControlType_e.swTwistControlFollowPath and can take one of these values:
0 = None; no correction (default)
2 = Direction vector; a plane, planar face, or line defines the path
3 = All faces; includes neighboring faces
When UseAutoSelect is false, the user must select the bodies that the feature will affect.
When using cut or cavity features that result in multiple bodies, you cannot select to keep all of the resulting bodies or one or more selected bodies.
Use AssemblyFeatureScope, AutoSelectComponents, and PropagateFeatureToParts to insert sweep cuts into an assembly. AssemblyFeatureScope and AutoSelectComponents perform just like the configuration of the Feature Scope section on the PropertyManager page of the sweep feature:
AssemblyFeatureScope setting
AutoSelectComponents setting
PropertyManager page Feature Scope setting
False
Ignored
All components selected
Auto-select not visible
True
If true, affected components are automatically selected
If false, manually select the affected components in the view before calling this method
Selected components selected
If Auto-select is not selected, then manually select affected components in the view
Direction only applies to sketch profiles and only when the sketch profile is not coincident with an end of the path.

## Examples

- Create Cut-sweep Feature Using Tool Body (C#) (Create_Cut-sweep_Feature_Using_Tool_Body_Example_CSharp.htm)
- Create Cut-sweep Feature Using Tool Body (VB.NET) (Create_Cut-sweep_Feature_Using_Tool_Body_Example_VBNET.htm)
- Create Cut-sweep Feature Using Tool Body (VBA) (Create_Cut-sweep_Feature_Using_Tool_Body_Example_VB.htm)
- Create Cut-sweep Feature Using Circular Profile (C#) (Create_Cut-sweep_Feature_Using_Circular_Profile_Example_CSharp.htm)
- Create Cut-sweep Feature Using Circular Profile (VB.NET) (Create_Cut-sweep_Feature_Using_Circular_Profile_Example_VBNET.htm)
- Create Cut-sweep Feature Using Circular Profile (VBA) (Create_Cut-sweep_Feature_Using_Circular_Profile_Example_VB.htm)

## See Also

- `IFeatureManager.InsertProtrusionSwept4`
- `IFeatureManager.InsertSweepSurface3`
- `ISweepFeatureData`