---
type: method
interface: ICamera
member: GetPositionCartesian
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
  - ICamera.GetPositionEntity
  - ICamera.GetPositionSpherical
  - ICamera.LockCameraPosition
  - ICamera.PositionType
  - ICamera.SetPositionCartesian
  - ICamera.SetPositionEntity
  - ICamera.SetPositionSpherical
keywords:
  - getpositioncartesian
  - icamera
  - camera
  - position
  - cartesian
  - double
  - void
---

# ICamera.GetPositionCartesian

Gets the Cartesian coordinates for the camera position.

## Signature

```csharp
void GetPositionCartesian( 
   out System.Double
X
,
   out System.Double
Y
,
   out System.Double
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
- `ICamera.GetPositionEntity`
- `ICamera.GetPositionSpherical`
- `ICamera.LockCameraPosition`
- `ICamera.PositionType`
- `ICamera.SetPositionCartesian`
- `ICamera.SetPositionEntity`
- `ICamera.SetPositionSpherical`