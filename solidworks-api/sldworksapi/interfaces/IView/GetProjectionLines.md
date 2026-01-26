---
type: method
interface: IView
member: GetProjectionLines
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetBaseView
  - IView.GetProjectionArrow
  - IView.GetProjectionLineCount
  - IView.IGetBaseView
  - IView.IGetProjectionArrow
  - IView.IGetProjectionLines
keywords:
  - projection
  - lines
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - getprojectionlines
  - object
---

# IView.GetProjectionLines

Gets the projection lines (arrows) in this drawing view.

## Signature

```csharp
System.Object GetProjectionLines()
```
## Parameters

None.

## Return Value

Array of projection lines

## Remarks

This method only works for base drawing views; it does not work for projected or auxiliary views.
Multiple projection lines can exist in a view. This method returns the interface for each projection line so that an application such as DXF/DWG translation can create the projection lines with the base drawing view rather than creating those lines when cycling through the views and finding a projected or auxiliary view.

## See Also

- `IView.GetBaseView`
- `IView.GetProjectionArrow`
- `IView.GetProjectionLineCount`
- `IView.IGetBaseView`
- `IView.IGetProjectionArrow`
- `IView.IGetProjectionLines`