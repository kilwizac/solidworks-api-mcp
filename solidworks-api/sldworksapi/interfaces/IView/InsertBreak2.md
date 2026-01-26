---
type: method
interface: IView
member: InsertBreak2
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
    description: Break line style as defined in swBreakLineStyle_e
  -
    name: ShapeIntensity
    type: System.Int32
    description: Shape intensity for jagged cut break lines only; valid range is 1 (most) through 5 (least)
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IDrawingDoc.BreakView
  - IView.BreakLineGap
  - IView.GetBreakLineCount2
  - IView.GetBreakLineInfo2
  - IView.GetBreakLines
  - IView.IsBroken
keywords:
  - insertbreak2
  - iview
  - view
  - insert
  - break2
  - orientation
  - int32
  - position1
  - double
  - position2
  - style
  - shape
  - intensity
  - break
  - line
---

# IView.InsertBreak2

Obsolete. Superseded by IView::InsertBreak3.

## Signature

```csharp
BreakLine InsertBreak2( 
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
,
   System.Int32
ShapeIntensity
)
```
## Parameters

- `Orientation` (System.Int32): Horizontal or vertical cut as defined in swBreakLineOrientation_e
- `Position1` (System.Double): Location of the first line in the break (see Remarks )
- `Position2` (System.Double): Location of the second line in the break (see Remarks )
- `Style` (System.Int32): Break line style as defined in swBreakLineStyle_e
- `ShapeIntensity` (System.Int32): Shape intensity for jagged cut break lines only; valid range is 1 (most) through 5 (least)

## Return Value

Break line

## Remarks

A break in a drawing view consists of a pair of break lines. This method inserts the break lines at the locations indicated by Position1 and Position2.
If the orientation of the break is...
Then Position1 and Position2 are...
Horizontal
Y values relative to the drawing view origin, indicating where along the Y axis to place the breaks
Vertical
X values relative to the drawing view origin, indicating where along the X axis to place the breaks

## See Also

- `IDrawingDoc.BreakView`
- `IView.BreakLineGap`
- `IView.GetBreakLineCount2`
- `IView.GetBreakLineInfo2`
- `IView.GetBreakLines`
- `IView.IsBroken`