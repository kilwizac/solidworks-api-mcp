---
type: method
interface: ITableAnnotation
member: IsCellTextEditable
returns: System.Boolean
parameters:
  -
    name: Row
    type: System.Int32
    description: Index of row in which cell resides
  -
    name: Column
    type: System.Int32
    description: Index of column in which cell resides
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.CellTextHorizontalJustification
  - ITableAnnotation.CellTextVerticalJustification
  - ITableAnnotation.DisplayedText
  - ITableAnnotation.GetCellRange
  - ITableAnnotation.GetCellTextFormat
  - ITableAnnotation.GetCellUseDocTextFormat
  - ITableAnnotation.IsCellMerged
  - ITableAnnotation.MergeCells
  - ITableAnnotation.SetCellRange
  - ITableAnnotation.SetCellTextFormat
  - ITableAnnotation.UnmergeCells
keywords:
  - cells
  - tables
  - table
  - iscelltexteditable
  - itableannotation
  - annotation
  - cell
  - text
  - editable
  - row
  - int32
  - column
  - boolean
---

# ITableAnnotation.IsCellTextEditable

Gets whether the text in this cell can be edited.

## Signature

```csharp
System.Boolean IsCellTextEditable( 
   System.Int32
Row
,
   System.Int32
Column
)
```
## Parameters

- `Row` (System.Int32): Index of row in which cell resides
- `Column` (System.Int32): Index of column in which cell resides

## Return Value

True if text in this cell can be edited, false if not

## Remarks

The index for both rows and columns is 0-based.
Tables and cells:
BOM table annotation
: All cells can be edited.
General table annotation
: All cells can be edited.
Hole table annotation
: Only some columns can be edited because some information is automatically generated, thus, that information cannot be edited. The header row and custom columns can be edited.
Revision table annotation
: All cells can be edited.

## See Also

- `ITableAnnotation.CellTextHorizontalJustification`
- `ITableAnnotation.CellTextVerticalJustification`
- `ITableAnnotation.DisplayedText`
- `ITableAnnotation.GetCellRange`
- `ITableAnnotation.GetCellTextFormat`
- `ITableAnnotation.GetCellUseDocTextFormat`
- `ITableAnnotation.IsCellMerged`
- `ITableAnnotation.MergeCells`
- `ITableAnnotation.SetCellRange`
- `ITableAnnotation.SetCellTextFormat`
- `ITableAnnotation.UnmergeCells`