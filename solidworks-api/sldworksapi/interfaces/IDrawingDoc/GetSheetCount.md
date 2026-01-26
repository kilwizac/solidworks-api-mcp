---
type: method
interface: IDrawingDoc
member: GetSheetCount
returns: System.Int32
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
  - IDrawingDoc.GetSheetNames
  - IDrawingDoc.IGetCurrentSheet
  - IDrawingDoc.IGetSheetNames
  - IDrawingDoc.IReorderSheets
  - IDrawingDoc.NewSheet3
  - IDrawingDoc.ReorderSheets
  - IDrawingDoc.SetupSheet4
  - IDrawingDoc.SheetNext
  - IDrawingDoc.SheetPrevious
  - ISheet
keywords:
  - sheet
  - see
  - also
  - isheet
  - numbers
  - getsheetcount
  - idrawingdoc
  - drawing
  - doc
  - count
  - int32
  - print
  - document
  - file
  - vba
---

# IDrawingDoc.GetSheetCount

Gets the number of drawing sheets in this drawing.

## Signature

```csharp
System.Int32 GetSheetCount()
```
## Parameters

None.

## Return Value

Number of drawing sheets in the drawing

## Remarks

Call this method before call
IDrawingDoc::IGetSheetNames
to determine the size of that method's return array.

## Examples

- Print Drawing Document to File (VBA) (Print_Drawing_Document_to_File_Example_VB.htm)

## See Also

- `IDrawingDoc.ActivateSheet`
- `IDrawingDoc.EditSheet`
- `IDrawingDoc.GetCurrentSheet`
- `IDrawingDoc.GetEditSheet`
- `IDrawingDoc.GetSheetNames`
- `IDrawingDoc.IGetCurrentSheet`
- `IDrawingDoc.IGetSheetNames`
- `IDrawingDoc.IReorderSheets`
- `IDrawingDoc.NewSheet3`
- `IDrawingDoc.ReorderSheets`
- `IDrawingDoc.SetupSheet4`
- `IDrawingDoc.SheetNext`
- `IDrawingDoc.SheetPrevious`
- `ISheet`