---
type: method
interface: ITableAnnotation
member: MoveColumn
returns: System.Boolean
parameters:
  -
    name: Source
    type: System.Int32
    description: Index of column to move
  -
    name: Where
    type: System.Int32
    description: Position where to move Source relative to Destination as defined by swTableItemInsertPosition_e
  -
    name: Destination
    type: System.Int32
    description: Index of column where to move Source
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.ColumnCount
  - ITableAnnotation.ColumnHidden
  - ITableAnnotation.DeleteColumn
  - ITableAnnotation.GetColumnTitle
  - ITableAnnotation.GetColumnType
  - ITableAnnotation.GetColumnWidth
  - ITableAnnotation.GetLockColumnWidth
  - ITableAnnotation.InsertColumn
  - ITableAnnotation.SetColumnTitle
  - ITableAnnotation.SetColumnType
  - ITableAnnotation.SetColumnWidth
  - ITableAnnotation.SetLockColumnWidth
  - ITableAnnotation.TotalColumnCount
keywords:
  - table
  - columns
  - movecolumn
  - itableannotation
  - annotation
  - move
  - column
  - source
  - int32
  - where
  - destination
  - boolean
---

# ITableAnnotation.MoveColumn

Moves a column in this table annotation.

## Signature

```csharp
System.Boolean MoveColumn( 
   System.Int32
Source
,
   System.Int32
Where
,
   System.Int32
Destination
)
```
## Parameters

- `Source` (System.Int32): Index of column to move
- `Where` (System.Int32): Position where to move Source relative to Destination as defined by swTableItemInsertPosition_e
- `Destination` (System.Int32): Index of column where to move Source

## Return Value

True if a column is moved, false if not

## Remarks

The index for both rows and columns is 0-based.

## See Also

- `ITableAnnotation.ColumnCount`
- `ITableAnnotation.ColumnHidden`
- `ITableAnnotation.DeleteColumn`
- `ITableAnnotation.GetColumnTitle`
- `ITableAnnotation.GetColumnType`
- `ITableAnnotation.GetColumnWidth`
- `ITableAnnotation.GetLockColumnWidth`
- `ITableAnnotation.InsertColumn`
- `ITableAnnotation.SetColumnTitle`
- `ITableAnnotation.SetColumnType`
- `ITableAnnotation.SetColumnWidth`
- `ITableAnnotation.SetLockColumnWidth`
- `ITableAnnotation.TotalColumnCount`