---
type: method
interface: IView
member: IGetDetailCircles
returns: DetailCircle
parameters:
  -
    name: NumDetailCircles
    type: System.Int32
    description: Number of detail circles in the view
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
  - view
  - see
  - also
  - iview
  - detail
  - circles
  - drawing
  - views
  - idetailcircle
  - igetdetailcircles
  - num
  - int32
  - circle
---

# IView.IGetDetailCircles

Gets the detail circles in this view.

## Signature

```csharp
DetailCircle IGetDetailCircles( 
   System.Int32
NumDetailCircles
)
```
## Parameters

- `NumDetailCircles` (System.Int32): Number of detail circles in the view

## Return Value

in-process, unmanaged C++: Pointer to an array of detail circles VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

See
In-process Methods
for details about this type of method.
Call
IView::GetDetailCircleCount2
to get the value for NumDetailCircles.

## See Also

- `IView.GetDetail`
- `IView.GetDetailCircleInfo2`
- `IView.GetDetailCircleStrings`
- `IView.GetDetailCircles`
- `IView.IGetDetail`
- `IView.IGetDetailCircleInfo2`
- `IView.IGetDetailCircleStrings`