---
type: method
interface: IModelView
member: ISetEyePoint
returns: System.Boolean
parameters:
  -
    name: Eyept
    type: System.Double
    description: Array of 3 doubles describing the eye position in screen space
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.AddPerspective
  - IModelView.GetEyePoint
  - IModelView.GetIsoPlaneDistance
  - IModelView.GetViewPlaneDistance
  - IModelView.HasPerspective
  - IModelView.IGetEyePoint
  - IModelView.RemovePerspective
  - IModelView.Scale2
  - IModelView.SetEyePoint
keywords:
  - perspective
  - model
  - views
  - iseteyepoint
  - imodelview
  - view
  - eye
  - point
  - eyept
  - double
  - boolean
---

# IModelView.ISetEyePoint

Sets the eye position for perspective viewing.

## Signature

```csharp
System.Boolean ISetEyePoint( 
   ref System.Double
Eyept
)
```
## Parameters

- `Eyept` (System.Double): Array of 3 doubles describing the eye position in screen space

## Return Value

True if the eye point is set successfully, false if not

## Remarks

The values are returned in pixels and are the location of the eye point relative to the screen-space origin (upper-left corner of window). The Z value, in pixels, reflects the distance from the eye point to the object center. These values will be affected by the view scale.
To use these values, you should apply them after you have obtained the current view orientation matrix using
IModelView::Transform
.
The Z value typically are close to
[(
IModelView::GetViewPlaneDistance
/ ("Object Sizes Away")) * ("Object Sizes Away" + 0.5) ]

## See Also

- `IModelView.AddPerspective`
- `IModelView.GetEyePoint`
- `IModelView.GetIsoPlaneDistance`
- `IModelView.GetViewPlaneDistance`
- `IModelView.HasPerspective`
- `IModelView.IGetEyePoint`
- `IModelView.RemovePerspective`
- `IModelView.Scale2`
- `IModelView.SetEyePoint`