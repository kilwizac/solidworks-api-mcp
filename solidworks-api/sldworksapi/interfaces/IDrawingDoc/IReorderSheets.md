---
type: method
interface: IDrawingDoc
member: IReorderSheets
returns: System.Boolean
parameters:
  -
    name: SheetCount
    type: System.Int32
    description: Number of sheets to reorder
  -
    name: NewSheetList
    type: System.String
    description: Array of the names of the sheets to reorder
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
  - IDrawingDoc.IGetCurrentSheet
  - IDrawingDoc.IGetSheetNames
  - IDrawingDoc.ReorderSheets
  - IDrawingDoc.SetupSheet4
  - ISheet.GetName
  - ISheet.SetName
keywords:
  - sheet
  - see
  - also
  - isheet
  - reorder
  - sheets
  - ireordersheets
  - idrawingdoc
  - drawing
  - doc
  - count
  - int32
  - new
  - list
  - string
  - boolean
---

# IDrawingDoc.IReorderSheets

Reorders the drawing sheets per their positions in the input array.

## Signature

```csharp
System.Boolean IReorderSheets( 
   System.Int32
SheetCount
,
   ref System.String
NewSheetList
)
```
## Parameters

- `SheetCount` (System.Int32): Number of sheets to reorder
- `NewSheetList` (System.String): Array of the names of the sheets to reorder

## Return Value

True if the sheets are reordered per their position in NewSheetList, false if not

## See Also

- `IDrawingDoc.ActivateSheet`
- `IDrawingDoc.EditSheet`
- `IDrawingDoc.GetCurrentSheet`
- `IDrawingDoc.GetEditSheet`
- `IDrawingDoc.GetSheetCount`
- `IDrawingDoc.GetSheetNames`
- `IDrawingDoc.IGetCurrentSheet`
- `IDrawingDoc.IGetSheetNames`
- `IDrawingDoc.ReorderSheets`
- `IDrawingDoc.SetupSheet4`
- `ISheet.GetName`
- `ISheet.SetName`