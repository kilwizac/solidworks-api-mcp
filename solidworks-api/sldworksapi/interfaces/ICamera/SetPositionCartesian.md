---
type: method
interface: ICamera
member: SetPositionCartesian
returns: void
parameters:
  -
    name: X
    type: System.Double
    description: x coordinate relative to the model origin
  -
    name: Y
    type: System.Double
    description: y coordinate relative to the model origin
  -
    name: Z
    type: System.Double
    description: z coordinate relative to the model origin
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
  - ICamera.SetPositionEntity
  - ICamera.SetPositionSpherical
keywords:
  - setpositioncartesian
  - icamera
  - camera
  - position
  - cartesian
  - double
  - void
---

# ICamera.SetPositionCartesian

Sets the Cartesian coordinates for the camera position.

## Signature

```csharp
void SetPositionCartesian( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `X` (System.Double): x coordinate relative to the model origin
- `Y` (System.Double): y coordinate relative to the model origin
- `Z` (System.Double): z coordinate relative to the model origin

## Return Value

Unknown.

## See Also

- `ICamera.GetPosition`
- `ICamera.GetPositionCartesian`
- `ICamera.GetPositionEntity`
- `ICamera.GetPositionSpherical`
- `ICamera.LockCameraPosition`
- `ICamera.PositionType`
- `ICamera.SetPositionEntity`
- `ICamera.SetPositionSpherical`