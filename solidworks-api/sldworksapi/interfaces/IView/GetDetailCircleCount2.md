---
type: method
interface: IView
member: GetDetailCircleCount2
returns: System.Int32
parameters:
  -
    name: Size
    type: System.Int32
    description: Size, which includes a double for each detail circle; this new double contains the layer ID for the detail circle
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDetail
  - IView.GetDetailCircleInfo2
  - IView.GetDetailCircleStrings
  - IView.GetDetailCircles
  - IView.IGetDetail
  - IView.IGetDetailCircleInfo2
  - IView.IGetDetailCircleStrings
keywords:
  - detail
  - circles
  - see
  - idetailcircle
  - view
  - also
  - iview
  - drawing
  - views
  - getdetailcirclecount2
  - circle
  - count2
  - size
  - int32
  - information
  - vba
---

# IView.GetDetailCircleCount2

Gets the number of detail circles in the drawing view.

## Signature

```csharp
System.Int32 GetDetailCircleCount2( 
   out System.Int32
Size
)
```
## Parameters

- `Size` (System.Int32): Size, which includes a double for each detail circle; this new double contains the layer ID for the detail circle

## Return Value

Number of detail circles in the drawing view

## Remarks

Call this method before calling
IView::GetDetailCircles
to get the size of the array for that method.

## Examples

- Get Detail Circle Information (VBA) (Get_Detail_Circle_Information_Example_VB.htm)

## See Also

- `IView.GetDetail`
- `IView.GetDetailCircleInfo2`
- `IView.GetDetailCircleStrings`
- `IView.GetDetailCircles`
- `IView.IGetDetail`
- `IView.IGetDetailCircleInfo2`
- `IView.IGetDetailCircleStrings`