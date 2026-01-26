---
type: method
interface: IView
member: IGetProjectionLines
returns: ProjectionArrow
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of projection lines
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetBaseView
  - IView.GetProjectionArrow
  - IView.GetProjectionLines
  - IView.IGetBaseView
  - IView.IGetProjectionArrow
keywords:
  - projection
  - lines
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - igetprojectionlines
  - count
  - int32
  - arrow
---

# IView.IGetProjectionLines

Gets the projection lines (arrows) in this drawing view.

## Signature

```csharp
ProjectionArrow IGetProjectionLines( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of projection lines

## Return Value

in-process, unmanaged C++: Pointer to an array of projection lines VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method only works for base drawing views; it does not work for projected or auxiliary views.
Multiple projection lines can exist in a view. This method returns the interface for each projection line so that an application such as DXF/DWG translation can create the projection lines with the base drawing view rather than creating those lines when cycling through the views and finding a projected or auxiliary view.
Before calling this method, call
IView::GetProjectionLineCount
to get the value for Count.

## See Also

- `IView.GetBaseView`
- `IView.GetProjectionArrow`
- `IView.GetProjectionLines`
- `IView.IGetBaseView`
- `IView.IGetProjectionArrow`