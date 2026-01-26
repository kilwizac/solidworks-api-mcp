---
type: method
interface: IModelDoc2
member: FeatureCurvePattern
returns: void
parameters:
  -
    name: Num1
    type: System.Int32
    description: Number of instances in the first direction, including the original
  -
    name: Spacing1
    type: System.Double
    description: Spacing in radians
  -
    name: Num2
    type: System.Int32
    description: Number of instances in the second direction
  -
    name: Spacing2
    type: System.Double
    description: Spacing in radians
  -
    name: FlipDir1
    type: System.Boolean
    description: True flips the direction of the first direction, false does not
  -
    name: FlipDir2
    type: System.Boolean
    description: True flips the direction of the second direction, false does not
  -
    name: EqualSpacing1
    type: System.Boolean
    description: True uses equal spacing between instances in the first direction, false does not
  -
    name: EqualSpacing2
    type: System.Boolean
    description: True uses equal spacing between instances in the second direction, false does not
  -
    name: UseCentroid
    type: System.Boolean
    description: True uses the centroid as reference point, false does not
  -
    name: AlignToSeed
    type: System.Boolean
    description: True aligns the new objects with the seed feature, false does not
  -
    name: OffsetCurve
    type: System.Boolean
    description: True offsets the curve, false transforms it
  -
    name: PatternSeedOnly
    type: System.Boolean
    description: True uses only the seed feature in the second direction, false does not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related: []
keywords:
  - featurecurvepattern
  - imodeldoc2
  - model
  - doc2
  - feature
  - curve
  - pattern
  - num1
  - int32
  - spacing1
  - double
  - num2
  - spacing2
  - flip
  - dir1
  - boolean
  - dir2
  - equal
  - use
  - centroid
  - align
  - seed
  - offset
  - only
  - void
---

# IModelDoc2.FeatureCurvePattern

Obsolete. See IFeatureManager::CreateFeature and the Remarks of ICurveDrivenPatternFeatureData.

## Signature

```csharp
void FeatureCurvePattern( 
   System.Int32
Num1
,
   System.Double
Spacing1
,
   System.Int32
Num2
,
   System.Double
Spacing2
,
   System.Boolean
FlipDir1
,
   System.Boolean
FlipDir2
,
   System.Boolean
EqualSpacing1
,
   System.Boolean
EqualSpacing2
,
   System.Boolean
UseCentroid
,
   System.Boolean
AlignToSeed
,
   System.Boolean
OffsetCurve
,
   System.Boolean
PatternSeedOnly
)
```
## Parameters

- `Num1` (System.Int32): Number of instances in the first direction, including the original
- `Spacing1` (System.Double): Spacing in radians
- `Num2` (System.Int32): Number of instances in the second direction
- `Spacing2` (System.Double): Spacing in radians
- `FlipDir1` (System.Boolean): True flips the direction of the first direction, false does not
- `FlipDir2` (System.Boolean): True flips the direction of the second direction, false does not
- `EqualSpacing1` (System.Boolean): True uses equal spacing between instances in the first direction, false does not
- `EqualSpacing2` (System.Boolean): True uses equal spacing between instances in the second direction, false does not
- `UseCentroid` (System.Boolean): True uses the centroid as reference point, false does not
- `AlignToSeed` (System.Boolean): True aligns the new objects with the seed feature, false does not
- `OffsetCurve` (System.Boolean): True offsets the curve, false transforms it
- `PatternSeedOnly` (System.Boolean): True uses only the seed feature in the second direction, false does not

## Return Value

Unknown.