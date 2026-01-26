---
type: property
interface: IView
member: IPosition
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetViewXform
  - IView.GetXform
  - IView.IGetViewXform
  - IView.IGetXform
  - IView.ISetXform
  - IView.ModelToViewTransform
  - IView.Position
  - IView.SetXform
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - position
  - view
  - iposition
  - double
readonly: null
---

# IView.IPosition

Gets or sets the X and Y location of the model view's geometric center, relative to the drawing sheet origin.

## Signature

```csharp
System.Double IPosition {get; set;}
```
## Parameters

None.

## Return Value

Array of 2 doubles (see Remarks )

## Remarks

Any view alignments that might affect this view are handled the same way as if you were using the SOLIDWORKS Design user interface to draw the view to move it. If it is aligned with another view, it will only be allowed to move along the alignment vector. If it has child views that are aligned with it, those views will also be moved along with this view.
Changing this property can cause changes to the graphics of the drawing. After making all the view-related changes, call
IModelDoc2::EditRebuild3
to regenerate the drawing to see these changes.

## See Also

- `IView.GetViewXform`
- `IView.GetXform`
- `IView.IGetViewXform`
- `IView.IGetXform`
- `IView.ISetXform`
- `IView.ModelToViewTransform`
- `IView.Position`
- `IView.SetXform`