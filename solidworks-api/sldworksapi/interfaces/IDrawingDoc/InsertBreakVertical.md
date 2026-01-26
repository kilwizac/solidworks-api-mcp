---
type: method
interface: IDrawingDoc
member: InsertBreakVertical
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
  - IDrawingDoc.BreakView
  - IDrawingDoc.InsertBreakHorizontal
  - IDrawingDoc.UnBreakView
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - broken
  - break
  - insertbreakvertical
  - idrawingdoc
  - doc
  - insert
  - vertical
  - void
---

# IDrawingDoc.InsertBreakVertical

Inserts a vertical break in this drawing.

## Signature

```csharp
void InsertBreakVertical()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

To create the break view, use
IDrawingDoc::BreakView
.
You can:
Customize the break by dragging and repositioning the break lines.
Set the font of the break lines using
IBreakLine::Style
.

## See Also

- `IDrawingDoc.BreakView`
- `IDrawingDoc.InsertBreakHorizontal`
- `IDrawingDoc.UnBreakView`