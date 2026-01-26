---
type: method
interface: ICamera
member: SetPositionEntity
returns: void
parameters:
  -
    name: Point
    type: MathPoint
    description: Pointer to the IMathPoint object indicating the camera position
  -
    name: PercentPosition
    type: System.Double
    description: Camera point distance along the entity
  -
    name: PositionEntity
    type: System.Object
    description: Entity for the camera position
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICamera.GetPosition
  - ICamera.GetPositionCartesian
  - ICamera.GetPositionEntity
  - ICamera.GetPositionSpherical
  - ICamera.LockCameraPosition
  - ICamera.PositionType
  - ICamera.SetPositionCartesian
  - ICamera.SetPositionSpherical
keywords:
  - setpositionentity
  - icamera
  - camera
  - position
  - entity
  - point
  - math
  - percent
  - double
  - object
  - void
---

# ICamera.SetPositionEntity

Sets the entity to which the camera is attached.

## Signature

```csharp
void SetPositionEntity( 
   MathPoint
Point
,
   System.Double
PercentPosition
,
   System.Object
PositionEntity
)
```
## Parameters

- `Point` (MathPoint): Pointer to the IMathPoint object indicating the camera position
- `PercentPosition` (System.Double): Camera point distance along the entity
- `PositionEntity` (System.Object): Entity for the camera position

## Return Value

Unknown.

## See Also

- `ICamera.GetPosition`
- `ICamera.GetPositionCartesian`
- `ICamera.GetPositionEntity`
- `ICamera.GetPositionSpherical`
- `ICamera.LockCameraPosition`
- `ICamera.PositionType`
- `ICamera.SetPositionCartesian`
- `ICamera.SetPositionSpherical`