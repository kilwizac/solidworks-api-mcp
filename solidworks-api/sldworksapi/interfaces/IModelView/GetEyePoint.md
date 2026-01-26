---
type: method
interface: IModelView
member: GetEyePoint
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.AddPerspective
  - IModelView.GetViewPlaneDistance
  - IModelView.HasPerspective
  - IModelView.IGetEyePoint
  - IModelView.ISetEyePoint
  - IModelView.RemovePerspective
  - IModelView.Scale2
  - IModelView.SetEyePoint
keywords:
  - perspective
  - model
  - views
  - geteyepoint
  - imodelview
  - view
  - eye
  - point
  - object
---

# IModelView.GetEyePoint

Gets the eye position for perspective viewing.

## Signature

```csharp
System.Object GetEyePoint()
```
## Parameters

None.

## Return Value

Array of 3 doubles describing the eye position in screen space

## Remarks

The values are returned in pixels and are the location of the eyepoint relative to the screen space origin (upper-left corner of window). The Z value reflects the distance from the eye point to the object center. These values are affected by the view scale.
To use these values, you should apply them after you have obtained the current view orientation matrix using ModelView::Xform.
The Z value (in pixels) will typically be close to
[(
IModelView::GetViewPlaneDistance
/ ("Object Sizes Away")) * ("Object Sizes Away" + 0.5) ]
The perspective view is created based on the value entered by the end-user for
Object Sizes Away
. If the user specifies
3 objects away
, then the eye point is positioned 3 body diameters from the view plane, where the view plane is located at the front of the body as seen from this particular orientation.

## See Also

- `IModelView.AddPerspective`
- `IModelView.GetViewPlaneDistance`
- `IModelView.HasPerspective`
- `IModelView.IGetEyePoint`
- `IModelView.ISetEyePoint`
- `IModelView.RemovePerspective`
- `IModelView.Scale2`
- `IModelView.SetEyePoint`