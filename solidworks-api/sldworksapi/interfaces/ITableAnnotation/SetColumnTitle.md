---
type: method
interface: ITableAnnotation
member: SetColumnTitle
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the column whose title to set
  -
    name: Title
    type: System.String
    description: Column title
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
  - ITableAnnotation.GetColumnType
  - ITableAnnotation.GetColumnWidth
  - ITableAnnotation.GetLockColumnWidth
  - ITableAnnotation.InsertColumn
  - ITableAnnotation.MoveColumn
  - ITableAnnotation.SetColumnType
  - ITableAnnotation.SetColumnWidth
  - ITableAnnotation.SetLockColumnWidth
  - ITableAnnotation.TotalColumnCount
keywords:
  - setcolumntitle
  - itableannotation
  - table
  - annotation
  - column
  - title
  - index
  - int32
  - string
  - boolean
---

# ITableAnnotation.SetColumnTitle

Obsolete. Superseded by ITableAnnotation::SetColumnTitle2.

## Signature

```csharp
System.Boolean SetColumnTitle( 
   System.Int32
Index
,
   System.String
Title
)
```
## Parameters

- `Index` (System.Int32): Index of the column whose title to set
- `Title` (System.String): Column title

## Return Value

True if title is set, false if not

## Remarks

The index for both rows and columns is 0-based.
False is returned if the table does not have a header enabled. The title cannot be set to empty text.

## See Also

- `ITableAnnotation.ColumnCount`
- `ITableAnnotation.ColumnHidden`
- `ITableAnnotation.DeleteColumn`
- `ITableAnnotation.GetColumnTitle`
- `ITableAnnotation.GetColumnType`
- `ITableAnnotation.GetColumnWidth`
- `ITableAnnotation.GetLockColumnWidth`
- `ITableAnnotation.InsertColumn`
- `ITableAnnotation.MoveColumn`
- `ITableAnnotation.SetColumnType`
- `ITableAnnotation.SetColumnWidth`
- `ITableAnnotation.SetLockColumnWidth`
- `ITableAnnotation.TotalColumnCount`