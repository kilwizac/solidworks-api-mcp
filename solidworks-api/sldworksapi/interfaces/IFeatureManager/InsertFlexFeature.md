---
type: method
interface: IFeatureManager
member: InsertFlexFeature
returns: Feature
parameters:
  -
    name: RotX
    type: System.Double
    description: x coordinate for the rotation axis
  -
    name: RotY
    type: System.Double
    description: y coordinate for the rotation axis
  -
    name: RotZ
    type: System.Double
    description: z coordinate for the rotation axis
  -
    name: TanX
    type: System.Double
    description: x coordinate for the tangent axis
  -
    name: TanY
    type: System.Double
    description: y coordinate for the tangent axis
  -
    name: TanZ
    type: System.Double
    description: z coordinate for the tangent axis
  -
    name: RadX
    type: System.Double
    description: x coordinate for the radius axis
  -
    name: RadY
    type: System.Double
    description: y coordinate for the radius axis
  -
    name: RadZ
    type: System.Double
    description: z coordinate for the radius axis
  -
    name: Angle
    type: System.Double
    description: Angle
  -
    name: PivotX
    type: System.Double
    description: x coordinate for the pivot triad reference
  -
    name: PivotY
    type: System.Double
    description: y coordinate for the pivot triad reference
  -
    name: PivotZ
    type: System.Double
    description: z coordinate for the pivot triad reference
  -
    name: Type
    type: System.Int32
    description: -1 =None 0 = Bending 1 = Twisting 2 = Tapering 3 = Stretching 4 = Experimental
  -
    name: LeftTrim
    type: System.Double
    description: Left trimming distance
  -
    name: RightTrim
    type: System.Double
    description: Right trimming distance
  -
    name: HardEdges
    type: System.Boolean
    description: True to embed edges where the trim planes intersect the body, false to create smoother continuous faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - flexes
  - feature
  - see
  - also
  - ifeature
  - flex
  - insertflexfeature
  - ifeaturemanager
  - manager
  - insert
  - rot
  - double
  - tan
  - rad
  - angle
  - pivot
  - type
  - int32
  - left
  - trim
  - right
  - hard
  - edges
  - boolean
---

# IFeatureManager.InsertFlexFeature

Inserts a Flex feature using the selected solid or surface body.

## Signature

```csharp
Feature InsertFlexFeature( 
   System.Double
RotX
,
   System.Double
RotY
,
   System.Double
RotZ
,
   System.Double
TanX
,
   System.Double
TanY
,
   System.Double
TanZ
,
   System.Double
RadX
,
   System.Double
RadY
,
   System.Double
RadZ
,
   System.Double
Angle
,
   System.Double
PivotX
,
   System.Double
PivotY
,
   System.Double
PivotZ
,
   System.Int32
Type
,
   System.Double
LeftTrim
,
   System.Double
RightTrim
,
   System.Boolean
HardEdges
)
```
## Parameters

- `RotX` (System.Double): x coordinate for the rotation axis
- `RotY` (System.Double): y coordinate for the rotation axis
- `RotZ` (System.Double): z coordinate for the rotation axis
- `TanX` (System.Double): x coordinate for the tangent axis
- `TanY` (System.Double): y coordinate for the tangent axis
- `TanZ` (System.Double): z coordinate for the tangent axis
- `RadX` (System.Double): x coordinate for the radius axis
- `RadY` (System.Double): y coordinate for the radius axis
- `RadZ` (System.Double): z coordinate for the radius axis
- `Angle` (System.Double): Angle
- `PivotX` (System.Double): x coordinate for the pivot triad reference
- `PivotY` (System.Double): y coordinate for the pivot triad reference
- `PivotZ` (System.Double): z coordinate for the pivot triad reference
- `Type` (System.Int32): -1 =None 0 = Bending 1 = Twisting 2 = Tapering 3 = Stretching 4 = Experimental
- `LeftTrim` (System.Double): Left trimming distance
- `RightTrim` (System.Double): Right trimming distance
- `HardEdges` (System.Boolean): True to embed edges where the trim planes intersect the body, false to create smoother continuous faces

## Return Value

Pointer to the IFeature object