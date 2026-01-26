---
type: property
interface: IView
member: ModelToViewTransform
returns: MathTransform
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
  - IView.SetXform
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - transforms
  - transform
  - view
  - modeltoviewtransform
  - model
  - math
  - dimension
  - edge
  - vba
readonly: null
---

# IView.ModelToViewTransform

Gets the math transform to go from model to drawing view space.

## Signature

```csharp
MathTransform ModelToViewTransform {get; set;}
```
## Parameters

None.

## Return Value

Math transform

## Examples

- Dimension Edge in Drawing (VBA) (Dimension_Edge_in_Drawing_Example_VB.htm)

## See Also

- `IView.GetViewXform`
- `IView.GetXform`
- `IView.IGetViewXform`
- `IView.IGetXform`
- `IView.ISetXform`
- `IView.SetXform`