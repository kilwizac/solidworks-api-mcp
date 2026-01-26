---
type: method
interface: ITableAnnotation
member: GetLockRowHeight
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the row (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.DeleteRow
  - ITableAnnotation.GetRowHeight
  - ITableAnnotation.GetRowVerticalGap
  - ITableAnnotation.InsertRow
  - ITableAnnotation.MoveRow
  - ITableAnnotation.RowHidden
  - ITableAnnotation.SetLockRowHeight
  - ITableAnnotation.SetRowHeight
  - ITableAnnotation.SetRowVerticalGap
keywords:
  - getlockrowheight
  - itableannotation
  - table
  - annotation
  - lock
  - row
  - height
  - index
  - int32
  - boolean
  - components
  - each
  - bom
  - vb
  - net
  - vba
---

# ITableAnnotation.GetLockRowHeight

Gets whether the height of the specified row is locked in this table annotation.

## Signature

```csharp
System.Boolean GetLockRowHeight( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the row (see Remarks )

## Return Value

True if the specified row's height is locked, false if not

## Remarks

Call
ITableAnnotation::RowCount
to get the number of visible rows or
ITableAnnotation::TotalRowCount
to get the number of visible and hidden rows in this table annotation.

## Examples

- Get Components in Each BOM Table Row (C#) (Get_Components_in_Each_BOM_Table_Row_Example_CSharp.htm)
- Get Components in Each BOM Table Row (VB.NET) (Get_Components_in_Each_BOM_Table_Row_Example_VBNET.htm)
- Get Components in Each BOM Table Row (VBA) (Get_Components_in_Each_BOM_Table_Row_VB.htm)

## See Also

- `ITableAnnotation.DeleteRow`
- `ITableAnnotation.GetRowHeight`
- `ITableAnnotation.GetRowVerticalGap`
- `ITableAnnotation.InsertRow`
- `ITableAnnotation.MoveRow`
- `ITableAnnotation.RowHidden`
- `ITableAnnotation.SetLockRowHeight`
- `ITableAnnotation.SetRowHeight`
- `ITableAnnotation.SetRowVerticalGap`