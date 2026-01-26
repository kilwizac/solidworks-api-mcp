---
type: property
interface: IModelView
member: Transform
returns: MathTransform
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - transform
  - imodelview
  - model
  - view
  - math
readonly: null
---

# IModelView.Transform

Gets the model space to the model view plane transform.

## Signature

```csharp
MathTransform Transform {get; set;}
```
## Parameters

None.

## Return Value

View plane transform

## Remarks

This method is typically used when you are grabbing the view handle using
IModelView::GetViewHWnd
or
IModelView::GetViewHWndx64
and drawing to the view. For example, if you had a point located at 2,2,2 in model space coordinates, then you could multiply it by this return value to determine where to draw in screen space coordinates. The result will be pixel values for the current view.
The screen space coordinate system has its origin in the upper-left corner of the current view with the X vector pointing to the right and the Y vector pointing down.
If the SOLIDWORKS file is in view-only mode and is not displaying a shaded image, then you cannot perform any view rotations. In this situation, you should not call any of the view rotation APIs.
To determine if the file is in view-only mode and whether it is shaded or not, see
IModelDoc2::IsOpenedViewOnly
and
IModelView::GetDisplayState
.