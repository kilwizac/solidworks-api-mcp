---
type: method
interface: ITableAnnotation
member: GetRowVerticalGap
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of row for which to get the height
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.DeleteRow
  - ITableAnnotation.GetLockRowHeight
  - ITableAnnotation.GetRowHeight
  - ITableAnnotation.InsertRow
  - ITableAnnotation.MoveRow
  - ITableAnnotation.RowCount
  - ITableAnnotation.RowHidden
  - ITableAnnotation.SetLockRowHeight
  - ITableAnnotation.SetRowHeight
  - ITableAnnotation.TotalRowCount
keywords:
  - table
  - rows
  - gap
  - row
  - getrowverticalgap
  - itableannotation
  - annotation
  - vertical
  - index
  - int32
  - double
---

# ITableAnnotation.GetRowVerticalGap

Gets the gap between the text and the top or bottom of the specified row of this table.

## Signature

```csharp
System.Double GetRowVerticalGap( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of row for which to get the height

## Return Value

Gap in system units

## Remarks

Use
ITableAnnotation::SetRowVerticalGap
to set the size of the gap.

## See Also

- `ITableAnnotation.DeleteRow`
- `ITableAnnotation.GetLockRowHeight`
- `ITableAnnotation.GetRowHeight`
- `ITableAnnotation.InsertRow`
- `ITableAnnotation.MoveRow`
- `ITableAnnotation.RowCount`
- `ITableAnnotation.RowHidden`
- `ITableAnnotation.SetLockRowHeight`
- `ITableAnnotation.SetRowHeight`
- `ITableAnnotation.TotalRowCount`