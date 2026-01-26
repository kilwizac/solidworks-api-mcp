---
type: method
interface: IModelView
member: RotateAboutCenter
returns: void
parameters:
  -
    name: XAngle
    type: System.Double
    description: Rotation about the X axis
  -
    name: YAngle
    type: System.Double
    description: Rotation about the Y axis
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.RotateAboutAxis
  - IModelView.RotateAboutPoint
  - IModelView.StartDynamics
keywords:
  - rotate
  - model
  - views
  - rotateaboutcenter
  - imodelview
  - view
  - about
  - center
  - angle
  - double
  - void
  - change
  - wrap
  - feature
  - face
  - vb
  - net
  - vba
---

# IModelView.RotateAboutCenter

Rotates the model view about the screen X and Y axes.

## Signature

```csharp
void RotateAboutCenter( 
   System.Double
XAngle
,
   System.Double
YAngle
)
```
## Parameters

- `XAngle` (System.Double): Rotation about the X axis
- `YAngle` (System.Double): Rotation about the Y axis

## Return Value

Unknown.

## Examples

- Change Wrap Feature Face (C#) (Change_Wrap_Feature_Face_Example_CSharp.htm)
- Change Wrap Feature Face (VB.NET) (Change_Wrap_Feature_Face_Example_VBNET.htm)
- Change Wrap Feature Face (VBA) (Change_Wrap_Feature_Face_Example_VB.htm)

## See Also

- `IModelView.RotateAboutAxis`
- `IModelView.RotateAboutPoint`
- `IModelView.StartDynamics`