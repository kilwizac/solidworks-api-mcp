---
type: method
interface: IDrawingDoc
member: EditSheet
returns: void
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - ISheet
keywords:
  - editsheet
  - idrawingdoc
  - drawing
  - doc
  - edit
  - sheet
  - void
---

# IDrawingDoc.EditSheet

Obsolete. Superseded by IDrawingDoc::EditSheet2.

## Signature

```csharp
void EditSheet()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Subsequently created geometry resides on this drawing sheet.
You can use this method with
IDrawingDoc::EditSketch
or
IDrawingDoc::EditTemplate
. Use
IDrawingDoc::GetEditSheet
to determine the current state.

## See Also

- `ISheet`