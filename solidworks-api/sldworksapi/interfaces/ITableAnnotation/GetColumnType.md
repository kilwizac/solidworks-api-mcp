---
type: method
interface: ITableAnnotation
member: GetColumnType
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index indicating the column whose type to get
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.ColumnCount
  - ITableAnnotation.ColumnHidden
  - ITableAnnotation.DeleteColumn
  - ITableAnnotation.GetColumnTitle
  - ITableAnnotation.GetColumnWidth
  - ITableAnnotation.GetLockColumnWidth
  - ITableAnnotation.InsertColumn
  - ITableAnnotation.MoveColumn
  - ITableAnnotation.SetColumnTitle
  - ITableAnnotation.SetColumnType
  - ITableAnnotation.SetColumnWidth
  - ITableAnnotation.TotalColumnCount
keywords:
  - getcolumntype
  - itableannotation
  - table
  - annotation
  - column
  - type
  - index
  - int32
---

# ITableAnnotation.GetColumnType

Obsolete. Superseded by ITableAnnotation::GetColumnType2.

## Signature

```csharp
System.Int32 GetColumnType( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index indicating the column whose type to get

## Return Value

Type of column as defined by swTableColumnTypes_e

## See Also

- `ITableAnnotation.ColumnCount`
- `ITableAnnotation.ColumnHidden`
- `ITableAnnotation.DeleteColumn`
- `ITableAnnotation.GetColumnTitle`
- `ITableAnnotation.GetColumnWidth`
- `ITableAnnotation.GetLockColumnWidth`
- `ITableAnnotation.InsertColumn`
- `ITableAnnotation.MoveColumn`
- `ITableAnnotation.SetColumnTitle`
- `ITableAnnotation.SetColumnType`
- `ITableAnnotation.SetColumnWidth`
- `ITableAnnotation.TotalColumnCount`