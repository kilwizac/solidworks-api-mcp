---
type: method
interface: IModelView
member: RotateAboutPoint
returns: void
parameters:
  -
    name: XAngle
    type: System.Double
    description: Rotation about the screen X axis
  -
    name: YAngle
    type: System.Double
    description: Rotation about the screen Y axis
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
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.RotateAboutAxis
  - IModelView.RotateAboutCenter
keywords:
  - rotate
  - model
  - views
  - rotateaboutpoint
  - imodelview
  - view
  - about
  - point
  - angle
  - double
  - ptx
  - pty
  - ptz
  - void
---

# IModelView.RotateAboutPoint

Rotates the model view about the specified point by the specified angles in the directions of the screen X and Y axes.

## Signature

```csharp
void RotateAboutPoint( 
   System.Double
XAngle
,
   System.Double
YAngle
,
   System.Double
Ptx
,
   System.Double
Pty
,
   System.Double
Ptz
)
```
## Parameters

- `XAngle` (System.Double): Rotation about the screen X axis
- `YAngle` (System.Double): Rotation about the screen Y axis
- `Ptx` (System.Double): Center of rotation
- `Pty` (System.Double): Center of rotation
- `Ptz` (System.Double): Center of rotation

## Return Value

Unknown.

## See Also

- `IModelView.RotateAboutAxis`
- `IModelView.RotateAboutCenter`