---
type: method
interface: ITableAnnotation
member: SetLockRowHeight
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the row (see Remarks )
  -
    name: LockRowHeight
    type: System.Boolean
    description: True to lock this row's height, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.DeleteRow
  - ITableAnnotation.GetLockRowHeight
  - ITableAnnotation.GetRowHeight
  - ITableAnnotation.GetRowVerticalGap
  - ITableAnnotation.InsertRow
  - ITableAnnotation.MoveRow
  - ITableAnnotation.RowHidden
  - ITableAnnotation.SetRowHeight
  - ITableAnnotation.SetRowVerticalGap
keywords:
  - setlockrowheight
  - itableannotation
  - table
  - annotation
  - lock
  - row
  - height
  - index
  - int32
  - boolean
---

# ITableAnnotation.SetLockRowHeight

Sets whether to lock the height of the specified row in this table annotation.

## Signature

```csharp
System.Boolean SetLockRowHeight( 
   System.Int32
Index
,
   System.Boolean
LockRowHeight
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the row (see Remarks )
- `LockRowHeight` (System.Boolean): True to lock this row's height, false to not

## Return Value

True if setting whether to lock the height of the specified row is successful, false if not

## Remarks

Call
ITableAnnotation::RowCount
to get the number of visible rows or
ITableAnnotation::TotalRowCount
to get the number of visible and hidden rows in this table annotation.

## See Also

- `ITableAnnotation.DeleteRow`
- `ITableAnnotation.GetLockRowHeight`
- `ITableAnnotation.GetRowHeight`
- `ITableAnnotation.GetRowVerticalGap`
- `ITableAnnotation.InsertRow`
- `ITableAnnotation.MoveRow`
- `ITableAnnotation.RowHidden`
- `ITableAnnotation.SetRowHeight`
- `ITableAnnotation.SetRowVerticalGap`