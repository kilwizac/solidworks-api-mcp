---
type: property
interface: ITableAnnotation
member: RowHidden
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of row
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.DeleteColumn
  - ITableAnnotation.GetLockRowHeight
  - ITableAnnotation.GetRowHeight
  - ITableAnnotation.GetRowVerticalGap
  - ITableAnnotation.InsertRow
  - ITableAnnotation.MoveRow
  - ITableAnnotation.RowCount
  - ITableAnnotation.SetLockRowHeight
  - ITableAnnotation.SetRowHeight
  - ITableAnnotation.SetRowVerticalGap
  - ITableAnnotation.TotalRowCount
keywords:
  - rowhidden
  - itableannotation
  - table
  - annotation
  - row
  - hidden
  - index
  - int32
  - boolean
  - hide
  - show
  - vba
  - insert
  - general
readonly: null
---

# ITableAnnotation.RowHidden

Gets or sets whether the specified row is hidden in this table.

## Signature

```csharp
System.Boolean RowHidden( 
   System.Int32
Index
) {get; set;}
```
## Parameters

- `Index` (System.Int32): Index of row

## Return Value

True if hidden, false if not

## Remarks

The index for both the rows and columns is 0-based.

## Examples

- Hide and Show Row (VBA) (Hide_and_Show_Row_Example_VB.htm)
- Insert General Table (VBA) (Insert_General_Table_Example_VB.htm)

## See Also

- `ITableAnnotation.DeleteColumn`
- `ITableAnnotation.GetLockRowHeight`
- `ITableAnnotation.GetRowHeight`
- `ITableAnnotation.GetRowVerticalGap`
- `ITableAnnotation.InsertRow`
- `ITableAnnotation.MoveRow`
- `ITableAnnotation.RowCount`
- `ITableAnnotation.SetLockRowHeight`
- `ITableAnnotation.SetRowHeight`
- `ITableAnnotation.SetRowVerticalGap`
- `ITableAnnotation.TotalRowCount`