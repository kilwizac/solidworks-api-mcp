---
type: property
interface: ITableAnnotation
member: ColumnHidden
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of column to show or hide
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.ColumnCount
  - ITableAnnotation.DeleteColumn
  - ITableAnnotation.GetColumnTitle
  - ITableAnnotation.GetColumnType
  - ITableAnnotation.GetColumnWidth
  - ITableAnnotation.GetLockColumnWidth
  - ITableAnnotation.InsertColumn
  - ITableAnnotation.MoveColumn
  - ITableAnnotation.SetColumnTitle
  - ITableAnnotation.SetColumnType
  - ITableAnnotation.SetColumnWidth
  - ITableAnnotation.SetLockColumnWidth
  - ITableAnnotation.TotalColumnCount
keywords:
  - table
  - columns
  - columnhidden
  - itableannotation
  - annotation
  - column
  - hidden
  - index
  - int32
  - boolean
  - hide
  - show
  - first
  - hole
  - vb
  - net
  - vba
readonly: null
---

# ITableAnnotation.ColumnHidden

Hides or shows the specified column in this table annotation.

## Signature

```csharp
System.Boolean ColumnHidden( 
   System.Int32
Index
) {get; set;}
```
## Parameters

- `Index` (System.Int32): Index of column to show or hide

## Return Value

True to hide the specified column, false to show it

## Remarks

The index for both the rows and columns is 0-based.

## Examples

- Hide or Show First Column in Hole Table (VB.NET) (Hide_or_Show_First_Column_in_Hole_Table_Example_VBNET.htm)
- Hide or Show First Column in Hole Table (VBA) (Hide_or_Show_First_Column_in_Hole_Table_Example_VB.htm)
- Hide or Show First Column in Hole Table (C#) (Hide_or_Show_First_Column_in_Hole_Table_Example_CSharp.htm)

## See Also

- `ITableAnnotation.ColumnCount`
- `ITableAnnotation.DeleteColumn`
- `ITableAnnotation.GetColumnTitle`
- `ITableAnnotation.GetColumnType`
- `ITableAnnotation.GetColumnWidth`
- `ITableAnnotation.GetLockColumnWidth`
- `ITableAnnotation.InsertColumn`
- `ITableAnnotation.MoveColumn`
- `ITableAnnotation.SetColumnTitle`
- `ITableAnnotation.SetColumnType`
- `ITableAnnotation.SetColumnWidth`
- `ITableAnnotation.SetLockColumnWidth`
- `ITableAnnotation.TotalColumnCount`