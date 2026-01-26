---
type: method
interface: ITableAnnotation
member: DeleteRow2
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the row you want to delete
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to delete the hidden row, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.InsertRow
  - ITableAnnotation.RowCount
  - ITableAnnotation.RowHidden
  - ITableAnnotation.TotalRowCount
keywords:
  - table
  - rows
  - deleterow2
  - itableannotation
  - annotation
  - delete
  - row2
  - index
  - int32
  - include
  - hidden
  - boolean
---

# ITableAnnotation.DeleteRow2

Deletes the specified row from this table.

## Signature

```csharp
System.Boolean DeleteRow2( 
   System.Int32
Index
,
   System.Boolean
IncludeHidden
)
```
## Parameters

- `Index` (System.Int32): Index of the row you want to delete
- `IncludeHidden` (System.Boolean): True to delete the hidden row, false to not

## Return Value

True if the row is deleted successfully, false if not

## Remarks

The index for both the rows and columns is 0-based.
This method deletes the entire table if you try to delete the only row in the table.

## See Also

- `ITableAnnotation.InsertRow`
- `ITableAnnotation.RowCount`
- `ITableAnnotation.RowHidden`
- `ITableAnnotation.TotalRowCount`