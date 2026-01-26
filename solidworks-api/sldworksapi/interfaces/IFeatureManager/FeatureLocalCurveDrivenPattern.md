---
type: method
interface: IFeatureManager
member: FeatureLocalCurveDrivenPattern
returns: Feature
parameters:
  -
    name: FlipDir1
    type: System.Boolean
    description: True flips the direction of the first direction, false does not
  -
    name: Num1
    type: System.Int32
    description: Number of instances in the first direction, including the original instance
  -
    name: EqualSpacing1
    type: System.Boolean
    description: True uses equal spacing between instances in the first direction, false does not
  -
    name: Spacing1
    type: System.Double
    description: Distance between pattern instances along the curve in the first direction when EqualSpacing1 is set to false
  -
    name: ReferencePoint
    type: System.Int32
    description: Type of selected reference point as defined in swLocalCurvePatternReferencePoint_e (see Remarks )
  -
    name: CurveMethod
    type: System.Int32
    description: Curve method as defined in swLocalCurvePatternCurveMethod_e
  -
    name: AlignMethod
    type: System.Int32
    description: Alignment method as defined in swLocalCurvePatternAlignment_e
  -
    name: Direction2
    type: System.Boolean
    description: True creates the pattern in the second direction, false does not
  -
    name: FlipDir2
    type: System.Boolean
    description: True flips the direction of the second direction, false does not
  -
    name: Num2
    type: System.Int32
    description: Number of instances in the second direction
  -
    name: EqualSpacing2
    type: System.Boolean
    description: True uses equal spacing between instances in the second direction, false does not
  -
    name: Spacing2
    type: System.Double
    description: Distance between pattern instances along the curve in the second direction when EqualSpacing2 is set to false
  -
    name: PatternSeedOnly
    type: System.Boolean
    description: True replicates only the seed pattern, which was created under Direction 1, under Direction 2; false replicates all instances of the curve pattern, which was created under Direction 1, under Direction 2
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - featurelocalcurvedrivenpattern
  - ifeaturemanager
  - feature
  - manager
  - local
  - curve
  - driven
  - pattern
  - flip
  - dir1
  - boolean
  - num1
  - int32
  - equal
  - spacing1
  - double
  - reference
  - point
  - align
  - direction2
  - dir2
  - num2
  - spacing2
  - seed
  - only
---

# IFeatureManager.FeatureLocalCurveDrivenPattern

Obsolete. See IFeatureManager::CreateFeature and the Remarks in ILocalCurvePatternFeatureData.

## Signature

```csharp
Feature FeatureLocalCurveDrivenPattern( 
   System.Boolean
FlipDir1
,
   System.Int32
Num1
,
   System.Boolean
EqualSpacing1
,
   System.Double
Spacing1
,
   System.Int32
ReferencePoint
,
   System.Int32
CurveMethod
,
   System.Int32
AlignMethod
,
   System.Boolean
Direction2
,
   System.Boolean
FlipDir2
,
   System.Int32
Num2
,
   System.Boolean
EqualSpacing2
,
   System.Double
Spacing2
,
   System.Boolean
PatternSeedOnly
)
```
## Parameters

- `FlipDir1` (System.Boolean): True flips the direction of the first direction, false does not
- `Num1` (System.Int32): Number of instances in the first direction, including the original instance
- `EqualSpacing1` (System.Boolean): True uses equal spacing between instances in the first direction, false does not
- `Spacing1` (System.Double): Distance between pattern instances along the curve in the first direction when EqualSpacing1 is set to false
- `ReferencePoint` (System.Int32): Type of selected reference point as defined in swLocalCurvePatternReferencePoint_e (see Remarks )
- `CurveMethod` (System.Int32): Curve method as defined in swLocalCurvePatternCurveMethod_e
- `AlignMethod` (System.Int32): Alignment method as defined in swLocalCurvePatternAlignment_e
- `Direction2` (System.Boolean): True creates the pattern in the second direction, false does not
- `FlipDir2` (System.Boolean): True flips the direction of the second direction, false does not
- `Num2` (System.Int32): Number of instances in the second direction
- `EqualSpacing2` (System.Boolean): True uses equal spacing between instances in the second direction, false does not
- `Spacing2` (System.Double): Distance between pattern instances along the curve in the second direction when EqualSpacing2 is set to false
- `PatternSeedOnly` (System.Boolean): True replicates only the seed pattern, which was created under Direction 1, under Direction 2; false replicates all instances of the curve pattern, which was created under Direction 1, under Direction 2

## Return Value

Local curve pattern feature

## Remarks

To
select
...
Use a mark of...
Components to pattern
1
Curve, edge, sketch, or sketch entity for Direction 1
2
Curve, edge, sketch, or sketch entity for Direction 2
4
Reference point for ReferencePoint
NOTE:
If ReferencePoint is set to swLocalSketchPatternReferencePoint_e.swLocalSketchPatternSelectedPoint, then the selected reference point must be a vertex.
32
Face on which a 3D curve lies
64