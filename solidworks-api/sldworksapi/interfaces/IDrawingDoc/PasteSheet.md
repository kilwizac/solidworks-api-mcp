---
type: method
interface: IDrawingDoc
member: PasteSheet
returns: System.Boolean
parameters:
  -
    name: InsertOption
    type: System.Int32
    description: Option as defined in swInsertOptions_e
  -
    name: RenameOption
    type: System.Int32
    description: Option as defined in swRenameOptions_e ; 1 to rename duplicate section, detail or auxiliary view names; 2 to not rename
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.ActivateSheet
  - IDrawingDoc.EditSheet
  - IDrawingDoc.GetEditSheet
  - IDrawingDoc.GetSheetCount
  - IDrawingDoc.GetSheetNames
  - IDrawingDoc.IGetCurrentSheet
  - IDrawingDoc.IReorderSheets
  - IDrawingDoc.NewSheet3
  - IDrawingDoc.ReorderSheets
  - IDrawingDoc.SetupSheet5
  - IDrawingDoc.Sheet
  - IDrawingDoc.SheetNext
  - IDrawingDoc.SheetPrevious
  - ISheet
keywords:
  - sheet
  - see
  - also
  - isheet
  - copy
  - paste
  - sheets
  - pastesheet
  - idrawingdoc
  - drawing
  - doc
  - insert
  - option
  - int32
  - rename
  - boolean
  - vb
  - net
  - vba
---

# IDrawingDoc.PasteSheet

Copies and pastes a drawing sheet to the specified location of the drawing document, optionally renaming whenever duplicate names occur.

## Signature

```csharp
System.Boolean PasteSheet( 
   System.Int32
InsertOption
,
   System.Int32
RenameOption
)
```
## Parameters

- `InsertOption` (System.Int32): Option as defined in swInsertOptions_e
- `RenameOption` (System.Int32): Option as defined in swRenameOptions_e ; 1 to rename duplicate section, detail or auxiliary view names; 2 to not rename

## Return Value

True if successful, false if not

## Remarks

Before calling this method, you must:
Select a sheet.
Call
IModelDoc2::EditCopy
.

## Examples

- Copy and Paste Drawing Sheet (C#) (Copy_and_Paste_Drawing_Sheet_Example_CSharp.htm)
- Copy and Paste Drawing Sheet (VB.NET) (Copy_and_Paste_Drawing_Sheet_Example_VBNET.htm)
- Copy and Paste Drawing Sheet (VBA) (Copy_and_Paste_Drawing_Sheet_Example_VB.htm)

## See Also

- `IDrawingDoc.ActivateSheet`
- `IDrawingDoc.EditSheet`
- `IDrawingDoc.GetEditSheet`
- `IDrawingDoc.GetSheetCount`
- `IDrawingDoc.GetSheetNames`
- `IDrawingDoc.IGetCurrentSheet`
- `IDrawingDoc.IReorderSheets`
- `IDrawingDoc.NewSheet3`
- `IDrawingDoc.ReorderSheets`
- `IDrawingDoc.SetupSheet5`
- `IDrawingDoc.Sheet`
- `IDrawingDoc.SheetNext`
- `IDrawingDoc.SheetPrevious`
- `ISheet`