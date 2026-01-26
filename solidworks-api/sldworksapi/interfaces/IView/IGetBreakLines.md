---
type: method
interface: IView
member: IGetBreakLines
returns: BreakLine
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of breaks in the view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.BreakLineGap
  - IView.GetBreakLineInfo
  - IView.GetBreakLines
  - IView.IGetBreakLineInfo
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
  - igetbreaklines
  - count
  - int32
  - line
---

# IView.IGetBreakLines

Gets the all of the breaks in this view.

## Signature

```csharp
BreakLine IGetBreakLines( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of breaks in the view

## Return Value

in-process, unmanaged C++: Pointer to an array of breaks VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IView::GetBreakLineCount
to get the value for Count.
This method gets all of the breaks in the view, regardless if the view is broken. A drawing view can have break lines that are not applied. To determine whether a view is broken, use
IView::IsBroken
.

## See Also

- `IView.BreakLineGap`
- `IView.GetBreakLineInfo`
- `IView.GetBreakLines`
- `IView.IGetBreakLineInfo`
- `IView.InsertBreak`