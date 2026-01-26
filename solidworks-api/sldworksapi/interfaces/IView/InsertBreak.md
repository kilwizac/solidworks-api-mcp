---
type: method
interface: IView
member: InsertBreak
returns: BreakLine
parameters:
  -
    name: Orientation
    type: System.Int32
    description: Horizontal or vertical cut as defined in swBreakLineOrientation_e
  -
    name: Position1
    type: System.Double
    description: Location of the first line in the break (see Remarks )
  -
    name: Position2
    type: System.Double
    description: Location of the second line in the break (see Remarks )
  -
    name: Style
    type: System.Int32
    description: Cut style as defined in swBreakLineStyle_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IBreakLine.Style
  - IDrawingDoc.BreakView
  - IView.BreakLineGap
  - IView.GetBreakLineCount
  - IView.GetBreakLineInfo
  - IView.GetBreakLines
  - IView.IGetBreakLineInfo
  - IView.IGetBreakLines
  - IView.IsBroken
keywords:
  - insertbreak
  - iview
  - view
  - insert
  - break
  - orientation
  - int32
  - position1
  - double
  - position2
  - style
  - line
---

# IView.InsertBreak

Obsolete. Superseded by IView::InsertBreak2.

## Signature

```csharp
BreakLine InsertBreak( 
   System.Int32
Orientation
,
   System.Double
Position1
,
   System.Double
Position2
,
   System.Int32
Style
)
```
## Parameters

- `Orientation` (System.Int32): Horizontal or vertical cut as defined in swBreakLineOrientation_e
- `Position1` (System.Double): Location of the first line in the break (see Remarks )
- `Position2` (System.Double): Location of the second line in the break (see Remarks )
- `Style` (System.Int32): Cut style as defined in swBreakLineStyle_e

## Return Value

Break line

## Remarks

A break in a drawing view consists of a pair of lines. This method inserts the break lines at the locations indicated by Position1 and Position2.
If the orientation of the break is...
Then Position1 and Position2 are...
Horizontal
Y values, relative to the drawing view origin, indicating where along the Y axis to place the breaks
Vertical
X values, relative to the drawing view origin, indicating where along the X axis to place the breaks

## See Also

- `IBreakLine.Style`
- `IDrawingDoc.BreakView`
- `IView.BreakLineGap`
- `IView.GetBreakLineCount`
- `IView.GetBreakLineInfo`
- `IView.GetBreakLines`
- `IView.IGetBreakLineInfo`
- `IView.IGetBreakLines`
- `IView.IsBroken`