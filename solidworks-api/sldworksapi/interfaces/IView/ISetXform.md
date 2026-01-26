---
type: method
interface: IView
member: ISetXform
returns: System.Boolean
parameters:
  -
    name: Transform
    type: System.Double
    description: Array of 3 doubles (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetViewXform
  - IView.IGetViewXform
  - IView.ModelToViewTransform
  - IView.SetXform
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - transforms
  - view
  - transform
  - isetxform
  - xform
  - double
  - boolean
---

# IView.ISetXform

Sets the matrix used for display of this drawing view.

## Signature

```csharp
System.Boolean ISetXform( 
   ref System.Double
Transform
)
```
## Parameters

- `Transform` (System.Double): Array of 3 doubles (see Remarks )

## Return Value

True if transform successfully set, false if not

## Remarks

The 3 doubles are the X and Y position of the view, relative to the sheet origin, and the scale of the view.
Any view alignments that might affect this view are handled the same way as if you were using the user interface to draw the view to move it. If it is aligned with another view, then it will only move along the alignment vector. If it has child views that are aligned with it, then those views will also be moved along with this view.
Calling this method is equivalent to setting the
IView::Position
or
IView::IPosition
property (to set X and Y), and the
IView::ScaleDecimal
property (to set the scale).
To get the view matrix, use
IView::GetXform
or
IView::IGetXform
method.
Using this method may cause changes to the graphics of the drawing. Once all the view-related changes have been made, the user should call
IModelDoc2::EditRebuild3
to regenerate the drawing, in order to see these changes.

## See Also

- `IView.GetViewXform`
- `IView.IGetViewXform`
- `IView.ModelToViewTransform`
- `IView.SetXform`