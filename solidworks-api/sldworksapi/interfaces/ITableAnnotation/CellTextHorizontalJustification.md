---
type: property
interface: ITableAnnotation
member: CellTextHorizontalJustification
returns: System.Int32
parameters:
  -
    name: Row
    type: System.Int32
    description: Index of the row in which the cell resides
  -
    name: Column
    type: System.Int32
    description: Index of the column in which the cell resides
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.CellTextVerticalJustification
  - ITableAnnotation.GetCellRange
  - ITableAnnotation.GetCellTextFormat
  - ITableAnnotation.GetCellUseDocTextFormat
  - ITableAnnotation.IsCellMerged
  - ITableAnnotation.IsCellTextEditable
  - ITableAnnotation.MergeCells
  - ITableAnnotation.SetCellRange
  - ITableAnnotation.SetCellTextFormat
  - ITableAnnotation.TextHorizontalJustification
  - ITableAnnotation.TextVerticalJustification
keywords:
  - cells
  - tables
  - table
  - celltexthorizontaljustification
  - itableannotation
  - annotation
  - cell
  - text
  - horizontal
  - justification
  - row
  - int32
  - column
readonly: null
---

# ITableAnnotation.CellTextHorizontalJustification

Gets or sets the horizontal justification for the text in the specified cell.

## Signature

```csharp
System.Int32 CellTextHorizontalJustification( 
   System.Int32
Row
,
   System.Int32
Column
) {get; set;}
```
## Parameters

- `Row` (System.Int32): Index of the row in which the cell resides
- `Column` (System.Int32): Index of the column in which the cell resides

## Return Value

Justification as defined by swTextJustification_e

## Remarks

The index for both the rows and columns is 0-based.

## See Also

- `ITableAnnotation.CellTextVerticalJustification`
- `ITableAnnotation.GetCellRange`
- `ITableAnnotation.GetCellTextFormat`
- `ITableAnnotation.GetCellUseDocTextFormat`
- `ITableAnnotation.IsCellMerged`
- `ITableAnnotation.IsCellTextEditable`
- `ITableAnnotation.MergeCells`
- `ITableAnnotation.SetCellRange`
- `ITableAnnotation.SetCellTextFormat`
- `ITableAnnotation.TextHorizontalJustification`
- `ITableAnnotation.TextVerticalJustification`