---
type: method
interface: IView
member: GetEllipseCount
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
  - ellipses
  - drawing
  - views
  - view
  - see
  - also
  - iview
  - getellipsecount
  - ellipse
  - count
  - int32
  - polylines
  - information
  - vba
---

# IView.GetEllipseCount

Gets the number of ellipses in the view.

## Signature

```csharp
System.Int32 GetEllipseCount()
```
## Parameters

None.

## Return Value

Number of ellipses in the view

## Remarks

Call this method before calling
IView::IGetEllipses5
to get the size of the array for that method.

## Examples

- Get Polylines Information (VBA) (Get_Polylines_Information_Example_VB.htm)