---
type: method
interface: IView
member: IsBroken
returns: System.Boolean
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
  - IView.InsertBreak
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - break
  - lines
  - view
  - ibreakline
  - isbroken
  - broken
  - boolean
---

# IView.IsBroken

Gets whether the drawing view is displayed with a break.

## Signature

```csharp
System.Boolean IsBroken()
```
## Parameters

None.

## Return Value

True if the view is displayed with a break, false if not

## Remarks

This method indicates if the view is displayed broken, not if the view has break lines.
A drawing view can have break lines without the break being applied. To determine if a view has break lines, use
IView::GetBreakLineCount
or
IView::GetBreakLines
or
IView::IGetBreakLines
.

## See Also

- `IView.BreakLineGap`
- `IView.GetBreakLineCount`
- `IView.GetBreakLineInfo`
- `IView.IGetBreakLineInfo`
- `IView.InsertBreak`