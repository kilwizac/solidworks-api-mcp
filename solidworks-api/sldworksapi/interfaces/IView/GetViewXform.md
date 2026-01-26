---
type: method
interface: IView
member: GetViewXform
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.IGetViewXform
  - IView.ModelToViewTransform
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - transforms
  - transform
  - view
  - getviewxform
  - xform
  - object
---

# IView.GetViewXform

Gets the transform from model space origin to drawing space origin.

## Signature

```csharp
System.Object GetViewXform()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is formatted as the following array of 13 doubles:
[0-8] is a 3x3 matrix of the view rotation
[9-11] is a 1x3 vector of translation
[12] is the scaling of the transformation
IView::GetXform
and
IView::IGetXform
return the location of the drawing view center with respect to the drawing origin.

## See Also

- `IView.IGetViewXform`
- `IView.ModelToViewTransform`