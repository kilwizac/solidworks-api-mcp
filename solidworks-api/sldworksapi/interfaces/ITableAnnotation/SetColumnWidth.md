---
type: method
interface: ITableAnnotation
member: SetColumnWidth
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of column for which to set the width
  -
    name: Width
    type: System.Double
    description: Width at which to set specified column, in system units
  -
    name: Options
    type: System.Int32
    description: Table's behavior after changing column width as defined by swTableRowColSizeChangeBehavior_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.ColumnCount
  - ITableAnnotation.ColumnHidden
  - ITableAnnotation.DeleteColumn
  - ITableAnnotation.GetColumnTitle
  - ITableAnnotation.GetColumnType
  - ITableAnnotation.GetColumnWidth
  - ITableAnnotation.GetLockColumnWidth
  - ITableAnnotation.InsertColumn
  - ITableAnnotation.MoveColumn
  - ITableAnnotation.SetColumnTitle
  - ITableAnnotation.SetColumnType
  - ITableAnnotation.SetLockColumnWidth
  - ITableAnnotation.TotalColumnCount
keywords:
  - table
  - columns
  - setcolumnwidth
  - itableannotation
  - annotation
  - column
  - width
  - index
  - int32
  - double
  - options
---

# ITableAnnotation.SetColumnWidth

Sets the width of the specified column in this table.

## Signature

```csharp
System.Double SetColumnWidth( 
   System.Int32
Index
,
   System.Double
Width
,
   System.Int32
Options
)
```
## Parameters

- `Index` (System.Int32): Index of column for which to set the width
- `Width` (System.Double): Width at which to set specified column, in system units
- `Options` (System.Int32): Table's behavior after changing column width as defined by swTableRowColSizeChangeBehavior_e (see Remarks )

## Return Value

Width at which specified column is set (see Remarks )

## Remarks

Index is the column number for which to set the width. Thus, the first column is column 0. It can also be a value from the
swTableCellRangeIdentifier_e
enumerator.
If Index equals...
Then the width of all of the columns...
swTableCellRange_All
Is set, if possible.
swTableCellRange_Current
In the current range (see
ITableAnnotation::GetCellRange
and
ITableAnnotation::SetCellRange
) is set, if possible.
When the width of a column changes, the rest of the table is affected. The Options argument indicates how the rest of the table should behave.
If...
Then...
Options =
swTableRowColChange_TableSizeCanChange
The rest of the columns remain the same width and are shifted away from the table anchor to make room for the changed column.
Width of the entire table must remain the same, so that the table continues to fit properly on the drawing
Other columns must absorb the change in width.
There are two possibilities supported by this method.
If Options =
swTableRowColChange_AbsorbedByNext
, then the first column to the right of the columns whose width has changed, is adjusted if possible. If that is not possible, then the first column to the left of the columns whose width has changed, is adjusted if possible. If that is not possible either, then no action is taken.
The other similar case is if Options =
swTableRowColChange_AbsorbedByPrevious
. First the column to the left is tried, then the column to the right.
Options =
swTableRowColChange_AbsorbedByNext
or
swTableRowColChange_AbsorbedByPrevious
It may not be possible to get the desired results. If this is the case, you must determine the full width of the table yourself and set row widths individually using the
swTableRowColChange_TableSizeCanChange
option, making sure to end up with the original table width.
The return value is the width that the column is set to. If you specified a range of columns, it is the width of the first column of that range.
It is possible that the return value is different than the width value that you passed in.
One possibility is that if you specify a column width that is less than the minimum column width, the minimum column width is used, instead of what you specified. Another possibility is that if you are trying to maintain a fixed table width, but the width of the adjacent columns is not big enough to absorb the width changes to the columns that you specified, then the return value is the same as the column's original width instead of what you specified.
To get the column width, use
ITableAnnotation::GetColumnWidth
.
To get or set the row height, use
ITableAnnotation::GetRowHeight
and
ITableAnnotation::SetRowHeight
.

## See Also

- `ITableAnnotation.ColumnCount`
- `ITableAnnotation.ColumnHidden`
- `ITableAnnotation.DeleteColumn`
- `ITableAnnotation.GetColumnTitle`
- `ITableAnnotation.GetColumnType`
- `ITableAnnotation.GetColumnWidth`
- `ITableAnnotation.GetLockColumnWidth`
- `ITableAnnotation.InsertColumn`
- `ITableAnnotation.MoveColumn`
- `ITableAnnotation.SetColumnTitle`
- `ITableAnnotation.SetColumnType`
- `ITableAnnotation.SetLockColumnWidth`
- `ITableAnnotation.TotalColumnCount`