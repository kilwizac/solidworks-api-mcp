---
type: method
interface: IFeatureManager
member: InsertProtrusionSwept3
returns: Feature
parameters:
  -
    name: Propagate
    type: System.Boolean
    description: True propagates the swept protrusion to the next tangent edge, false does not
  -
    name: Alignment
    type: System.Boolean
    description: True causes the swept protrusion to go through the end faces if the curve used for the sweep goes from one face to another or from one edge to another, false causes the swept protrusion to begin and end perpendicular to the sweep curve and it cannot break through the two end faces of the body
  -
    name: TwistCtrlOption
    type: System.Int16
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
related:
  - IFeatureManager.InsertCutSwept3
  - IFeatureManager.InsertSweepSurface2
  - ISweepFeatureData
keywords:
  - insertprotrusionswept3
  - ifeaturemanager
  - feature
  - manager
  - insert
  - protrusion
  - swept3
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
  - merge
  - use
  - feat
  - scope
  - auto
  - select
  - angle
  - smooth
  - faces
---

# IFeatureManager.InsertProtrusionSwept3

Obsolete. Superseded by IFeatureManager::InsertProtrusionSwept4.

## Signature

```csharp
Feature InsertProtrusionSwept3( 
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
)
```
## Parameters

- `Propagate` (System.Boolean): True propagates the swept protrusion to the next tangent edge, false does not
- `Alignment` (System.Boolean): True causes the swept protrusion to go through the end faces if the curve used for the sweep goes from one face to another or from one edge to another, false causes the swept protrusion to begin and end perpendicular to the sweep curve and it cannot break through the two end faces of the body
- `TwistCtrlOption` (System.Int16): Twist control options as defined in swTwistControlType_e
- `KeepTangency` (System.Boolean): If the sweep section has tangent segments, then true to cause the corresponding surfaces in the resulting sweep to be tangent, false to not
- `BAdvancedSmoothing` (System.Boolean): If the sweep section has circular or elliptical arcs, then true to approximate the sections and smooth the surfaces, false to not
- `StartMatchingType` (System.Int16): Tangency type as defined in swTangencyType_e
- `EndMatchingType` (System.Int16): Tangency type as defined in swTangencyType_e
- `IsThinBody` (System.Boolean): True if this feature is a thin body, false if not
- `Thickness1` (System.Double): Thickness value for the first direction
- `Thickness2` (System.Double): Thickness value for the second direction
- `ThinType` (System.Int16): Thin wall type as defined in swThinWallType_e
- `PathAlign` (System.Int16): Align path type (see Remarks )
- `Merge` (System.Boolean): True to merge the results in a multibody part, false to not
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
- `TwistAngle` (System.Double): If TwistCtrlOption set to swTwistControlType_e.swTwistControlConstantTwistAlongPath, then specify end twist angle
- `BMergeSmoothFaces` (System.Boolean): True to merge smooth faces, false to not

## Return Value

Pointer to the IFeature object

## Remarks

Use
IModelDocExtension::SelectByID2
to select the profile and sweep curves. The mark for:
1 = Profile selection
2 = Guide curve selection, if provided
4 = Sweep path
The PathAlign argument is available when TwistCtrlOption is set to 0 (follow path) and can take one of these values:
0 = None; no correction (default)
2 = Direction vector; a plane, planar face, or line defines the path
3 = All faces; includes neighboring faces
When UseAutoSelect is false, the user must select the bodies that the feature will affect.

## See Also

- `IFeatureManager.InsertCutSwept3`
- `IFeatureManager.InsertSweepSurface2`
- `ISweepFeatureData`