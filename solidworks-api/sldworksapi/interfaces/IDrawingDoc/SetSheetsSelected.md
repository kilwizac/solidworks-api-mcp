---
type: method
interface: IDrawingDoc
member: SetSheetsSelected
returns: void
parameters:
  -
    name: NewSheetList
    type: System.Object
    description: Names of the drawing sheets whose setups to modify (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - selections
  - ui
related: []
keywords:
  - sheet
  - see
  - also
  - isheet
  - up
  - multiple
  - drawing
  - sheets
  - setsheetsselected
  - idrawingdoc
  - doc
  - selected
  - new
  - list
  - object
  - void
  - modify
  - setups
  - vb
  - net
  - vba
---

# IDrawingDoc.SetSheetsSelected

Sets the specified drawing sheets whose setups to modify.

## Signature

```csharp
void SetSheetsSelected( 
   System.Object
NewSheetList
)
```
## Parameters

- `NewSheetList` (System.Object): Names of the drawing sheets whose setups to modify (see Remarks )

## Return Value

Unknown.

## Remarks

The first drawing sheet in the drawing is automatically included in NewSheetList and need not be specified.
After calling this method, call
IDrawingDoc::SetupSheet6
to specify how to modify the setups of the specified drawing sheets.

## Examples

- Modify Multiple Drawing Sheets Setups (C#) (Modify_Multiple_Drawing_Sheets_Setups_Example_CSharp.htm)
- Modify Multiple Drawing Sheets Setups (VB.NET) (Modify_Multiple_Drawing_Sheets_Setups_Example_VBNET.htm)
- Modify Multiple Drawing Sheets Setups (VBA) (Modify_Multiple_Drawing_Sheets_Setups_Example_VB.htm)