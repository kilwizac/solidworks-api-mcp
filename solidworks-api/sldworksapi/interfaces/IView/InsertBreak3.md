---
type: method
interface: IView
member: InsertBreak3
returns: System.Object
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
  -
    name: BreakSketchBlocks
    type: System.Boolean
    description: True to break sketch blocks, false to not
docset: sldworksapi
deprecated: false
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
  - break
  - lines
  - see
  - also
  - ibreakline
  - drawing
  - views
  - cut
  - iview
  - view
  - insertbreak3
  - insert
  - break3
  - orientation
  - int32
  - position1
  - double
  - position2
  - style
  - shape
  - intensity
  - sketch
  - blocks
  - boolean
  - object
  - jagged
  - vba
  - vb
  - net
---

# IView.InsertBreak3

Inserts the specified type of break at the specified location in this drawing view.

## Signature

```csharp
System.Object InsertBreak3( 
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
,
   System.Boolean
BreakSketchBlocks
)
```
## Parameters

- `Orientation` (System.Int32): Horizontal or vertical cut as defined in swBreakLineOrientation_e
- `Position1` (System.Double): Location of the first line in the break (see Remarks )
- `Position2` (System.Double): Location of the second line in the break (see Remarks )
- `Style` (System.Int32): Break line style as defined in swBreakLineStyle_e
- `ShapeIntensity` (System.Int32): Shape intensity for jagged cut break lines only; valid range is 1 (most) through 5 (least)
- `BreakSketchBlocks` (System.Boolean): True to break sketch blocks, false to not

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

## Examples

- Insert Jagged Cut Break (VBA) (Insert_Jagged_Cut_Break_Example_VB.htm)
- Insert Jagged Cut Break (VB.NET) (Insert_Jagged_Cut_Break_Example_VBNET.htm)
- Insert Jagged Cut Break (C#) (Insert_Jagged_Cut_Break_Example_CSharp.htm)

## See Also

- `IDrawingDoc.BreakView`
- `IView.BreakLineGap`
- `IView.GetBreakLineCount2`
- `IView.GetBreakLineInfo2`
- `IView.GetBreakLines`
- `IView.IsBroken`