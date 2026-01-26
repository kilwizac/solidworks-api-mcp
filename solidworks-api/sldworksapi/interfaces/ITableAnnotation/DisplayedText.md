---
type: property
interface: ITableAnnotation
member: DisplayedText
returns: System.String
parameters:
  -
    name: Row
    type: System.Int32
    description: Index of the row
  -
    name: Column
    type: System.Int32
    description: Index of the column
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.CellTextHorizontalJustification
  - ITableAnnotation.CellTextVerticalJustification
  - ITableAnnotation.GetCellTextFormat
  - ITableAnnotation.GetCellUseDocTextFormat
  - ITableAnnotation.IsCellMerged
  - ITableAnnotation.IsCellTextEditable
  - ITableAnnotation.MergeCells
  - ITableAnnotation.SetCellRange
  - ITableAnnotation.SetCellTextFormat
  - ITableAnnotation.SetTextFormat
keywords:
  - displayedtext
  - itableannotation
  - table
  - annotation
  - displayed
  - text
  - row
  - int32
  - column
  - string
readonly: true
---

# ITableAnnotation.DisplayedText

Obsolete. Superseded by ITableAnnotation::DisplayedText2.

## Signature

```csharp
System.String DisplayedText( 
   System.Int32
Row
,
   System.Int32
Column
) {get;}
```
## Parameters

- `Row` (System.Int32): Index of the row
- `Column` (System.Int32): Index of the column

## Return Value

Text displayed in the specified cell

## Remarks

Index for both rows and columns is 0-based.
To get the string that drives the text displayed in the specified cell, use
ITableAnnotation::Text
.

## See Also

- `ITableAnnotation.CellTextHorizontalJustification`
- `ITableAnnotation.CellTextVerticalJustification`
- `ITableAnnotation.GetCellTextFormat`
- `ITableAnnotation.GetCellUseDocTextFormat`
- `ITableAnnotation.IsCellMerged`
- `ITableAnnotation.IsCellTextEditable`
- `ITableAnnotation.MergeCells`
- `ITableAnnotation.SetCellRange`
- `ITableAnnotation.SetCellTextFormat`
- `ITableAnnotation.SetTextFormat`