---
type: method
interface: ITableAnnotation
member: GetColumnTitle
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index indicating the column
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.ColumnCount
  - ITableAnnotation.ColumnHidden
  - ITableAnnotation.DeleteColumn
  - ITableAnnotation.GetColumnType
  - ITableAnnotation.GetColumnWidth
  - ITableAnnotation.GetLockColumnWidth
  - ITableAnnotation.InsertColumn
  - ITableAnnotation.MoveColumn
  - ITableAnnotation.SetLockColumnWidth
  - ITableAnnotation.TotalColumnCount
keywords:
  - getcolumntitle
  - itableannotation
  - table
  - annotation
  - column
  - title
  - index
  - int32
  - string
---

# ITableAnnotation.GetColumnTitle

Obsolete. Superseded by ITableAnnotation::GetColumnTitle2.

## Signature

```csharp
System.String GetColumnTitle( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index indicating the column

## Return Value

Column title

## See Also

- `ITableAnnotation.ColumnCount`
- `ITableAnnotation.ColumnHidden`
- `ITableAnnotation.DeleteColumn`
- `ITableAnnotation.GetColumnType`
- `ITableAnnotation.GetColumnWidth`
- `ITableAnnotation.GetLockColumnWidth`
- `ITableAnnotation.InsertColumn`
- `ITableAnnotation.MoveColumn`
- `ITableAnnotation.SetLockColumnWidth`
- `ITableAnnotation.TotalColumnCount`