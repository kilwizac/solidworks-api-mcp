---
type: method
interface: ITableAnnotation
member: GetCellTextFormat
returns: TextFormat
parameters:
  -
    name: Row
    type: System.Int32
    description: Index of the row in which the cell is located
  -
    name: Column
    type: System.Int32
    description: Index of the column in which the cell is located
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetCellUseDocTextFormat
  - ITableAnnotation.GetTextFormat
  - ITableAnnotation.SetCellTextFormat
  - ITableAnnotation.SetTextFormat
  - ITableAnnotation.Text
keywords:
  - cells
  - tables
  - table
  - getcelltextformat
  - itableannotation
  - annotation
  - cell
  - text
  - format
  - row
  - int32
  - column
---

# ITableAnnotation.GetCellTextFormat

Gets the text format for the specified cell in this table.

## Signature

```csharp
TextFormat GetCellTextFormat( 
   System.Int32
Row
,
   System.Int32
Column
)
```
## Parameters

- `Row` (System.Int32): Index of the row in which the cell is located
- `Column` (System.Int32): Index of the column in which the cell is located

## Return Value

ITextFormat object

## Remarks

The index for both the rows and columns is 0-based.

## See Also

- `ITableAnnotation.GetCellUseDocTextFormat`
- `ITableAnnotation.GetTextFormat`
- `ITableAnnotation.SetCellTextFormat`
- `ITableAnnotation.SetTextFormat`
- `ITableAnnotation.Text`