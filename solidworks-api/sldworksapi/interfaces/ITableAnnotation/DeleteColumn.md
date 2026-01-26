---
type: method
interface: ITableAnnotation
member: DeleteColumn
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the column you want to delete
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.ColumnCount
  - ITableAnnotation.ColumnHidden
  - ITableAnnotation.GetColumnTitle
  - ITableAnnotation.GetColumnType
  - ITableAnnotation.GetColumnWidth
  - ITableAnnotation.GetLockColumnWidth
  - ITableAnnotation.InsertColumn
  - ITableAnnotation.MoveColumn
  - ITableAnnotation.SetColumnTitle
  - ITableAnnotation.SetColumnType
  - ITableAnnotation.SetLockColumnWidth
  - ITableAnnotation.TotalColumnCount
keywords:
  - deletecolumn
  - itableannotation
  - table
  - annotation
  - delete
  - column
  - index
  - int32
  - boolean
---

# ITableAnnotation.DeleteColumn

Obsolete. Superseded by ITableAnnotation::DeleteColumn2.

## Signature

```csharp
System.Boolean DeleteColumn( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the column you want to delete

## Return Value

True if column is deleted successfully, false if not

## Remarks

The index for both the rows and columns is 0-based.
This method deletes the entire table if you try to delete the only column in the table.

## See Also

- `ITableAnnotation.ColumnCount`
- `ITableAnnotation.ColumnHidden`
- `ITableAnnotation.GetColumnTitle`
- `ITableAnnotation.GetColumnType`
- `ITableAnnotation.GetColumnWidth`
- `ITableAnnotation.GetLockColumnWidth`
- `ITableAnnotation.InsertColumn`
- `ITableAnnotation.MoveColumn`
- `ITableAnnotation.SetColumnTitle`
- `ITableAnnotation.SetColumnType`
- `ITableAnnotation.SetLockColumnWidth`
- `ITableAnnotation.TotalColumnCount`