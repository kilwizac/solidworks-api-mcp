---
type: method
interface: IDrawingDoc
member: IGetCurrentSheet
returns: Sheet
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
  - IDrawingDoc.EditSheet
  - IDrawingDoc.GetCurrentSheet
  - IDrawingDoc.GetEditSheet
  - IDrawingDoc.GetSheetCount
  - IDrawingDoc.GetSheetNames
  - IDrawingDoc.IGetSheetNames
  - IDrawingDoc.IReorderSheets
  - IDrawingDoc.ReorderSheets
  - IDrawingDoc.SetupSheet4
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
  - igetcurrentsheet
  - idrawingdoc
  - drawing
  - doc
  - insert
  - spline
---

# IDrawingDoc.IGetCurrentSheet

Gets the currently active drawing sheet.

## Signature

```csharp
Sheet IGetCurrentSheet()
```
## Parameters

None.

## Return Value

Pointer to the ISheet object

## Remarks

The returned
ISheet
object includes methods that you can use to access the
IBomTable
object.

## Examples

- Insert Spline in Drawing (C++) (Insert_Spline_in_Drawing_Example_CPlusPlus_COM.htm)

## See Also

- `IDrawingDoc.ActivateSheet`
- `IDrawingDoc.EditSheet`
- `IDrawingDoc.GetCurrentSheet`
- `IDrawingDoc.GetEditSheet`
- `IDrawingDoc.GetSheetCount`
- `IDrawingDoc.GetSheetNames`
- `IDrawingDoc.IGetSheetNames`
- `IDrawingDoc.IReorderSheets`
- `IDrawingDoc.ReorderSheets`
- `IDrawingDoc.SetupSheet4`
- `IDrawingDoc.SheetNext`
- `IDrawingDoc.SheetPrevious`