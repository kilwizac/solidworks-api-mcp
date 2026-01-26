---
type: method
interface: IModelView
member: StopDynamics
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.DynamicMode
  - IModelView.HlrQuality
  - IModelView.RotateAboutAxis
  - IModelView.RotateAboutCenter
  - IModelView.RotateAboutPoint
keywords:
  - rotate
  - model
  - views
  - hidden
  - lines
  - removed
  - visible
  - hlr
  - see
  - hlv
  - stopdynamics
  - imodelview
  - view
  - stop
  - dynamics
  - void
  - dynamic
  - rotation
---

# IModelView.StopDynamics

Ends dynamic model view motion.

## Signature

```csharp
void StopDynamics()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Use this method with
IModelView::StartDynamics
at the end of dynamic view motion. This method returns the view to its previous HLR,  HLV, or shaded mode and recalculates the
display.
After calling this method, you must call
IModelDoc2::GraphicsRedraw2
or
IModelDoc2::WindowRedraw
to update the display for the end-user.
If the SOLIDWORKS file is in view-only mode and is not displaying a shaded image, then you cannot perform any view rotations. Do not call any of the view rotation functions.
To determine if the file is in view-only mode and is not displaying a shaded image, use
IModelDoc2::IsOpenedViewOnly
and
IModelView::GetDisplayState
.

## Examples

- Dynamic View Rotation (C++) (Dynamic_View_Rotation_Example_CPlusPlus_COM.htm)

## See Also

- `IModelView.DynamicMode`
- `IModelView.HlrQuality`
- `IModelView.RotateAboutAxis`
- `IModelView.RotateAboutCenter`
- `IModelView.RotateAboutPoint`