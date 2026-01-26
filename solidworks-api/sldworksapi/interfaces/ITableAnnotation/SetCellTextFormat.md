---
type: method
interface: ITableAnnotation
member: SetCellTextFormat
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
  -
    name: UseDoc
    type: System.Boolean
    description: True to use the document setting for the text format, false to not
  -
    name: TextFormat
    type: TextFormat
    description: ITextFormat object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.CellTextHorizontalJustification
  - ITableAnnotation.CellTextVerticalJustification
  - ITableAnnotation.GetCellRange
  - ITableAnnotation.GetCellTextFormat
  - ITableAnnotation.IsCellMerged
  - ITableAnnotation.IsCellTextEditable
  - ITableAnnotation.MergeCells
  - ITableAnnotation.SetCellRange
  - ITableAnnotation.TextHorizontalJustification
  - ITableAnnotation.TextVerticalJustification
  - ITableAnnotation.UnmergeCells
keywords:
  - table
  - cells
  - tables
  - setcelltextformat
  - itableannotation
  - annotation
  - cell
  - text
  - format
  - row
  - int32
  - column
  - use
  - doc
  - boolean
---

# ITableAnnotation.SetCellTextFormat

Sets the text format for the text in the specified cell.

## Signature

```csharp
System.Boolean SetCellTextFormat( 
   System.Int32
Row
,
   System.Int32
Column
,
   System.Boolean
UseDoc
,
   TextFormat
TextFormat
)
```
## Parameters

- `Row` (System.Int32): Index of row in which cell resides
- `Column` (System.Int32): Index of column in which cell resides
- `UseDoc` (System.Boolean): True to use the document setting for the text format, false to not
- `TextFormat` (TextFormat): ITextFormat object

## Return Value

True if the text format is set, false if not

## Remarks

The index for both rows and columns is 0-based.

## See Also

- `ITableAnnotation.CellTextHorizontalJustification`
- `ITableAnnotation.CellTextVerticalJustification`
- `ITableAnnotation.GetCellRange`
- `ITableAnnotation.GetCellTextFormat`
- `ITableAnnotation.IsCellMerged`
- `ITableAnnotation.IsCellTextEditable`
- `ITableAnnotation.MergeCells`
- `ITableAnnotation.SetCellRange`
- `ITableAnnotation.TextHorizontalJustification`
- `ITableAnnotation.TextVerticalJustification`
- `ITableAnnotation.UnmergeCells`