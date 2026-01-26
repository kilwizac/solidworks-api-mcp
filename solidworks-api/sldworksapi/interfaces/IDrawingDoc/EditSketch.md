---
type: method
interface: IDrawingDoc
member: EditSketch
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - sketches
  - ui
related:
  - ISketch
keywords:
  - edit
  - sketches
  - sketch
  - see
  - also
  - isketch
  - editsketch
  - idrawingdoc
  - drawing
  - doc
  - void
---

# IDrawingDoc.EditSketch

Allows editing of a sketch in the selected drawing view or sheet.

## Signature

```csharp
void EditSketch()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Creating subsequent geometry resides in this drawing view or sheet.
If you selected a drawing view and called IDrawingDoc::EditSketch, then you can resume editing the drawing sheet by calling
IDrawingDoc::EditSheet
or by selecting the sheet and calling IDrawingDoc::EditSketch again.
To determine the current state, use
IDrawingDoc::GetEditSheet
.

## See Also

- `ISketch`