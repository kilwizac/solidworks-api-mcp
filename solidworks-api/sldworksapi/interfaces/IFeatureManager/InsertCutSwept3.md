---
type: method
interface: IFeatureManager
member: InsertCutSwept3
returns: Feature
parameters:
  -
    name: Propagate
    type: System.Boolean
    description: True propagates the swept cut to the next edge, false causes the swept cut to occur only on the selected edge; to propagate to the next edge, the next edge must be tangent to the current edge
  -
    name: Alignment
    type: System.Boolean
    description: If the curve used to sweep goes from one face to another or from one edge to another, then passing True causes the sweep to cut completely through the end faces of the cut, false causes the swept cut to begin and end perpendicular to the sweep curve; therefore, it may not break through the two end faces of the body being cut
  -
    name: TwistCtrlOption
    type: System.Int16
    description: Twist control options as defined by swTwistControlType_e
  -
    name: KeepTangency
    type: System.Boolean
    description: If the sweep section has tangent segments, True to cause the corresponding surfaces in the resulting sweep to be tangent, false to not
  -
    name: BAdvancedSmoothing
    type: System.Boolean
    description: If the sweep section has circular or elliptical arcs, true to approximate the sections and smooth the surfaces, false to not
  -
    name: StartMatchingType
    type: System.Int16
    description: Tangency type as defined by swTangencyType_e
  -
    name: EndMatchingType
    type: System.Int16
    description: Tangency type as defined by swTangencyType_e
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
    description: Thin wall type as defined by swThinWallType_e
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
    description: If twistCtrlOption set to swTwistControlConstantTwistAlongPath, then specify end twist angle
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
  - IFeatureManager.InsertProtrusionSwept3
  - ISweepFeatureData
keywords:
  - insertcutswept3
  - ifeaturemanager
  - feature
  - manager
  - insert
  - cut
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
  - use
  - feat
  - scope
  - auto
  - select
  - angle
  - merge
  - smooth
  - faces
---

# IFeatureManager.InsertCutSwept3

Obsolete. Superseded by IFeatureManager::InsertCutSwept4.

## Signature

```csharp
Feature InsertCutSwept3( 
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
)
```
## Parameters

- `Propagate` (System.Boolean): True propagates the swept cut to the next edge, false causes the swept cut to occur only on the selected edge; to propagate to the next edge, the next edge must be tangent to the current edge
- `Alignment` (System.Boolean): If the curve used to sweep goes from one face to another or from one edge to another, then passing True causes the sweep to cut completely through the end faces of the cut, false causes the swept cut to begin and end perpendicular to the sweep curve; therefore, it may not break through the two end faces of the body being cut
- `TwistCtrlOption` (System.Int16): Twist control options as defined by swTwistControlType_e
- `KeepTangency` (System.Boolean): If the sweep section has tangent segments, True to cause the corresponding surfaces in the resulting sweep to be tangent, false to not
- `BAdvancedSmoothing` (System.Boolean): If the sweep section has circular or elliptical arcs, true to approximate the sections and smooth the surfaces, false to not
- `StartMatchingType` (System.Int16): Tangency type as defined by swTangencyType_e
- `EndMatchingType` (System.Int16): Tangency type as defined by swTangencyType_e
- `IsThinBody` (System.Boolean): True if this feature is a thin body, false if not
- `Thickness1` (System.Double): Thickness value for the first direction
- `Thickness2` (System.Double): Thickness value for the second direction
- `ThinType` (System.Int16): Thin wall type as defined by swThinWallType_e
- `PathAlign` (System.Int16): Align path type (see Remarks )
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
- `TwistAngle` (System.Double): If twistCtrlOption set to swTwistControlConstantTwistAlongPath, then specify end twist angle
- `BMergeSmoothFaces` (System.Boolean): True to merge smooth faces, false to not

## Return Value

Pointer to the IFeature object

## Remarks

Use
IModelDocExtension::SelectByID2
to select the profile and sweep curves. The mark for:
1 = Profile selection
2 = Guide-curve selection, if provided
4 = Sweep path
The PathAlign argument is available when TwistCtrlOption is set to 0 and can take one of these values:
0 = None; no correction (default)
2 = Direction vector; a plane, planar face, or line defines the path
3 = All faces; includes neighboring faces
When UseAutoSelect is false, the user must select the bodies that the feature will affect.
When using cut or cavity features that result in multiple bodies, you cannot select to keep all of the resulting bodies or one or more selected bodies.

## See Also

- `IFeatureManager.InsertProtrusionSwept3`
- `ISweepFeatureData`