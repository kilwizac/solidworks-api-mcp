---
type: method
interface: IFeatureManager
member: FeatureRevolve2
returns: Feature
parameters:
  -
    name: SingleDir
    type: System.Boolean
    description: True if the revolve is in one direction, false if in two directions (see Remarks )
  -
    name: IsSolid
    type: System.Boolean
    description: True if this is a solid revolve feature, false if not
  -
    name: IsThin
    type: System.Boolean
    description: True if this is a thin revolve feature, false if not
  -
    name: IsCut
    type: System.Boolean
    description: True if this is a cut revolve feature, false if not
  -
    name: ReverseDir
    type: System.Boolean
    description: True reverses the angle of the revolution, false does not; only applies if Dir1Type is not swEndConditions_e.swEndCondMidPlane
  -
    name: BothDirectionUpToSameEntity
    type: System.Boolean
    description: True if the revolve is up to the same entity in both directions, false if not; only applies if SingleDir is false and Dir1Type and Dir2Type are swEndConditions_e.swEndCondUpToVertex, swEndConditions_e.swEndCondUpToSurface, or swEndConditions_e.swEndCondOffsetFromSurface) (see Remarks )
  -
    name: Dir1Type
    type: System.Int32
    description: Revolve end condition as defined in swEndConditions_e
  -
    name: Dir2Type
    type: System.Int32
    description: Revolve end condition in direction 2; as defined in swEndConditions_e and only applies if Dir1Type is not swEndConditions_e.swEndCondMidPlane
  -
    name: Dir1Angle
    type: System.Double
    description: Angle in radians of revolution in direction 1; only applies if Dir1Type is swEndConditions_e.swEndCondBlind
  -
    name: Dir2Angle
    type: System.Double
    description: Angle in radians of revolution in direction 2; only applies if Dir2Type is swEndConditions_e.swEndCondBlind
  -
    name: OffsetReverse1
    type: System.Boolean
    description: True to reverse the offset direction in direction 1, false to not; only applies if Dir1Type is swEndConditions_e.swEndCondOffsetFromSurface
  -
    name: OffsetReverse2
    type: System.Boolean
    description: True to reverse the offset direction in direction 2, false to not; only applies if Dir2Type is swEndConditions_e.swEndCondOffsetFromSurface
  -
    name: OffsetDistance1
    type: System.Double
    description: Offset distance in direction 1; only applies if Dir1Type is swEndConditions_e.swEndCondOffsetFromSurface
  -
    name: OffsetDistance2
    type: System.Double
    description: Offset distance in direction 2; only applies if Dir2Type is swEndConditions_e.swEndCondOffsetFromSurface
  -
    name: ThinType
    type: System.Int32
    description: Type and direction as defined in swThinWallType_e
  -
    name: ThinThickness1
    type: System.Double
    description: Wall thickness in direction 1 (if ThinType is swThinWallType_e.swThinWallMidPlane, (ThinThickness1)/2 is used for each direction)
  -
    name: ThinThickness2
    type: System.Double
    description: Wall thickness in direction 2 (only applies if ThinType is swThinWallType_e.swThinWallTwoDirection)
  -
    name: Merge
    type: System.Boolean
    description: True to merge the results into a multi-body part, false to not
  -
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies (see Remarks )
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies or components that the feature affects (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRevolveFeatureData2
keywords:
  - base
  - revolve
  - boss
  - feature
  - see
  - also
  - ifeature
  - revolves
  - irevolvefeaturedata2
  - features
  - featurerevolve2
  - ifeaturemanager
  - manager
  - revolve2
  - single
  - dir
  - boolean
  - solid
  - thin
  - cut
  - reverse
  - both
  - direction
  - up
  - same
  - entity
  - dir1
  - type
  - int32
  - dir2
  - angle
  - double
  - offset
  - reverse1
  - reverse2
  - distance1
  - distance2
  - thickness1
  - thickness2
  - merge
  - use
  - feat
  - scope
  - auto
  - select
  - create
  - vba
  - vb
  - net
  - two
  - directions
  - 360
  - degree
---

# IFeatureManager.FeatureRevolve2

Creates a base-, boss-, or cut-revolve feature.

## Signature

```csharp
Feature FeatureRevolve2( 
   System.Boolean
SingleDir
,
   System.Boolean
IsSolid
,
   System.Boolean
IsThin
,
   System.Boolean
IsCut
,
   System.Boolean
ReverseDir
,
   System.Boolean
BothDirectionUpToSameEntity
,
   System.Int32
Dir1Type
,
   System.Int32
Dir2Type
,
   System.Double
Dir1Angle
,
   System.Double
Dir2Angle
,
   System.Boolean
OffsetReverse1
,
   System.Boolean
OffsetReverse2
,
   System.Double
OffsetDistance1
,
   System.Double
OffsetDistance2
,
   System.Int32
ThinType
,
   System.Double
ThinThickness1
,
   System.Double
ThinThickness2
,
   System.Boolean
Merge
,
   System.Boolean
UseFeatScope
,
   System.Boolean
UseAutoSelect
)
```
## Parameters

- `SingleDir` (System.Boolean): True if the revolve is in one direction, false if in two directions (see Remarks )
- `IsSolid` (System.Boolean): True if this is a solid revolve feature, false if not
- `IsThin` (System.Boolean): True if this is a thin revolve feature, false if not
- `IsCut` (System.Boolean): True if this is a cut revolve feature, false if not
- `ReverseDir` (System.Boolean): True reverses the angle of the revolution, false does not; only applies if Dir1Type is not swEndConditions_e.swEndCondMidPlane
- `BothDirectionUpToSameEntity` (System.Boolean): True if the revolve is up to the same entity in both directions, false if not; only applies if SingleDir is false and Dir1Type and Dir2Type are swEndConditions_e.swEndCondUpToVertex, swEndConditions_e.swEndCondUpToSurface, or swEndConditions_e.swEndCondOffsetFromSurface) (see Remarks )
- `Dir1Type` (System.Int32): Revolve end condition as defined in swEndConditions_e
- `Dir2Type` (System.Int32): Revolve end condition in direction 2; as defined in swEndConditions_e and only applies if Dir1Type is not swEndConditions_e.swEndCondMidPlane
- `Dir1Angle` (System.Double): Angle in radians of revolution in direction 1; only applies if Dir1Type is swEndConditions_e.swEndCondBlind
- `Dir2Angle` (System.Double): Angle in radians of revolution in direction 2; only applies if Dir2Type is swEndConditions_e.swEndCondBlind
- `OffsetReverse1` (System.Boolean): True to reverse the offset direction in direction 1, false to not; only applies if Dir1Type is swEndConditions_e.swEndCondOffsetFromSurface
- `OffsetReverse2` (System.Boolean): True to reverse the offset direction in direction 2, false to not; only applies if Dir2Type is swEndConditions_e.swEndCondOffsetFromSurface
- `OffsetDistance1` (System.Double): Offset distance in direction 1; only applies if Dir1Type is swEndConditions_e.swEndCondOffsetFromSurface
- `OffsetDistance2` (System.Double): Offset distance in direction 2; only applies if Dir2Type is swEndConditions_e.swEndCondOffsetFromSurface
- `ThinType` (System.Int32): Type and direction as defined in swThinWallType_e
- `ThinThickness1` (System.Double): Wall thickness in direction 1 (if ThinType is swThinWallType_e.swThinWallMidPlane, (ThinThickness1)/2 is used for each direction)
- `ThinThickness2` (System.Double): Wall thickness in direction 2 (only applies if ThinType is swThinWallType_e.swThinWallTwoDirection)
- `Merge` (System.Boolean): True to merge the results into a multi-body part, false to not
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies (see Remarks )
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies or components that the feature affects (see Remarks )

## Return Value

Feature

## Remarks

Before calling this method, call
IModelDocExtension::SelectByID2
to select:
the sketch to revolve, using Mark = 0.
the axis of revolution, using Mark = 4 or 16.
the up-to surface, up-to vertex, or offset-from surface, using Mark = 32.
one or more affected bodies or components (only if UseFeatScope is set to true and UseAutoSel is set to false), using Mark = 1 for each.
If SingleDir is false and the revolve is up to or offset from the same entity in both directions, select the entity once and set BothDirectionUpToSameEntity to true. If you select the same entity for each direction, the second selection negates the first, and the revolve feature is not created.
NOTE
: This method provides more functionality, i.e., additional end conditions, than the now obsolete
IFeatureManager::FeatureRevolveCut2
,
IFeatureManager::FeatureRevolveThin
, and
IFeatureManager::FeatureRevolveThinCut
.

## Examples

- Create Revolve Features (VBA) (Create_Revolve_Features_Example_VB.htm)
- Create Revolve Features (VB.NET) (Create_Revolve_Features_Example_VBNET.htm)
- Create Revolve Features (C#) (Create_Revolve_Features_Example_CSharp.htm)
- Create Thin Feature Revolve in Two Directions (VBA) (Create_Thin_Feature_Revolve_in_Two_Directions_Example_VB.htm)
- Create Thin Feature Revolve in Two Directions (VB.NET) (Create_Thin_Feature_Revolve_in_Two_Directions_Example_VBNET.htm)
- Create Thin Feature Revolve in Two Directions (C#) (Create_Thin_Feature_Revolve_in_Two_Directions_Example_CSharp.htm)
- Create 360-degree Revolve Feature (VBA) (Create_360-degree_Revolve_Feature_Example_VB.htm)
- Create 360-degree Revolve Feature (VB.NET) (Create_360-degree_Revolve_Feature_Example_VBNET.htm)
- Create 360-degree Revolve Feature (C#) (Create_360-degree_Revolve_Feature_Example_CSharp.htm)

## See Also

- `IRevolveFeatureData2`