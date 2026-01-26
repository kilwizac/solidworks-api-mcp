---
type: method
interface: ITableAnnotation
member: SetRowHeight
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of row for which to set height
  -
    name: Height
    type: System.Double
    description: Height at which to set specified row, in system units
  -
    name: Options
    type: System.Int32
    description: Table's behavior after changing row as defined by swTableRowColSizeChangeBehavior_e (see Remarks )
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
  - ITableAnnotation.SetRowVerticalGap
  - ITableAnnotation.TotalRowCount
keywords:
  - table
  - rows
  - setrowheight
  - itableannotation
  - annotation
  - row
  - height
  - index
  - int32
  - double
  - options
---

# ITableAnnotation.SetRowHeight

Sets the height of the specified row in this table.

## Signature

```csharp
System.Double SetRowHeight( 
   System.Int32
Index
,
   System.Double
Height
,
   System.Int32
Options
)
```
## Parameters

- `Index` (System.Int32): Index of row for which to set height
- `Height` (System.Double): Height at which to set specified row, in system units
- `Options` (System.Int32): Table's behavior after changing row as defined by swTableRowColSizeChangeBehavior_e (see Remarks )

## Return Value

Height to which specified row is set (see Remarks )

## Remarks

The index for both rows and columns is 0-based.
Index is the number of the row whose height to set. The first row is row 0.
It can also be a value from the
swTableCellRangeIdentifier_e
enumerator.
If Index equals...
Then the height of all of the rows...
swTableCellRange_All
Is set, if possible.
swTableCellRange_Current
In the current range (see
ITableAnnotation::GetCellRange
and
ITableAnnotation::SetCellRange
) is set, if possible
When the height of a row changes, then the rest of the table is affected. The Options argument indicates
the rest of the table's behavior.
If...
Then...
Options = swTableRowColChange_TableSizeCanChange
The rest of the rows remain the same height and are shifted away from the table anchor to make room for the changed row.
Height of the entire table must remain the same, so that the table continues to fit properly on the drawing
Other rows must absorb the change in height. There are two possibilities supported by this method.
If Options = swTableRowColChange_AbsorbedByNext, then first row below the rows whose height has changed, are adjusted if possible.
If that is not possible, then the first row above the rows whose height has changed, is adjusted if possible. If that is not possible either, then no action is taken.
The other similar case is if Options = swTableRowColChange_AbsorbedByPrevious. First the row above is tried, then the row below.
Options = swTableRowColChange_AbsorbedByNext or swTableRowColChange_AbsorbedByPrevious
It might not be possible to get the desired results. If this is the case, then you must determine the full height of the table yourself and set row heights individually using the swTableRowColChange_TableSizeCanChange option, making sure to end up with the original
table height.
The return value is the height at which the row is set. If you specified a range of rows, it is the height of the first row of that range.
It is possible that the return value is different than the value that you passed in. One possibility is that if you specify a row height that is less than the minimum row height, then the minimum row height is used instead of what you specified. Another possibility is that if you are trying to maintain a fixed table height, but the height of the adjacent rows is not big enough to absorb the height changes to the rows that you specified, then the return value is the same as the row's original width instead of what you specified.
To get the row height, use
ITableAnnotation::GetRowHeight
.
To get or set the column width, use
ITableAnnotation::GetColumnWidth
and
ITableAnnotation::SetColumnWidth
.

## See Also

- `ITableAnnotation.DeleteRow`
- `ITableAnnotation.GetLockRowHeight`
- `ITableAnnotation.GetRowVerticalGap`
- `ITableAnnotation.InsertRow`
- `ITableAnnotation.MoveRow`
- `ITableAnnotation.RowCount`
- `ITableAnnotation.RowHidden`
- `ITableAnnotation.SetLockRowHeight`
- `ITableAnnotation.SetRowVerticalGap`
- `ITableAnnotation.TotalRowCount`