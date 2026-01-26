---
type: method
interface: IView
member: GetProjectionLineCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IProjectionArrow
  - IView.GetProjectionArrow
  - IView.GetProjectionLines
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
  - getprojectionlinecount
  - line
  - count
  - int32
---

# IView.GetProjectionLineCount

Gets the number of projection lines (arrows) in this drawing view.

## Signature

```csharp
System.Int32 GetProjectionLineCount()
```
## Parameters

None.

## Return Value

Number of projection lines in this drawing view

## Remarks

This method only works for base drawing views; it does not work for projected or auxiliary views.
Call this method before
IView::IGetProjectionLines
to get the size of the array for that method.

## See Also

- `IProjectionArrow`
- `IView.GetProjectionArrow`
- `IView.GetProjectionLines`
- `IView.IGetProjectionArrow`