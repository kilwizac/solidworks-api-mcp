---
type: method
interface: IView
member: GetBreakLineCount
returns: System.Int32
parameters:
  -
    name: Size
    type: System.Int32
    description: Size of an array of doubles to allocate in call to IView::GetBreakLineInfo and IView::IGetBreakLineInfo
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.BreakLineGap
  - IView.GetBreakLines
  - IView.InsertBreak
keywords:
  - getbreaklinecount
  - iview
  - view
  - break
  - line
  - count
  - size
  - int32
---

# IView.GetBreakLineCount

Obsolete. Superseded by IView::GetBreakLineCount2.

## Signature

```csharp
System.Int32 GetBreakLineCount( 
   out System.Int32
Size
)
```
## Parameters

- `Size` (System.Int32): Size of an array of doubles to allocate in call to IView::GetBreakLineInfo and IView::IGetBreakLineInfo

## Return Value

Number of breaks

## Remarks

This method indicates the number of break lines in the view; it does not indicate if the view is broken.
A drawing view can have break lines without the break being applied. To determine whether a view is broken, use
IView::IsBroken
.
A break in a drawing view consists of a pair of lines. This method returns the number of breaks in the view, not the number of break lines. For example, this method returns 3 for a view that has three breaks in it, even though there are three pairs (or six lines) on the display.
Call this method before calling
IView::IGetBreakLines
to determine the size of the array for that method.

## See Also

- `IView.BreakLineGap`
- `IView.GetBreakLines`
- `IView.InsertBreak`