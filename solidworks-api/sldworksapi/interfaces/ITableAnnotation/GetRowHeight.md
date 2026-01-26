---
type: method
interface: ITableAnnotation
member: GetRowHeight
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
  - table
  - rows
  - getrowheight
  - itableannotation
  - annotation
  - row
  - height
  - index
  - int32
  - double
  - components
  - each
  - bom
  - vb
  - net
  - vba
---

# ITableAnnotation.GetRowHeight

Gets the height of the specified row of this table.

## Signature

```csharp
System.Double GetRowHeight( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of row for which to get the height

## Return Value

Height of the specified row, in system units

## Remarks

The index for both rows and columns is 0-based.

## Examples

- Get Components in Each BOM Table Row (C#) (Get_Components_in_Each_BOM_Table_Row_Example_CSharp.htm)
- Get Components in Each BOM Table Row (VB.NET) (Get_Components_in_Each_BOM_Table_Row_Example_VBNET.htm)
- Get Components in Each BOM Table Row (VBA) (Get_Components_in_Each_BOM_Table_Row_VB.htm)

## See Also

- `ITableAnnotation.DeleteRow`
- `ITableAnnotation.GetLockRowHeight`
- `ITableAnnotation.GetRowVerticalGap`
- `ITableAnnotation.InsertRow`
- `ITableAnnotation.MoveRow`
- `ITableAnnotation.RowCount`
- `ITableAnnotation.RowHidden`
- `ITableAnnotation.SetLockRowHeight`
- `ITableAnnotation.SetRowHeight`
- `ITableAnnotation.SetRowVerticalGap`
- `ITableAnnotation.TotalRowCount`