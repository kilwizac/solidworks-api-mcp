---
type: method
interface: IDrawingDoc
member: GetEditSheet
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.EditSketch
keywords:
  - edit
  - sheet
  - template
  - see
  - also
  - isheet
  - templates
  - geteditsheet
  - idrawingdoc
  - drawing
  - doc
  - boolean
---

# IDrawingDoc.GetEditSheet

Gets whether the current drawing is in edit sheet mode or edit template mode.

## Signature

```csharp
System.Boolean GetEditSheet()
```
## Parameters

None.

## Return Value

True for edit sheet mode, false for edit template mode

## Remarks

Use:
IDrawingDoc::EditSheet
to set the drawing to be editing the sheet.
IDrawingDoc::EditTemplate
to set the drawing to be editing the template.

## See Also

- `IDrawingDoc.EditSketch`