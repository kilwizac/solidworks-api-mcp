---
type: method
interface: ITableAnnotation
member: GetCellUseDocTextFormat
returns: System.Boolean
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
  - ITableAnnotation.GetCellTextFormat
  - ITableAnnotation.GetTextFormat
  - ITableAnnotation.SetCellTextFormat
  - ITableAnnotation.SetTextFormat
  - ITableAnnotation.Text
keywords:
  - cells
  - tables
  - table
  - getcellusedoctextformat
  - itableannotation
  - annotation
  - cell
  - use
  - doc
  - text
  - format
  - row
  - int32
  - column
  - boolean
---

# ITableAnnotation.GetCellUseDocTextFormat

Gets whether this cell uses the document setting for its text format.

## Signature

```csharp
System.Boolean GetCellUseDocTextFormat( 
   System.Int32
Row
,
   System.Int32
Column
)
```
## Parameters

- `Row` (System.Int32): Index of the row in which the cell resides
- `Column` (System.Int32): Index of the column in which the cell resides

## Return Value

True to use the document setting for its text format, false to not

## Remarks

The index for both the rows and columns in this table are 0-based.

## See Also

- `ITableAnnotation.GetCellTextFormat`
- `ITableAnnotation.GetTextFormat`
- `ITableAnnotation.SetCellTextFormat`
- `ITableAnnotation.SetTextFormat`
- `ITableAnnotation.Text`