---
type: method
interface: IDrawingDoc
member: InsertBreakHorizontal
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
  - IDrawingDoc.InsertBreakVertical
  - IDrawingDoc.UnBreakView
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - broken
  - break
  - insertbreakhorizontal
  - idrawingdoc
  - doc
  - insert
  - horizontal
  - void
---

# IDrawingDoc.InsertBreakHorizontal

Inserts a horizontal break in the drawing view.

## Signature

```csharp
void InsertBreakHorizontal()
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
- `IDrawingDoc.InsertBreakVertical`
- `IDrawingDoc.UnBreakView`