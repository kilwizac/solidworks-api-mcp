---
type: method
interface: IModelView
member: StartDynamics
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
  - startdynamics
  - imodelview
  - view
  - start
  - dynamics
  - void
  - dynamic
  - rotation
---

# IModelView.StartDynamics

Provides faster rotation of model views.

## Signature

```csharp
void StartDynamics()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

After setting swUserPreferenceIntegerValue_e.swLevelOfDetail high enough, this method can be used at the beginning of dynamic model view changes to:
change HLR or HLV mode to wireframe mode, which provides you with faster view rotation because the edges are not calculated during your view re-orientation.
turn curved-surface bodies into polyhedra for faster view manipulations when in shaded mode.
Dynamic view motion remains in effect until you call
IModelView::StopDynamics
.
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