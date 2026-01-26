---
type: method
interface: ITableAnnotation
member: GetColumnWidth
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of column for which to get the width
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
  - ITableAnnotation.GetLockColumnWidth
  - ITableAnnotation.InsertColumn
  - ITableAnnotation.MoveColumn
  - ITableAnnotation.SetColumnTitle
  - ITableAnnotation.SetColumnType
  - ITableAnnotation.SetLockColumnWidth
  - ITableAnnotation.TotalColumnCount
keywords:
  - table
  - columns
  - getcolumnwidth
  - itableannotation
  - annotation
  - column
  - width
  - index
  - int32
  - double
---

# ITableAnnotation.GetColumnWidth

Gets the width of the specified column of this table annotation.

## Signature

```csharp
System.Double GetColumnWidth( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of column for which to get the width

## Return Value

Width of the specified column, in system units

## Remarks

The index for both rows and columns is 0-based.
To set the column width, use
ITableAnnotation::SetColumnWidth
.
To get or set the row height, use
ITableAnnotation::GetRowHeight
and
ITableAnnotation::SetRowHeight
.

## See Also

- `ITableAnnotation.ColumnCount`
- `ITableAnnotation.ColumnHidden`
- `ITableAnnotation.DeleteColumn`
- `ITableAnnotation.GetColumnTitle`
- `ITableAnnotation.GetColumnType`
- `ITableAnnotation.GetLockColumnWidth`
- `ITableAnnotation.InsertColumn`
- `ITableAnnotation.MoveColumn`
- `ITableAnnotation.SetColumnTitle`
- `ITableAnnotation.SetColumnType`
- `ITableAnnotation.SetLockColumnWidth`
- `ITableAnnotation.TotalColumnCount`