---
type: method
interface: IView
member: GetBreakLines
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.BreakLineGap
  - IView.GetBreakLineCount
  - IView.GetBreakLineInfo
  - IView.IGetBreakLineInfo
  - IView.IGetBreakLines
  - IView.InsertBreak
keywords:
  - break
  - lines
  - see
  - also
  - ibreakline
  - view
  - iview
  - drawing
  - views
  - getbreaklines
  - object
---

# IView.GetBreakLines

Gets the all of the breaks in this view.

## Signature

```csharp
System.Object GetBreakLines()
```
## Parameters

None.

## Return Value

Breaks in this view

## Remarks

This method gets all of the breaks in the view, regardless if the view is broken. A drawing view can have break lines that are not applied. To determine whether a view is broken, use
IView::IsBroken
.

## See Also

- `IView.BreakLineGap`
- `IView.GetBreakLineCount`
- `IView.GetBreakLineInfo`
- `IView.IGetBreakLineInfo`
- `IView.IGetBreakLines`
- `IView.InsertBreak`