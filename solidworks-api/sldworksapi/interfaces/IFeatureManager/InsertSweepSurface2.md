---
type: method
interface: IFeatureManager
member: InsertSweepSurface2
returns: Feature
parameters:
  -
    name: Propagate
    type: System.Boolean
    description: True propagates the sweep to the next edge, false causes the sweep to occur only on the selected edge; to propagate to the next edge, the next edge must be tangent to the current edge
  -
    name: TwistCtrlOption
    type: System.Int16
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
    type: System.Int16
    description: Tangency type as defined in swTangencyType_e
  -
    name: EndMatchingType
    type: System.Int16
    description: Tangency type as defined in swTangencyType_e
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
    description: If TwistCtrlOption set to swTwistControlType_e.swTwistControlConstantTwistAlongPath, then specify end twist angle
  -
    name: BMergeSmoothFaces
    type: System.Boolean
    description: True to merge smooth faces, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - insertsweepsurface2
  - ifeaturemanager
  - feature
  - manager
  - insert
  - sweep
  - surface2
  - propagate
  - boolean
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
---

# IFeatureManager.InsertSweepSurface2

Obsolete. Superseded by IFeatureManager::InsertSweepSurface3.

## Signature

```csharp
Feature InsertSweepSurface2( 
   System.Boolean
Propagate
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
)
```
## Parameters

- `Propagate` (System.Boolean): True propagates the sweep to the next edge, false causes the sweep to occur only on the selected edge; to propagate to the next edge, the next edge must be tangent to the current edge
- `TwistCtrlOption` (System.Int16): Twist control option as defined in swTwistControlType_e
- `KeepTangency` (System.Boolean): If the sweep section has tangent segments, then true to cause the corresponding surfaces in the resulting sweep to be tangent, false to not
- `BAdvancedSmoothing` (System.Boolean): If the sweep section has circular or elliptical arcs, then true to approximate the sections and smooth the surfaces, false to not
- `StartMatchingType` (System.Int16): Tangency type as defined in swTangencyType_e
- `EndMatchingType` (System.Int16): Tangency type as defined in swTangencyType_e
- `PathAlign` (System.Int16): Align path type (see Remarks )
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
- `TwistAngle` (System.Double): If TwistCtrlOption set to swTwistControlType_e.swTwistControlConstantTwistAlongPath, then specify end twist angle
- `BMergeSmoothFaces` (System.Boolean): True to merge smooth faces, false to not

## Return Value

Pointer to the IFeature object

## Remarks

Because you are creating a surface, the sections can be open.
Use
IModelDocExtension::SelectByID2
to select the profile and sweep curves. The mark for:
1 = Profile selection
2 = Guide curve selection, if provided
4 = Sweep path
The PathAlign argument is available when TwistCtrlOption is set to swTwistControlFollowPath and can take one of these values:
0 = None; no correction (default)
2 = Direction vector; a plane, planar face, or line defines the path
3 = All faces; includes neighboring faces
When UseAutoSelect is false, the user must select the bodies that the feature will affect.