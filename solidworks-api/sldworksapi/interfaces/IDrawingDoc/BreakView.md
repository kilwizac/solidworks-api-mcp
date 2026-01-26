---
type: method
interface: IDrawingDoc
member: BreakView
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.InsertBreakHorizontal
  - IDrawingDoc.InsertBreakVertical
  - IDrawingDoc.UnBreakView
keywords:
  - break
  - views
  - drawing
  - see
  - also
  - iview
  - broken
  - breakview
  - idrawingdoc
  - doc
  - view
  - void
  - create
  - vb
  - net
  - vba
---

# IDrawingDoc.BreakView

Breaks the drawing view along the existing break lines.

## Signature

```csharp
void BreakView()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Use
IDrawingDoc::InsertBreakHorizontal
or
IDrawingDoc::InsertBreakVertical
to insert break lines to a drawing view. Customize the break by dragging and repositioning the break lines. Then, call this method to create the break view.
You can set the font of the break lines using
IBreakLine::Style
.

## Examples

- Create Break View (C#) (Create_Broken_View_Example_CSharp.htm)
- Create Break View (VB.NET) (Create_Broken_View_Example_VBNET.htm)
- Create Break View (VBA) (Create_Broken_View_Example_VB.htm)

## See Also

- `IDrawingDoc.InsertBreakHorizontal`
- `IDrawingDoc.InsertBreakVertical`
- `IDrawingDoc.UnBreakView`