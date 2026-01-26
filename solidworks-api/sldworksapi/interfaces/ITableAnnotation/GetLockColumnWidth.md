---
type: method
interface: ITableAnnotation
member: GetLockColumnWidth
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the column (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.ColumnHidden
  - ITableAnnotation.DeleteColumn
  - ITableAnnotation.GetColumnType
  - ITableAnnotation.GetColumnWidth
  - ITableAnnotation.InsertColumn2
  - ITableAnnotation.MoveColumn
  - ITableAnnotation.SetColumnTitle
  - ITableAnnotation.SetColumnType
  - ITableAnnotation.SetColumnWidth
  - ITableAnnotation.SetLockColumnWidth
keywords:
  - getlockcolumnwidth
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

# ITableAnnotation.GetLockColumnWidth

Gets whether the width of the specified column is locked in this table annotation.

## Signature

```csharp
System.Boolean GetLockColumnWidth( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the column (see Remarks )

## Return Value

True if the specified column's width is locked, false if not

## Remarks

Call
ITableAnnotation::ColumnCount
to get the number of visible columns or
ITableAnnotation::TotalColumnCount
to get the number of visible and hidden columns in this table annotation.

## See Also

- `ITableAnnotation.ColumnHidden`
- `ITableAnnotation.DeleteColumn`
- `ITableAnnotation.GetColumnType`
- `ITableAnnotation.GetColumnWidth`
- `ITableAnnotation.InsertColumn2`
- `ITableAnnotation.MoveColumn`
- `ITableAnnotation.SetColumnTitle`
- `ITableAnnotation.SetColumnType`
- `ITableAnnotation.SetColumnWidth`
- `ITableAnnotation.SetLockColumnWidth`