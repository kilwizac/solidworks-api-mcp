---
type: method
interface: ITableAnnotation
member: SetRowVerticalGap
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of row for which to get the height
  -
    name: Gap
    type: System.Double
    description: Gap in system units
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
  - gap
  - table
  - row
  - rows
  - setrowverticalgap
  - itableannotation
  - annotation
  - vertical
  - index
  - int32
  - double
  - boolean
---

# ITableAnnotation.SetRowVerticalGap

Sets the gap between the text and the top or bottom of the specified row of this table.

## Signature

```csharp
System.Boolean SetRowVerticalGap( 
   System.Int32
Index
,
   System.Double
Gap
)
```
## Parameters

- `Index` (System.Int32): Index of row for which to get the height
- `Gap` (System.Double): Gap in system units

## Return Value

True if the gap is set, false if not

## Remarks

Use
ITableAnnotation::GetRowVerticalGap
to get the size of the gap.

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