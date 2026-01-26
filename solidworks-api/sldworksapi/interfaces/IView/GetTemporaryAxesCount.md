---
type: method
interface: IView
member: GetTemporaryAxesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - axes
  - view
  - gettemporaryaxescount
  - temporary
  - count
  - int32
  - each
  - vba
---

# IView.GetTemporaryAxesCount

Gets the number of temporary axes in this view.

## Signature

```csharp
System.Int32 GetTemporaryAxesCount()
```
## Parameters

None.

## Return Value

Number of temporary axes in this view

## Remarks

Call this method before calling
IView::IGetTemporaryAxes
to get the size of the array for that method.

## Examples

- Get Temporary Axes in Each Drawing View (VBA) (Get_Temporary_Axes_in_Each_Drawing_View_Example_VB.htm)