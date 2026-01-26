---
type: method
interface: IFeatureManager
member: InsertRevolvedRefSurface
returns: Feature
parameters:
  -
    name: Angle
    type: System.Double
    description: Angle of revolution in radians
  -
    name: ReverseDir
    type: System.Boolean
    description: Angle is positive or negative (True or false)
  -
    name: Angle2
    type: System.Double
    description: Angle of revolution in radians
  -
    name: RevType
    type: System.Int32
    description: Type of revolution (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRevolveFeatureData2
keywords:
  - feature
  - see
  - also
  - ifeature
  - revolve
  - surface
  - isurface
  - revolves
  - irevolvefeaturedata2
  - surfaces
  - insertrevolvedrefsurface
  - ifeaturemanager
  - manager
  - insert
  - revolved
  - ref
  - angle
  - double
  - reverse
  - dir
  - boolean
  - angle2
  - rev
  - type
  - int32
---

# IFeatureManager.InsertRevolvedRefSurface

Creates a revolved reference surface by revolving a profile around a centerline.

## Signature

```csharp
Feature InsertRevolvedRefSurface( 
   System.Double
Angle
,
   System.Boolean
ReverseDir
,
   System.Double
Angle2
,
   System.Int32
RevType
)
```
## Parameters

- `Angle` (System.Double): Angle of revolution in radians
- `ReverseDir` (System.Boolean): Angle is positive or negative (True or false)
- `Angle2` (System.Double): Angle of revolution in radians
- `RevType` (System.Int32): Type of revolution (see Remarks )

## Return Value

Pointer to IFeature object

## Remarks

Make the selections using
IModelDocExtension::SelectByID2
before calling this method. See the SOLIDWORKS Help for information about what entities are valid for selection.
The RevType argument can be one of these values:
0 = One direction revolution.
1 = MidPlane revolution. For this type of revolve, the angle specification specifies the full revolution. The angle to revolve is (angle/2) on either side of the sketch. The ReverseDir argument has no effect.
2 = Two direction revolution. For a two direction revolve, Angle is the angle to revolve in Direction1 and Angle2 is the angle to revolve in Direction2.
This method does not support 3D sketches.

## See Also

- `IRevolveFeatureData2`