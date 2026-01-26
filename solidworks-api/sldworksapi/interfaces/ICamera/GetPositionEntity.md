---
type: method
interface: ICamera
member: GetPositionEntity
returns: System.Object
parameters:
  -
    name: Point
    type: MathPoint
    description: IMathPoint object indicating the camera position
  -
    name: PercentPosition
    type: System.Double
    description: Camera point distance along the entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICamera.GetPosition
  - ICamera.GetPositionCartesian
  - ICamera.GetPositionSpherical
  - ICamera.LockCameraPosition
  - ICamera.PositionType
  - ICamera.SetPositionCartesian
  - ICamera.SetPositionEntity
  - ICamera.SetPositionSpherical
keywords:
  - getpositionentity
  - icamera
  - camera
  - position
  - entity
  - point
  - math
  - percent
  - double
  - object
---

# ICamera.GetPositionEntity

Gets the entity to which the camera is attached.

## Signature

```csharp
System.Object GetPositionEntity( 
   out MathPoint
Point
,
   out System.Double
PercentPosition
)
```
## Parameters

- `Point` (MathPoint): IMathPoint object indicating the camera position
- `PercentPosition` (System.Double): Camera point distance along the entity

## Return Value

Entity for the camera position

## See Also

- `ICamera.GetPosition`
- `ICamera.GetPositionCartesian`
- `ICamera.GetPositionSpherical`
- `ICamera.LockCameraPosition`
- `ICamera.PositionType`
- `ICamera.SetPositionCartesian`
- `ICamera.SetPositionEntity`
- `ICamera.SetPositionSpherical`