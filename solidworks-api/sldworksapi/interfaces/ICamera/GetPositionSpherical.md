---
type: method
interface: ICamera
member: GetPositionSpherical
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
  - ICamera.LockCameraPosition
  - ICamera.PositionType
  - ICamera.SetPositionCartesian
  - ICamera.SetPositionEntity
  - ICamera.SetPositionSpherical
keywords:
  - getpositionspherical
  - icamera
  - camera
  - position
  - spherical
  - double
  - a1
  - a2
  - void
---

# ICamera.GetPositionSpherical

Gets the spherical coordinates for the camera position relative to the target, based on a sphere around the Z axis with the zero (0) point at the target.

## Signature

```csharp
void GetPositionSpherical( 
   out System.Double
L
,
   out System.Double
A1
,
   out System.Double
A2
)
```
## Parameters

- `L` (System.Double): Distance from target
- `A1` (System.Double): Longitude about target
- `A2` (System.Double): Latitude about target

## Return Value

Unknown.

## See Also

- `ICamera.GetPosition`
- `ICamera.GetPositionCartesian`
- `ICamera.GetPositionEntity`
- `ICamera.LockCameraPosition`
- `ICamera.PositionType`
- `ICamera.SetPositionCartesian`
- `ICamera.SetPositionEntity`
- `ICamera.SetPositionSpherical`