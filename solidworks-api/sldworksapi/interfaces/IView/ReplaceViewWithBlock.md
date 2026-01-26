---
type: method
interface: IView
member: ReplaceViewWithBlock
returns: System.Boolean
parameters:
  -
    name: InsertionPoint
    type: MathPoint
    description: IMathPoint in this view where the manipulator of the new sketch block is located
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.InsertViewAsBlock
  - IView.ReplaceViewWithSketch
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - drawing
  - views
  - iview
  - view
  - replaceviewwithblock
  - replace
  - block
  - insertion
  - point
  - math
  - boolean
  - convert
  - sketch
  - vba
  - vb
  - net
---

# IView.ReplaceViewWithBlock

Converts this view into a sketch block with the specified manipulator location.

## Signature

```csharp
System.Boolean ReplaceViewWithBlock( 
   MathPoint
InsertionPoint
)
```
## Parameters

- `InsertionPoint` (MathPoint): IMathPoint in this view where the manipulator of the new sketch block is located

## Return Value

True if the view is successfully replaced with a sketch block, false if not

## Examples

- Convert Drawing Views to Sketch Blocks (VBA) (Convert_Drawing_Views_to_Sketches_Example_VB.htm)
- Convert Drawing Views to Sketch Blocks (VB.NET) (Convert_Drawing_Views_to_Sketches_Example_VBNET.htm)
- Convert Drawing Views to Sketch Blocks (C#) (Convert_Drawing_Views_to_Sketches_Example_CSharp.htm)

## See Also

- `IView.InsertViewAsBlock`
- `IView.ReplaceViewWithSketch`