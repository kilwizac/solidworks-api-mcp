---
type: method
interface: IView
member: GetXform
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.IGetXform
  - IView.ISetXform
  - IView.ModelToViewTransform
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
  - getxform
  - xform
  - object
---

# IView.GetXform

Gets the matrix used for displaying this drawing view.

## Signature

```csharp
System.Object GetXform()
```
## Parameters

None.

## Return Value

Array of 3 doubles that describe the location and scale of the drawing view (see Remarks )

## Remarks

The first two values returned are the X and Y locations of the view relative to the sheet origin, and the third value returned is the scale of the drawing view.
Because of a Microsoft compilation issue, the Dispatch name generated in the
swdisp.h
and
swdisp.cpp
files for the Dispatch version of this method is GetXform (with a lower-case letter f). To work around this:
Use GetXform in your code instead of GetXForm.
- or -
Modify the swdisp.h and swdisp.cpp files so that the declaration for GetXForm in the
IView
object is changed to GetXform. Remember to change it when you upgrade the SOLIDWORKS Design software.
IView::GetViewXform
and
IView::IGetViewXform
get the transform from model space origin to drawing space origin.

## See Also

- `IView.IGetXform`
- `IView.ISetXform`
- `IView.ModelToViewTransform`
- `IView.SetXform`