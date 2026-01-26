---
type: method
interface: IDrawingDoc
member: EditSheet2
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
  - ISheet
keywords:
  - sketch
  - see
  - also
  - isketch
  - edit
  - editsheet2
  - idrawingdoc
  - drawing
  - doc
  - sheet2
  - void
  - place
  - note
  - behind
  - sheet
  - vba
  - vb
  - net
---

# IDrawingDoc.EditSheet2

Puts the current drawing sheet in edit mode.

## Signature

```csharp
void EditSheet2()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

The drawing sheet in edit mode ensures graphics updates and contains all subsequently created geometry.
You can use this method with
IDrawingDoc::EditSketch
or
IDrawingDoc::EditTemplate
. Use
IDrawingDoc::GetEditSheet
to determine the current state.

## Examples

- Place Note Behind Drawing Sheet (VBA) (Place_Note_Behind_Drawing_Sheet_Example_VB.htm)
- Place Note Behind Drawing Sheet (VB.NET) (Place_Note_Behind_Drawing_Sheet_Example_VBNET.htm)
- Place Note Behind Drawing Sheet (C#) (Place_Note_Behind_Drawing_Sheet_Example_CSharp.htm)

## See Also

- `ISheet`