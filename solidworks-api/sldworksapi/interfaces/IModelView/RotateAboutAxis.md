---
type: method
interface: IModelView
member: RotateAboutAxis
returns: void
parameters:
  -
    name: Angle
    type: System.Double
    description: Angle of rotation
  -
    name: Ptx
    type: System.Double
    description: Center of rotation
  -
    name: Pty
    type: System.Double
    description: Center of rotation
  -
    name: Ptz
    type: System.Double
    description: Center of rotation
  -
    name: AxisVecX
    type: System.Double
    description: Direction of axis of rotation
  -
    name: AxisVecY
    type: System.Double
    description: Direction of axis of rotation
  -
    name: AxisVecZ
    type: System.Double
    description: Direction of axis of rotation
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.RotateAboutCenter
  - IModelView.RotateAboutPoint
  - IModelView.StartDynamics
keywords:
  - rotate
  - model
  - views
  - rotateaboutaxis
  - imodelview
  - view
  - about
  - axis
  - angle
  - double
  - ptx
  - pty
  - ptz
  - vec
  - void
---

# IModelView.RotateAboutAxis

Rotates the model view about a point, by an angle in the specified direction.

## Signature

```csharp
void RotateAboutAxis( 
   System.Double
Angle
,
   System.Double
Ptx
,
   System.Double
Pty
,
   System.Double
Ptz
,
   System.Double
AxisVecX
,
   System.Double
AxisVecY
,
   System.Double
AxisVecZ
)
```
## Parameters

- `Angle` (System.Double): Angle of rotation
- `Ptx` (System.Double): Center of rotation
- `Pty` (System.Double): Center of rotation
- `Ptz` (System.Double): Center of rotation
- `AxisVecX` (System.Double): Direction of axis of rotation
- `AxisVecY` (System.Double): Direction of axis of rotation
- `AxisVecZ` (System.Double): Direction of axis of rotation

## Return Value

Unknown.

## See Also

- `IModelView.RotateAboutCenter`
- `IModelView.RotateAboutPoint`
- `IModelView.StartDynamics`