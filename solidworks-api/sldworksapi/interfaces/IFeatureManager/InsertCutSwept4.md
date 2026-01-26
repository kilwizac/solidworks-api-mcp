---
type: method
interface: IFeatureManager
member: InsertCutSwept4
returns: Feature
parameters:
  -
    name: Propagate
    type: System.Boolean
    description: True propagates the sweep cut to the next edge, false causes the sweep cut to occur only on the selected edge; to propagate to the next edge, the next edge must be tangent to the current edge
  -
    name: Alignment
    type: System.Boolean
    description: If the curve used to sweep goes from one face to another or from one edge to another, then true causes the sweep to cut completely through the end faces of the cut, and false causes the cut to begin and end perpendicular to the sweep curve; therefore, it may not break through the two end faces of the body being cut
  -
    name: TwistCtrlOption
    type: System.Int16
    description: Twist control options as defined in swTwistControlType_e
  -
    name: KeepTangency
    type: System.Boolean
    description: If the sweep section has tangent segments, true causes the corresponding surfaces in the resulting sweep to be tangent, false does not
  -
    name: BAdvancedSmoothing
    type: System.Boolean
    description: If the sweep section has circular or elliptical arcs, true approximates the sections and smooths the surfaces, false does not
  -
    name: StartMatchingType
    type: System.Int16
    description: Tangency type as defined in swTangencyType_e
  -
    name: EndMatchingType
    type: System.Int16
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
    type: System.Int16
    description: Thin wall type as defined in swThinWallType_e
  -
    name: PathAlign
    type: System.Int16
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
    description: If TwistCtrlOption is set to swTwistControlType_e.swTwistControlConstantTwistAlongPath, then specify end twist angle
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
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertProtrusionSwept3
  - IFeatureManager.InsertSweepSurface2
  - ISweepFeatureData
keywords:
  - insertcutswept4
  - ifeaturemanager
  - feature
  - manager
  - insert
  - cut
  - swept4
  - propagate
  - boolean
  - alignment
  - twist
  - ctrl
  - option
  - int16
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
  - sweep
  - vb
  - net
  - vba
---

# IFeatureManager.InsertCutSwept4

Obsolete. Superseded by IFeatureManager::InsertCutSwept5.

## Signature

```csharp
Feature InsertCutSwept4( 
   System.Boolean
Propagate
,
   System.Boolean
Alignment
,
   System.Int16
TwistCtrlOption
,
   System.Boolean
KeepTangency
,
   System.Boolean
BAdvancedSmoothing
,
   System.Int16
StartMatchingType
,
   System.Int16
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
   System.Int16
ThinType
,
   System.Int16
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
)
```
## Parameters

- `Propagate` (System.Boolean): True propagates the sweep cut to the next edge, false causes the sweep cut to occur only on the selected edge; to propagate to the next edge, the next edge must be tangent to the current edge
- `Alignment` (System.Boolean): If the curve used to sweep goes from one face to another or from one edge to another, then true causes the sweep to cut completely through the end faces of the cut, and false causes the cut to begin and end perpendicular to the sweep curve; therefore, it may not break through the two end faces of the body being cut
- `TwistCtrlOption` (System.Int16): Twist control options as defined in swTwistControlType_e
- `KeepTangency` (System.Boolean): If the sweep section has tangent segments, true causes the corresponding surfaces in the resulting sweep to be tangent, false does not
- `BAdvancedSmoothing` (System.Boolean): If the sweep section has circular or elliptical arcs, true approximates the sections and smooths the surfaces, false does not
- `StartMatchingType` (System.Int16): Tangency type as defined in swTangencyType_e
- `EndMatchingType` (System.Int16): Tangency type as defined in swTangencyType_e
- `IsThinBody` (System.Boolean): True if this feature is a thin body, false if not
- `Thickness1` (System.Double): Thickness value for the first direction
- `Thickness2` (System.Double): Thickness value for the second direction
- `ThinType` (System.Int16): Thin wall type as defined in swThinWallType_e
- `PathAlign` (System.Int16): Align path type (see Remarks )
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
- `TwistAngle` (System.Double): If TwistCtrlOption is set to swTwistControlType_e.swTwistControlConstantTwistAlongPath, then specify end twist angle
- `BMergeSmoothFaces` (System.Boolean): True to merge smooth faces, false to not
- `AssemblyFeatureScope` (System.Boolean): True if the sweep cut affects only selected components in the assembly, false if the sweep cut affects all components in the assembly ( see Remarks )
- `AutoSelectComponents` (System.Boolean): True to auto-select all affected components in the assembly, false to use manually selected components ( see Remarks )
- `PropagateFeatureToParts` (System.Boolean): True to extend the sweep cut feature to all affected parts in the assembly, false to just insert the sweep cut into the assembly ( see Remarks )

## Return Value

Pointer to the IFeature object

## Remarks

Before calling this method, call
IModelDocExtension::SelectByID2
multiple times to select the profile, guide curves, and sweep path for the cut, setting the Mark parameter in each case as follows:
1 = Profile selection
2 = Guide-curve selection, if provided
4 = Sweep path selection
The PathAlign argument is available when TwistCtrlOption is set to 0 and can take one of these values:
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
If false, manually select the affected components in the view before calling this API
Selected components selected
If Auto-select is not seelcted, then manually select affected components in the view

## Examples

- Insert Sweep Cut Feature (C#) (Insert_Sweep_Cut_Feature_Example_CSharp.htm)
- Insert Sweep Cut Feature (VB.NET) (Insert_Sweep_Cut_Feature_Example_VBNET.htm)
- Insert Sweep Cut Feature (VBA) (Insert_Sweep_Cut_Feature_Example_VB.htm)

## See Also

- `IFeatureManager.InsertProtrusionSwept3`
- `IFeatureManager.InsertSweepSurface2`
- `ISweepFeatureData`