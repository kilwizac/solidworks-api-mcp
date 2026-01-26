---
type: method
interface: IDrawingDoc
member: ActivateSheet
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name of the sheet
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.GetSheetCount
  - IDrawingDoc.GetSheetNames
  - IDrawingDoc.IGetSheetNames
  - ISheet
keywords:
  - activate
  - drawing
  - sheets
  - see
  - also
  - isheet
  - activatesheet
  - idrawingdoc
  - doc
  - sheet
  - name
  - string
  - boolean
  - copy
  - paste
  - vb
  - net
  - vba
  - each
  - view
  - current
  - rebuild
  - all
  - configurations
  - loaded
---

# IDrawingDoc.ActivateSheet

Activates the specified drawing sheet.

## Signature

```csharp
System.Boolean ActivateSheet( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of the sheet

## Return Value

True if the sheet was activated, false if SOLIDWORKS generated an error

## Remarks

This command makes the specified sheet the active or current sheet, similar to
IDrawingDoc::SheetNext
or
IDrawingDoc::SheetPrevious
. You can use
IDrawingDoc::GetCurrentSheet
or
IDrawing::IGetCurrentSheet
with an active sheet to gain access to the ISheet interface.
To activate a drawing view, you can use
IDrawingView::ActivateView
.

## Examples

- Copy and Paste Drawing Sheet (C#) (Copy_and_Paste_Drawing_Sheet_Example_CSharp.htm)
- Copy and Paste Drawing Sheet (VB.NET) (Copy_and_Paste_Drawing_Sheet_Example_VBNET.htm)
- Copy and Paste Drawing Sheet (VBA) (Copy_and_Paste_Drawing_Sheet_Example_VB.htm)
- Activate Each View on Current Sheet (VBA) (Activate_Each_View_on_Current_Sheet_Example_VB.htm)
- Rebuild All Configurations (VBA) (Rebuild_All_Configurations_Example_VB.htm)
- Get Loaded Sheets (C#) (Get_Loaded_Sheets_Example_CSharp.htm)
- Get Loaded Sheets (VB.NET) (Get_Loaded_Sheets_Example_VBNET.htm)

## See Also

- `IDrawingDoc.GetSheetCount`
- `IDrawingDoc.GetSheetNames`
- `IDrawingDoc.IGetSheetNames`
- `ISheet`