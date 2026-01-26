---
type: method
interface: IView
member: InsertViewAsBlock
returns: System.Boolean
parameters:
  -
    name: InsertionPoint
    type: MathPoint
    description: IMathPoint in this view where the manipulator of the new sketch block is located
  -
    name: Position
    type: MathPoint
    description: IMathPoint on the drawing sheet where the new sketch block manipulator is positioned
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.ReplaceViewWithBlock
  - IView.ReplaceViewWithSketch
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - blocks
  - view
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - sketch
  - isketch
  - insertviewasblock
  - insert
  - block
  - insertion
  - point
  - math
  - position
  - boolean
  - convert
  - vba
  - vb
  - net
---

# IView.InsertViewAsBlock

Creates a sketch block from this view and aligns the specified manipulator point with the specified sketch block position on the drawing sheet.

## Signature

```csharp
System.Boolean InsertViewAsBlock( 
   MathPoint
InsertionPoint
,
   MathPoint
Position
)
```
## Parameters

- `InsertionPoint` (MathPoint): IMathPoint in this view where the manipulator of the new sketch block is located
- `Position` (MathPoint): IMathPoint on the drawing sheet where the new sketch block manipulator is positioned

## Return Value

True if the view is successfully converted to a sketch block, false if not

## Examples

- Convert Drawing Views to Sketch Blocks (VBA) (Convert_Drawing_Views_to_Sketches_Example_VB.htm)
- Convert Drawing Views to Sketch Blocks (VB.NET) (Convert_Drawing_Views_to_Sketches_Example_VBNET.htm)
- Convert Drawing Views to Sketch Blocks (C#) (Convert_Drawing_Views_to_Sketches_Example_CSharp.htm)

## See Also

- `IView.ReplaceViewWithBlock`
- `IView.ReplaceViewWithSketch`