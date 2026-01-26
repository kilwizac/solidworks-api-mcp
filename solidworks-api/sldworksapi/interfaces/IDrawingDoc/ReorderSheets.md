---
type: method
interface: IDrawingDoc
member: ReorderSheets
returns: System.Boolean
parameters:
  -
    name: NewSheetList
    type: System.Object
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
  - IDrawingDoc.IReorderSheets
  - IDrawingDoc.NewSheet3
  - IDrawingDoc.SetupSheet4
  - IDrawingDoc.SheetNext
  - IDrawingDoc.SheetPrevious
  - ISheet
keywords:
  - reorder
  - sheets
  - sheet
  - see
  - also
  - isheet
  - reordersheets
  - idrawingdoc
  - drawing
  - doc
  - new
  - list
  - object
  - boolean
---

# IDrawingDoc.ReorderSheets

Reorders the drawing sheets per their positions in the input array.

## Signature

```csharp
System.Boolean ReorderSheets( 
   System.Object
NewSheetList
)
```
## Parameters

- `NewSheetList` (System.Object): Array of the names of the sheets to reorder

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
- `IDrawingDoc.IReorderSheets`
- `IDrawingDoc.NewSheet3`
- `IDrawingDoc.SetupSheet4`
- `IDrawingDoc.SheetNext`
- `IDrawingDoc.SheetPrevious`
- `ISheet`