---
type: method
interface: IFeatureManager
member: MoveRotateLiveSectionPlane
returns: System.Boolean
parameters:
  -
    name: Feat
    type: System.String
    description: Name of the Live Section Plane as it appears in the FeatureManager design tree
  -
    name: Type
    type: System.Int16
    description: 0 = Move only, then (XorDeltaX, YorDeltaY, and ZorDeltaZ) is delta vector 1 = Rotate only, then (XorDeltaX, YorDeltaY, and ZorDeltaZ) is the pivot point for rotation, (axisX, axisY, axisZ) is rotating axis
  -
    name: XorDeltaX
    type: System.Double
    description: Delta X
  -
    name: YorDeltaY
    type: System.Double
    description: Delta Y
  -
    name: ZorDeltaZ
    type: System.Double
    description: Delta Z
  -
    name: Axisx
    type: System.Double
    description: X axis
  -
    name: Axisy
    type: System.Double
    description: Y axis
  -
    name: Axisz
    type: System.Double
    description: Z axis
  -
    name: Angle
    type: System.Double
    description: Value by to rotate the Live Section Plane
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertLiveSectionPlane
keywords:
  - live
  - section
  - planes
  - see
  - also
  - irefplane
  - moverotatelivesectionplane
  - ifeaturemanager
  - feature
  - manager
  - move
  - rotate
  - plane
  - feat
  - string
  - type
  - int16
  - xor
  - delta
  - double
  - yor
  - zor
  - axisx
  - axisy
  - axisz
  - angle
  - boolean
---

# IFeatureManager.MoveRotateLiveSectionPlane

Moves or rotates the selected Live Section Plane using the selected Live Section Plane and its manipulator.

## Signature

```csharp
System.Boolean MoveRotateLiveSectionPlane( 
   System.String
Feat
,
   System.Int16
Type
,
   System.Double
XorDeltaX
,
   System.Double
YorDeltaY
,
   System.Double
ZorDeltaZ
,
   System.Double
Axisx
,
   System.Double
Axisy
,
   System.Double
Axisz
,
   System.Double
Angle
)
```
## Parameters

- `Feat` (System.String): Name of the Live Section Plane as it appears in the FeatureManager design tree
- `Type` (System.Int16): 0 = Move only, then (XorDeltaX, YorDeltaY, and ZorDeltaZ) is delta vector 1 = Rotate only, then (XorDeltaX, YorDeltaY, and ZorDeltaZ) is the pivot point for rotation, (axisX, axisY, axisZ) is rotating axis
- `XorDeltaX` (System.Double): Delta X
- `YorDeltaY` (System.Double): Delta Y
- `ZorDeltaZ` (System.Double): Delta Z
- `Axisx` (System.Double): X axis
- `Axisy` (System.Double): Y axis
- `Axisz` (System.Double): Z axis
- `Angle` (System.Double): Value by to rotate the Live Section Plane

## Return Value

True if the Live Section Plane moves or rotates, false if not

## See Also

- `IFeatureManager.InsertLiveSectionPlane`