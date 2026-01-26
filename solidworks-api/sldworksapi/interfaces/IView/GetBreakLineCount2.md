---
type: method
interface: IView
member: GetBreakLineCount2
returns: System.Int32
parameters:
  -
    name: Size
    type: System.Int32
    description: Size of an array of doubles to allocate in IView::GetBreakLineInfo2 and IView::IGetBreakLineInfo2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.BreakLineGap
  - IView.GetBreakLines
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
  - number
  - getbreaklinecount2
  - line
  - count2
  - size
  - int32
  - data
  - vba
  - vb
  - net
---

# IView.GetBreakLineCount2

Gets the number of breaks lines and breaks in this view.

## Signature

```csharp
System.Int32 GetBreakLineCount2( 
   out System.Int32
Size
)
```
## Parameters

- `Size` (System.Int32): Size of an array of doubles to allocate in IView::GetBreakLineInfo2 and IView::IGetBreakLineInfo2

## Return Value

Number of breaks

## Remarks

A drawing view can have break lines without the break being applied. To determine whether a view is broken, use
IView::IsBroken
.
A break in a drawing view consists of a pair of lines. This method returns the number of breaks in the view. For example, this method returns 3 for a view that has three breaks in it, even though there are six lines on the display.
Call this method before calling
IView::IGetBreakLines
to determine the size of the array for that method.

## Examples

- Get Break Line Data (VBA) (Get_Break_Line_Data_Example_VB.htm)
- Get Break Line Data (VB.NET) (Get_Break_Line_Data_Example_VBNET.htm)
- Get Break Line Data (C#) (Get_Break_Line_Data_Example_CSharp.htm)

## See Also

- `IView.BreakLineGap`
- `IView.GetBreakLines`
- `IView.InsertBreak`