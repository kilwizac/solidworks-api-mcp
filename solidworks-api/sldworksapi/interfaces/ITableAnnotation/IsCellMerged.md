---
type: method
interface: ITableAnnotation
member: IsCellMerged
returns: System.Boolean
parameters:
  -
    name: Row
    type: System.Int32
    description: Index of the row of the first cell to see if it's merged
  -
    name: Column
    type: System.Int32
    description: Index of the column of the first cell to see if it's merged
  -
    name: WithRow
    type: System.Int32
    description: Index of the row of the second cell with which the first cell is merged
  -
    name: WithColumn
    type: System.Int32
    description: Index of the column of the second cell with which the first cell is merged
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
  - ITableAnnotation.IsCellTextEditable
  - ITableAnnotation.Merge
  - ITableAnnotation.MergeCells
  - ITableAnnotation.SetCellRange
  - ITableAnnotation.SetCellTextFormat
  - ITableAnnotation.UnmergeCells
keywords:
  - table
  - cells
  - tables
  - iscellmerged
  - itableannotation
  - annotation
  - cell
  - merged
  - row
  - int32
  - column
  - boolean
---

# ITableAnnotation.IsCellMerged

Gets whether the specified cell is merged with other cells.

## Signature

```csharp
System.Boolean IsCellMerged( 
   System.Int32
Row
,
   System.Int32
Column
,
   out System.Int32
WithRow
,
   out System.Int32
WithColumn
)
```
## Parameters

- `Row` (System.Int32): Index of the row of the first cell to see if it's merged
- `Column` (System.Int32): Index of the column of the first cell to see if it's merged
- `WithRow` (System.Int32): Index of the row of the second cell with which the first cell is merged
- `WithColumn` (System.Int32): Index of the column of the second cell with which the first cell is merged

## Return Value

True if this cell is merged with other cells, false if not

## Remarks

The index for both rows and columns is 0-based.

## See Also

- `ITableAnnotation.CellTextHorizontalJustification`
- `ITableAnnotation.CellTextVerticalJustification`
- `ITableAnnotation.DisplayedText`
- `ITableAnnotation.GetCellRange`
- `ITableAnnotation.GetCellTextFormat`
- `ITableAnnotation.GetCellUseDocTextFormat`
- `ITableAnnotation.IsCellTextEditable`
- `ITableAnnotation.Merge`
- `ITableAnnotation.MergeCells`
- `ITableAnnotation.SetCellRange`
- `ITableAnnotation.SetCellTextFormat`
- `ITableAnnotation.UnmergeCells`