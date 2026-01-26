---
type: method
interface: IView
member: GetTemporaryAxes
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetTemporaryAxesCount
  - IView.IGetTemporaryAxes
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - axes
  - view
  - gettemporaryaxes
  - temporary
  - object
  - each
  - vba
---

# IView.GetTemporaryAxes

Gets the information of the temporary axes displayed in this view.

## Signature

```csharp
System.Object GetTemporaryAxes()
```
## Parameters

None.

## Return Value

Array of double of the information about the temporary axes in this view (see Remarks )

## Remarks

This array contains the start and end points, in that order, of temporary axes.

## Examples

- Get Temporary Axes in Each Drawing View (VBA) (Get_Temporary_Axes_in_Each_Drawing_View_Example_VB.htm)

## See Also

- `IView.GetTemporaryAxesCount`
- `IView.IGetTemporaryAxes`