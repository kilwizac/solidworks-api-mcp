---
type: property
interface: IView
member: ScaleDecimal
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.UseParentScale
  - IView.UseSheetScale
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - scale
  - iscalefeaturedata
  - view
  - scaledecimal
  - decimal
  - double
  - vba
readonly: null
---

# IView.ScaleDecimal

Gets or sets the scale of the drawing view, returning the results in decimal format.

## Signature

```csharp
System.Double ScaleDecimal {get; set;}
```
## Parameters

None.

## Return Value

Drawing view scale

## Remarks

IView::ScaleRatio
or
IView::IScaleRatio
and this property contain the same information, but use the value in different ways:
IView::ScaleRatio gets or sets the scale as a ratio of two numbers.
IView::ScaleDecimal returns the scale as a decimal number.
For example, if View::ScaleRatio returns 3 2 or 3:2, then IView::ScaleDecimal would return 1.5.
Changing this property can cause changes to the graphics of the drawing. After making all the of the view-related changes, call the
IModelDoc2::EditRebuild2
method to regenerate the drawing to see these changes.

## Examples

- Set View Scale (VBA) (Set_View_Scale_Example_VB.htm)

## See Also

- `IView.UseParentScale`
- `IView.UseSheetScale`