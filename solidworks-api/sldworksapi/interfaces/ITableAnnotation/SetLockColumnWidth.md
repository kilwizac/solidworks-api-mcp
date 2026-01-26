---
type: method
interface: ITableAnnotation
member: SetLockColumnWidth
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the column (see Remarks )
  -
    name: LockColumnWidth
    type: System.Boolean
    description: True to lock this column's width, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.ColumnHidden
  - ITableAnnotation.DeleteColumn
  - ITableAnnotation.GetColumnTitle
  - ITableAnnotation.GetColumnType
  - ITableAnnotation.GetColumnWidth
  - ITableAnnotation.GetLockColumnWidth
  - ITableAnnotation.InsertColumn2
  - ITableAnnotation.MoveColumn
  - ITableAnnotation.SetColumnTitle
  - ITableAnnotation.SetColumnType
  - ITableAnnotation.SetColumnWidth
keywords:
  - setlockcolumnwidth
  - itableannotation
  - table
  - annotation
  - lock
  - column
  - width
  - index
  - int32
  - boolean
---

# ITableAnnotation.SetLockColumnWidth

Sets whether to lock the width of the specified column in this table annotation.

## Signature

```csharp
System.Boolean SetLockColumnWidth( 
   System.Int32
Index
,
   System.Boolean
LockColumnWidth
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the column (see Remarks )
- `LockColumnWidth` (System.Boolean): True to lock this column's width, false to not

## Return Value

True if setting whether to lock the width of the specified column is successful, false if not

## Remarks

Call
ITableAnnotation::ColumnCount
to get the number of visible columns or
ITableAnnotation::TotalColumnCount
to get the number of visible and hidden columns in this table annotation.

## See Also

- `ITableAnnotation.ColumnHidden`
- `ITableAnnotation.DeleteColumn`
- `ITableAnnotation.GetColumnTitle`
- `ITableAnnotation.GetColumnType`
- `ITableAnnotation.GetColumnWidth`
- `ITableAnnotation.GetLockColumnWidth`
- `ITableAnnotation.InsertColumn2`
- `ITableAnnotation.MoveColumn`
- `ITableAnnotation.SetColumnTitle`
- `ITableAnnotation.SetColumnType`
- `ITableAnnotation.SetColumnWidth`