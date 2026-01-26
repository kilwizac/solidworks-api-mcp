---
type: property
interface: IView
member: UseParentScale
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.IScaleRatio
  - IView.ScaleDecimal
  - IView.ScaleRatio
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - scale
  - iscalefeaturedata
  - view
  - useparentscale
  - use
  - parent
  - boolean
  - opposite
  - vba
readonly: null
---

# IView.UseParentScale

Gets or sets the drawing view's scale to match the parent drawing view's scale.

## Signature

```csharp
System.Boolean UseParentScale {get; set;}
```
## Parameters

None.

## Return Value

True if the drawing view's scale is set to be the same as the parent's drawing view scale, false if the drawing view scale is independent of the parent's drawing view scale

## Remarks

Changing this property can cause changes to the graphics of the drawing. After making all of the view-related changes, call the
IModelDoc2::EditRebuild3
method to regenerate the drawing to see these changes.
To set the drawing view's scale to be the same as the drawing sheet's scale, use
IView::UseSheetScale
.

## Examples

- Set View Scale Opposite Parent View Scale (VBA) (Set_View_Scale_Opposite_Parent_View_Scale_Example_VB.htm)

## See Also

- `IView.IScaleRatio`
- `IView.ScaleDecimal`
- `IView.ScaleRatio`