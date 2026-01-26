---
type: property
interface: IView
member: IScaleRatio
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.ScaleRatio
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
  - iscaleratio
  - ratio
  - double
readonly: null
---

# IView.IScaleRatio

Gets or sets the scale of the drawing view, returning the results in ratio format (n:n).

## Signature

```csharp
System.Double IScaleRatio {get; set;}
```
## Parameters

None.

## Return Value

Array of 2 doubles (see Remarks )

## Remarks

The two values represent the two numbers if the scale is described as a ratio. The first value is the numerator; the second value is the denominator. This is what the scale is when represented as n:n.
This property and
IView::ScaleDecimal
contain the same information, but use the value in a different form.
IView::ScaleRatio returns the scale as a ratio of two numbers.
IView::ScaleDecimal returns the scale as a decimal number.
For example, if View::ScaleRatio returns 3 2 or 3:2, then IView::ScaleDecimal would return 1.5.
Changing this property may cause changes to the graphics of the drawing. After making all of the view-related changes, call
IModelDoc2::EditRebuild3
to regenerate the drawing to see these changes.

## See Also

- `IView.ScaleRatio`
- `IView.UseParentScale`
- `IView.UseSheetScale`