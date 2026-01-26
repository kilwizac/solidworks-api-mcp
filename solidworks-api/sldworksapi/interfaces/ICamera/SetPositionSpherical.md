---
type: method
interface: ICamera
member: SetPositionSpherical
returns: void
parameters:
  -
    name: L
    type: System.Double
    description: Distance from target
  -
    name: A1
    type: System.Double
    description: Longitude about target
  -
    name: A2
    type: System.Double
    description: Latitude about target
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
  - ICamera.SetPositionEntity
keywords:
  - setpositionspherical
  - icamera
  - camera
  - position
  - spherical
  - double
  - a1
  - a2
  - void
---

# ICamera.SetPositionSpherical

Sets the spherical coordinates for the camera position relative to the target, based on a sphere around the Z axis with the zero (0) point at the target.

## Signature

```csharp
void SetPositionSpherical( 
   System.Double
L
,
   System.Double
A1
,
   System.Double
A2
)
```
## Parameters

- `L` (System.Double): Distance from target
- `A1` (System.Double): Longitude about target
- `A2` (System.Double): Latitude about target

## Return Value

Latitude about target

## See Also

- `ICamera.GetPosition`
- `ICamera.GetPositionCartesian`
- `ICamera.GetPositionEntity`
- `ICamera.GetPositionSpherical`
- `ICamera.LockCameraPosition`
- `ICamera.PositionType`
- `ICamera.SetPositionCartesian`
- `ICamera.SetPositionEntity`