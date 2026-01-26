---
type: method
interface: IFeatureManager
member: FeatureFillPattern
returns: Feature
parameters:
  -
    name: PatternLayoutType
    type: System.Int32
    description: Pattern layout type as defined in swPatternLayoutType_e
  -
    name: LayoutSpacingType
    type: System.Int32
    description: Pattern layout spacing as defined in swPatternLayoutSpacingType_e
  -
    name: InstanceSpacing
    type: System.Double
    description: Distance between pattern instance centers; valid always for PatternLayoutType = swPatternLayoutType_e.swPatternLayoutPerforation; valid for all other PatternLayoutTypes only if LayoutSpacingType = swPatternLayoutSpacingType_e.swPatternLayoutTargetSpacing
  -
    name: StaggerAngle
    type: System.Double
    description: Angle by which to stagger rows of pattern instances; valid only if PatternLayoutType = swPatternLayoutType_e.swPatternLayoutPerforation
  -
    name: Margins
    type: System.Double
    description: Distance between the fill boundary and the outermost instance in the pattern layout; 0 for no margin
  -
    name: LoopSpacing
    type: System.Double
    description: Distance between instance centers of adjacent pattern loops; valid for all PatternLayoutTypes except swPatternLayoutType_e.swPatternLayoutPerforation
  -
    name: NoOfInstances
    type: System.Int32
    description: Number of pattern instances per loop or side of the pattern layout; valid only if both are true: LayoutSpacingType = swPatternLayoutSpacingType_e.swPatternLayoutInstances PatternLayoutType is set to one of the following: swPatternLayoutType_e.swPatternLayoutCircular swPatternLayoutType_e.swPatternLayoutPolygon swPatternLayoutType_e.swPatternLayoutSquare
  -
    name: PatternLayoutPolygonSides
    type: System.Int32
    description: Number of sides in the polygonal layout of the pattern; valid only if PatternLayoutType = swPatternLayoutType_e.swPatternLayoutPolygon
  -
    name: FeaturesToPatternType
    type: System.Int32
    description: Type of objects to pattern as defined in swFeaturesToPatternType_e
  -
    name: CreateSeedCutType
    type: System.Int32
    description: Pattern seed cut types as defined in swCreateSeedCutType_e
  -
    name: Diameter
    type: System.Double
    description: Diameter of the circle-cut seed instance; valid only if both are true: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType = swCreateSeedCutType_e.swCreateSeedCutCircle
  -
    name: Dimension
    type: System.Double
    description: Length of the side of a diamond-cut or square-cut seed instance; valid only if both are true: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType is set to one of the following: swCreateSeedCutType_e.swCreateSeedCutDiamond swCreateSeedCutType_e.swCreateSeedCutSquare
  -
    name: Rotation
    type: System.Double
    description: Counterclockwise rotation of the seed instance; valid only if both are true: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType is set to one of the following: swCreateSeedCutType_e.swCreateSeedCutDiamond swCreateSeedCutType_e.swCreateSeedCutPolygon swCreateSeedCutType_e.swCreateSeedCutSquare
  -
    name: Diagonal
    type: System.Double
    description: Length of the diagonal in the diamond-cut seed instance; valid only if both are true: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType = swCreateSeedCutType_e.swCreateSeedCutDiamond
  -
    name: CreateSeedCutPolygonSides
    type: System.Int32
    description: Number of sides in the polygon-cut seed instance; valid only if both are true: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType = swCreateSeedCutType_e.swCreateSeedCutPolygon
  -
    name: OuterRadius
    type: System.Double
    description: Radius of circle that circumscribes the polygon-cut seed instance; valid only if both are ture: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType = swCreateSeedCutType_e.swCreateSeedCutPolygon
  -
    name: InnerRadius
    type: System.Double
    description: Radius of circle that inscribes the polygon-cut seed instance; valid only if both are true: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType = swCreateSeedCutType_e.swCreateSeedCutPolygon
  -
    name: FlipShapeDirection
    type: System.Boolean
    description: True to reverse the direction of the pattern seed cut; valid only if FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut
  -
    name: GeometryPattern
    type: System.Boolean
    description: True to create the pattern using an exact copy of the seed instance, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - featurefillpattern
  - ifeaturemanager
  - feature
  - manager
  - fill
  - pattern
  - layout
  - type
  - int32
  - spacing
  - instance
  - double
  - stagger
  - angle
  - margins
  - loop
  - no
  - instances
  - polygon
  - sides
  - features
  - create
  - seed
  - cut
  - diameter
  - dimension
  - rotation
  - diagonal
  - outer
  - radius
  - inner
  - flip
  - shape
  - direction
  - boolean
  - geometry
---

# IFeatureManager.FeatureFillPattern

Obsolete. See IFeatureManager::CreateFeature and the Remarks in IFillPatternFeatureData.

## Signature

```csharp
Feature FeatureFillPattern( 
   System.Int32
PatternLayoutType
,
   System.Int32
LayoutSpacingType
,
   System.Double
InstanceSpacing
,
   System.Double
StaggerAngle
,
   System.Double
Margins
,
   System.Double
LoopSpacing
,
   System.Int32
NoOfInstances
,
   System.Int32
PatternLayoutPolygonSides
,
   System.Int32
FeaturesToPatternType
,
   System.Int32
CreateSeedCutType
,
   System.Double
Diameter
,
   System.Double
Dimension
,
   System.Double
Rotation
,
   System.Double
Diagonal
,
   System.Int32
CreateSeedCutPolygonSides
,
   System.Double
OuterRadius
,
   System.Double
InnerRadius
,
   System.Boolean
FlipShapeDirection
,
   System.Boolean
GeometryPattern
)
```
## Parameters

- `PatternLayoutType` (System.Int32): Pattern layout type as defined in swPatternLayoutType_e
- `LayoutSpacingType` (System.Int32): Pattern layout spacing as defined in swPatternLayoutSpacingType_e
- `InstanceSpacing` (System.Double): Distance between pattern instance centers; valid always for PatternLayoutType = swPatternLayoutType_e.swPatternLayoutPerforation; valid for all other PatternLayoutTypes only if LayoutSpacingType = swPatternLayoutSpacingType_e.swPatternLayoutTargetSpacing
- `StaggerAngle` (System.Double): Angle by which to stagger rows of pattern instances; valid only if PatternLayoutType = swPatternLayoutType_e.swPatternLayoutPerforation
- `Margins` (System.Double): Distance between the fill boundary and the outermost instance in the pattern layout; 0 for no margin
- `LoopSpacing` (System.Double): Distance between instance centers of adjacent pattern loops; valid for all PatternLayoutTypes except swPatternLayoutType_e.swPatternLayoutPerforation
- `NoOfInstances` (System.Int32): Number of pattern instances per loop or side of the pattern layout; valid only if both are true: LayoutSpacingType = swPatternLayoutSpacingType_e.swPatternLayoutInstances PatternLayoutType is set to one of the following: swPatternLayoutType_e.swPatternLayoutCircular swPatternLayoutType_e.swPatternLayoutPolygon swPatternLayoutType_e.swPatternLayoutSquare
- `PatternLayoutPolygonSides` (System.Int32): Number of sides in the polygonal layout of the pattern; valid only if PatternLayoutType = swPatternLayoutType_e.swPatternLayoutPolygon
- `FeaturesToPatternType` (System.Int32): Type of objects to pattern as defined in swFeaturesToPatternType_e
- `CreateSeedCutType` (System.Int32): Pattern seed cut types as defined in swCreateSeedCutType_e
- `Diameter` (System.Double): Diameter of the circle-cut seed instance; valid only if both are true: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType = swCreateSeedCutType_e.swCreateSeedCutCircle
- `Dimension` (System.Double): Length of the side of a diamond-cut or square-cut seed instance; valid only if both are true: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType is set to one of the following: swCreateSeedCutType_e.swCreateSeedCutDiamond swCreateSeedCutType_e.swCreateSeedCutSquare
- `Rotation` (System.Double): Counterclockwise rotation of the seed instance; valid only if both are true: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType is set to one of the following: swCreateSeedCutType_e.swCreateSeedCutDiamond swCreateSeedCutType_e.swCreateSeedCutPolygon swCreateSeedCutType_e.swCreateSeedCutSquare
- `Diagonal` (System.Double): Length of the diagonal in the diamond-cut seed instance; valid only if both are true: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType = swCreateSeedCutType_e.swCreateSeedCutDiamond
- `CreateSeedCutPolygonSides` (System.Int32): Number of sides in the polygon-cut seed instance; valid only if both are true: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType = swCreateSeedCutType_e.swCreateSeedCutPolygon
- `OuterRadius` (System.Double): Radius of circle that circumscribes the polygon-cut seed instance; valid only if both are ture: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType = swCreateSeedCutType_e.swCreateSeedCutPolygon
- `InnerRadius` (System.Double): Radius of circle that inscribes the polygon-cut seed instance; valid only if both are true: FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut CreateSeedCutType = swCreateSeedCutType_e.swCreateSeedCutPolygon
- `FlipShapeDirection` (System.Boolean): True to reverse the direction of the pattern seed cut; valid only if FeaturesToPatternType = swFeaturesToPatternType_e.swFeaturesToPatternCreateSeedCut
- `GeometryPattern` (System.Boolean): True to create the pattern using an exact copy of the seed instance, false to not

## Return Value

Feature

## Remarks

Insert > Pattern/Mirror > Fill Pattern
in the SOLIDWORKS menu opens the Fill Pattern PropertyManager. The parameters in this method correspond to the options in the Fill Pattern PropertyManager.
For all pattern layouts except
swPatternLayoutType_e
.swPatternLayoutPerforation, the fill pattern is created by positioning a pattern seed instance within the fill boundary and copying the pattern in concentric loops about the seed instance.
See the SOLIDWORKS Help for more information about fill pattern features.
To create a fill pattern:
Use
IModelDocExtension::SelectByID2
or another selection method to select the entities required to create a fill pattern feature.
Select...
For the Fill Pattern's...
Using Mark...
Sketch, face, planar curve on a face, or coplanar faces
Fill boundary
1
Direction reference (e.g., edge or axis)
Pattern direction (if not selected, SOLIDWORKS chooses a direction reference appropriate for the specified layout)
2
Vertex or sketch point
Location of the pattern seed instance (if a point is not selected, the pattern seed instance is placed at the center of the fill boundary region)
3
Features
Pattern objects
4
Faces
Pattern objects
5
Bodies
Pattern objects
6
Call this method, specifying the following parameters:
PatternLayoutType
LayoutSpacingType
FeaturesToPatternType
GeometryPattern
LoopSpacing (for all PatternLayoutTypes except swPatternLayoutType_e.swPatternLayoutPerforation)
Depending on the settings above, other parameters might need to be specified.