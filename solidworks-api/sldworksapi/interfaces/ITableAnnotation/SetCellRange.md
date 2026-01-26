---
type: method
interface: ITableAnnotation
member: SetCellRange
returns: void
parameters:
  -
    name: FirstRow
    type: System.Int32
    description: First row in the range
  -
    name: LastRow
    type: System.Int32
    description: Last row in the range
  -
    name: FirstColumn
    type: System.Int32
    description: First column in the range
  -
    name: LastColumn
    type: System.Int32
    description: Last column in the range
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
  - ITableAnnotation.IsCellTextEditable
  - ITableAnnotation.MergeCells
  - ITableAnnotation.SetCellTextFormat
  - ITableAnnotation.UnmergeCells
keywords:
  - cells
  - tables
  - table
  - setcellrange
  - itableannotation
  - annotation
  - cell
  - range
  - first
  - row
  - int32
  - last
  - column
  - void
---

# ITableAnnotation.SetCellRange

Sets the current range of cells.

## Signature

```csharp
void SetCellRange( 
   System.Int32
FirstRow
,
   System.Int32
LastRow
,
   System.Int32
FirstColumn
,
   System.Int32
LastColumn
)
```
## Parameters

- `FirstRow` (System.Int32): First row in the range
- `LastRow` (System.Int32): Last row in the range
- `FirstColumn` (System.Int32): First column in the range
- `LastColumn` (System.Int32): Last column in the range

## Return Value

Unknown.

## Remarks

The index for both rows and columns is 0-based.

## See Also

- `ITableAnnotation.CellTextHorizontalJustification`
- `ITableAnnotation.CellTextVerticalJustification`
- `ITableAnnotation.DisplayedText`
- `ITableAnnotation.GetCellRange`
- `ITableAnnotation.GetCellTextFormat`
- `ITableAnnotation.GetCellUseDocTextFormat`
- `ITableAnnotation.IsCellMerged`
- `ITableAnnotation.IsCellTextEditable`
- `ITableAnnotation.MergeCells`
- `ITableAnnotation.SetCellTextFormat`
- `ITableAnnotation.UnmergeCells`