---
type: property
interface: ITableAnnotation
member: CellTextVerticalJustification
returns: System.Int32
parameters:
  -
    name: Row
    type: System.Int32
    description: Index of the row in which this cell resides
  -
    name: Column
    type: System.Int32
    description: Index of the column in which this cell resides
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.CellTextHorizontalJustification
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
  - celltextverticaljustification
  - itableannotation
  - annotation
  - cell
  - text
  - vertical
  - justification
  - row
  - int32
  - column
readonly: null
---

# ITableAnnotation.CellTextVerticalJustification

Gets or sets the vertical justification for the text in the specified cell.

## Signature

```csharp
System.Int32 CellTextVerticalJustification( 
   System.Int32
Row
,
   System.Int32
Column
) {get; set;}
```
## Parameters

- `Row` (System.Int32): Index of the row in which this cell resides
- `Column` (System.Int32): Index of the column in which this cell resides

## Return Value

Justification as defined by swTextAlignmentVertical_e

## Remarks

The index for both the rows and columns is 0-based.

## See Also

- `ITableAnnotation.CellTextHorizontalJustification`
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