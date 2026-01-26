---
type: method
interface: IDrawingDoc
member: GetCurrentSheet
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.ActivateSheet
  - IDrawingDoc.GetSheetCount
  - IDrawingDoc.GetSheetNames
  - IDrawingDoc.IGetCurrentSheet
  - IDrawingDoc.SheetNext
  - IDrawingDoc.SheetPrevious
keywords:
  - sheet
  - see
  - also
  - isheet
  - current
  - bill
  - materials
  - sheets
  - getcurrentsheet
  - idrawingdoc
  - drawing
  - doc
  - object
  - copy
  - paste
  - vb
  - net
  - vba
  - delete
  - ole
  - objects
  - template
  - properties
  - view
  - names
  - types
  - name
  - revision
  - table
  - numbers
  - rebuild
  - all
  - configurations
  - notes
  - new
  - existing
  - title
  - block
---

# IDrawingDoc.GetCurrentSheet

Gets the currently active drawing sheet.

## Signature

```csharp
System.Object GetCurrentSheet()
```
## Parameters

None.

## Return Value

Sheet

## Remarks

The returned
ISheet
object includes methods that you can use to access the
IBomTable
object.

## Examples

- Copy and Paste Drawing Sheet (C#) (Copy_and_Paste_Drawing_Sheet_Example_CSharp.htm)
- Copy and Paste Drawing Sheet (VB.NET) (Copy_and_Paste_Drawing_Sheet_Example_VBNET.htm)
- Copy and Paste Drawing Sheet (VBA) (Copy_and_Paste_Drawing_Sheet_Example_VB.htm)
- Delete OLE Objects from Drawing Sheet and Template (VBA) (Delete_OLE_Objects_from_Drawing_Sheet_and_Template_Example_VB.htm)
- Get and Set Sheet Properties (VBA) (Get_and_Set_Sheet_Properties_Example_VB.htm)
- Get Drawing View Names and Types (VBA) (Get_Drawing_View_Names_and_Types_Example_VB.htm)
- Get Name and Properties of Drawing Sheet Template (VBA) (Get_Name_and_Properties_of_Drawing_Sheet_Template_Example_VB.htm)
- Get Revision Table (VBA) (Get_Revision_Table_Example_VB.htm)
- Get Sheet Numbers and Names (VBA) (Get_Sheet_Numbers_and_Names_Example_VB.htm)
- Rebuild All Configurations (VBA) (Rebuild_All_Configurations_Example_VB.htm)
- Get Notes from New or Existing Title Block (C#) (Get_Notes_from_New_or_Existing_Title_Block_Example_CSharp.htm)
- Get Notes from New or Existing Title Block (VB.NET) (Get_Notes_from_New_or_Existing_Title_Block_Example_VBNET.htm)
- Get Notes from New or Existing Title Block (VBA) (Get_Notes_from_New_or_Existing_Title_Block_Example_VB.htm)

## See Also

- `IDrawingDoc.ActivateSheet`
- `IDrawingDoc.GetSheetCount`
- `IDrawingDoc.GetSheetNames`
- `IDrawingDoc.IGetCurrentSheet`
- `IDrawingDoc.SheetNext`
- `IDrawingDoc.SheetPrevious`