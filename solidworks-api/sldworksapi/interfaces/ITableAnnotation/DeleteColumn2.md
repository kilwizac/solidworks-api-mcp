---
type: method
interface: ITableAnnotation
member: DeleteColumn2
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the column you want to delete
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to delete the hidden column, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.ColumnCount
  - ITableAnnotation.ColumnHidden
  - ITableAnnotation.InsertColumn2
  - ITableAnnotation.TotalColumnCount
keywords:
  - table
  - columns
  - deletecolumn2
  - itableannotation
  - annotation
  - delete
  - column2
  - index
  - int32
  - include
  - hidden
  - boolean
---

# ITableAnnotation.DeleteColumn2

Deletes the specified column in this table.

## Signature

```csharp
System.Boolean DeleteColumn2( 
   System.Int32
Index
,
   System.Boolean
IncludeHidden
)
```
## Parameters

- `Index` (System.Int32): Index of the column you want to delete
- `IncludeHidden` (System.Boolean): True to delete the hidden column, false to not

## Return Value

True if column is deleted successfully, false if not

## Remarks

The index for both the rows and columns is 0-based.
This method deletes the entire table if you try to delete the only column in the table.

## See Also

- `ITableAnnotation.ColumnCount`
- `ITableAnnotation.ColumnHidden`
- `ITableAnnotation.InsertColumn2`
- `ITableAnnotation.TotalColumnCount`