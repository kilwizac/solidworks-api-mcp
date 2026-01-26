---
type: method
interface: ITableAnnotation
member: DeleteRow
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the row you want to delete
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetLockRowHeight
  - ITableAnnotation.GetRowHeight
  - ITableAnnotation.GetRowVerticalGap
  - ITableAnnotation.InsertRow
  - ITableAnnotation.MoveRow
  - ITableAnnotation.RowCount
  - ITableAnnotation.RowHidden
  - ITableAnnotation.SetLockRowHeight
  - ITableAnnotation.SetRowHeight
  - ITableAnnotation.SetRowVerticalGap
  - ITableAnnotation.TotalRowCount
keywords:
  - deleterow
  - itableannotation
  - table
  - annotation
  - delete
  - row
  - index
  - int32
  - boolean
---

# ITableAnnotation.DeleteRow

Obsolete. Superseded by ITableAnnotation::DeleteRow2.

## Signature

```csharp
System.Boolean DeleteRow( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the row you want to delete

## Return Value

True if the row is deleted successfully, false if not

## Remarks

The index for both the rows and columns is 0-based.
This method deletes the entire table if you try to delete the only row in the table.

## See Also

- `ITableAnnotation.GetLockRowHeight`
- `ITableAnnotation.GetRowHeight`
- `ITableAnnotation.GetRowVerticalGap`
- `ITableAnnotation.InsertRow`
- `ITableAnnotation.MoveRow`
- `ITableAnnotation.RowCount`
- `ITableAnnotation.RowHidden`
- `ITableAnnotation.SetLockRowHeight`
- `ITableAnnotation.SetRowHeight`
- `ITableAnnotation.SetRowVerticalGap`
- `ITableAnnotation.TotalRowCount`