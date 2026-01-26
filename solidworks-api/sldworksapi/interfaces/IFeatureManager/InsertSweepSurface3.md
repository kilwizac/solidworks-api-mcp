---
type: method
interface: IFeatureManager
member: InsertSweepSurface3
returns: Feature
parameters:
  -
    name: Propagate
    type: System.Boolean
    description: True propagates the sweep to the next edge, false causes the sweep to occur only on the selected edge; to propagate to the next edge, the next edge must be tangent to the current edge
  -
    name: TwistCtrlOption
    type: System.Int32
    description: Twist control option as defined in swTwistControlType_e
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
  - IFeatureManager.InsertProtrusionSwept4
  - IModeler.CreateSweptSurface
  - IModeler.ICreateSweptSurface
  - ISweepFeatureData
keywords:
  - insertsweepsurface3
  - ifeaturemanager
  - feature
  - manager
  - insert
  - sweep
  - surface3
  - propagate
  - boolean
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
  - path
  - align
  - use
  - feat
  - scope
  - auto
  - select
  - angle
  - double
  - merge
  - smooth
  - faces
  - circular
  - profile
  - diameter
  - direction
  - create
  - surface
  - vb
  - net
  - vba
---

# IFeatureManager.InsertSweepSurface3

Obsolete. See Remarks.

## Signature

```csharp
Feature InsertSweepSurface3( 
   System.Boolean
Propagate
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

- `Propagate` (System.Boolean): True propagates the sweep to the next edge, false causes the sweep to occur only on the selected edge; to propagate to the next edge, the next edge must be tangent to the current edge
- `TwistCtrlOption` (System.Int32): Twist control option as defined in swTwistControlType_e
- `KeepTangency` (System.Boolean): If the sweep section has tangent segments, then true to cause the corresponding surfaces in the resulting sweep to be tangent, false to not
- `BAdvancedSmoothing` (System.Boolean): If the sweep section has circular or elliptical arcs, then true to approximate the sections and smooth the surfaces, false to not
- `StartMatchingType` (System.Int32): Tangency type as defined in swTangencyType_e
- `EndMatchingType` (System.Int32): Tangency type as defined in swTangencyType_e
- `PathAlign` (System.Int32): Align path type (see Remarks )
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
- `TwistAngle` (System.Double): If TwistCtrlOption set to swTwistControlType_e.swTwistControlConstantTwistAlongPath, then specify end twist angle
- `BMergeSmoothFaces` (System.Boolean): True to merge smooth faces, false to not
- `CircularProfile` (System.Boolean): True to use a circular profile, false to use the selected sketch profile or solid body
- `CircularProfileDiameter` (System.Double): If CircularProfile is true, then specify the diameter of the circular profile
- `Direction` (System.Int32): Direction as defined in swSweepDirection_e (see Remarks )

## Return Value

Feature

## Remarks

SOLIDWORKS 2018 introduces a new sweep architecture, making this method obsolete. See
Sweep Features and SweepFeatureData Objects
to create this sweep surface.
Because you are creating a surface, the sections can be open.
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

- Create Surface-sweep Feature (C#) (Create_Surface-sweep_Feature_Example_CSharp.htm)
- Create Surface-sweep Feature (VB.NET) (Create_Surface-sweep_Feature_Example_VBNET.htm)
- Create Surface-sweep Feature (VBA) (Create_Surface-sweep_Feature_Example_VB.htm)

## See Also

- `IFeatureManager.InsertCutSwept5`
- `IFeatureManager.InsertProtrusionSwept4`
- `IModeler.CreateSweptSurface`
- `IModeler.ICreateSweptSurface`
- `ISweepFeatureData`