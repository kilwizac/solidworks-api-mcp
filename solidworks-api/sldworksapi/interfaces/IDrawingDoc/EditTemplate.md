---
type: method
interface: IDrawingDoc
member: EditTemplate
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
  - ISheet.ReloadTemplate
  - ISheet.SaveFormat
keywords:
  - edittemplate
  - idrawingdoc
  - drawing
  - doc
  - edit
  - template
  - void
  - place
  - note
  - behind
  - sheet
  - vb
  - net
  - vba
---

# IDrawingDoc.EditTemplate

Puts the template of the current drawing sheet in edit mode.

## Signature

```csharp
void EditTemplate()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Creating subsequent geometry resides on the drawing template.
You can use this method with
IDrawingDoc::EditSheet
or
IDrawingDoc::EditSketch
. Use
IDrawingDoc::GetEditSheet
to determine the current state.

## Examples

- Place Note Behind Drawing Sheet (C#) (Place_Note_Behind_Drawing_Sheet_Example_CSharp.htm)
- Place Note Behind Drawing Sheet (VB.NET) (Place_Note_Behind_Drawing_Sheet_Example_VBNET.htm)
- Place Note Behind Drawing Sheet (VBA) (Place_Note_Behind_Drawing_Sheet_Example_VB.htm)

## See Also

- `ISheet.ReloadTemplate`
- `ISheet.SaveFormat`