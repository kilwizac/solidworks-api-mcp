---
type: method
interface: ITableAnnotation
member: GetCellRange
returns: void
parameters:
  -
    name: FirstRow
    type: System.Int32
    description: Index of row of first selected cell
  -
    name: LastRow
    type: System.Int32
    description: Index of row of last selected cell
  -
    name: FirstColumn
    type: System.Int32
    description: Index of column of first selected cell
  -
    name: LastColumn
    type: System.Int32
    description: Index of column of last selected cell
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.CellTextHorizontalJustification
  - ITableAnnotation.CellTextVerticalJustification
  - ITableAnnotation.DisplayedText
  - ITableAnnotation.GetCellTextFormat
  - ITableAnnotation.GetCellUseDocTextFormat
  - ITableAnnotation.IsCellMerged
  - ITableAnnotation.IsCellTextEditable
  - ITableAnnotation.MergeCells
  - ITableAnnotation.SetCellRange
  - ITableAnnotation.SetCellTextFormat
keywords:
  - cells
  - tables
  - table
  - getcellrange
  - itableannotation
  - annotation
  - cell
  - range
  - first
  - row
  - int32
  - last
  - column
  - void
  - select
  - vb
  - net
  - vba
---

# ITableAnnotation.GetCellRange

Gets the selected table cells' row and column index ranges.

## Signature

```csharp
void GetCellRange( 
   out System.Int32
FirstRow
,
   out System.Int32
LastRow
,
   out System.Int32
FirstColumn
,
   out System.Int32
LastColumn
)
```
## Parameters

- `FirstRow` (System.Int32): Index of row of first selected cell
- `LastRow` (System.Int32): Index of row of last selected cell
- `FirstColumn` (System.Int32): Index of column of first selected cell
- `LastColumn` (System.Int32): Index of column of last selected cell

## Return Value

Unknown.

## Remarks

The returned indexes are all 0-based.
If you don't multi-select table cells before you call this method, then the cell row/column index range for the entire table is returned.
Before calling this method, you can select the table cells in the graphics area whose row/column index range you want to get. How you make these selections determines what this method returns.
Selection
Steps
Cell range returned
Table cell
Place the cursor on the desired table cell.
Click the left-mouse button.
Selected cell
Hold down the Ctrl key and place the cursor on the desired table cell.
Click the left-mouse button.
Selected cell
Multiple table cells
Place the cursor on a desired table cell.
Click and hold down the left-mouse button.
Drag the cursor over the other desired table cells.
Release the left-mouse button when the cursor is on the last table cell that you want selected.
All selected cells
Hold down the Ctrl key and place the cursor on a desired table cell.
Click the left-mouse button.
Repeat steps 1 and 2 until all desired table cells are selected.
Each selected cell
Table column
Place the cursor just above the desired column and click the left-mouse button when the cursor changes to a solid arrow
All selected cells
Table row
Place the cursor to just left of the desired row and click the left-mouse button when the cursor changes to a solid arrow
All selected cells
Run any of the examples in the
Example
section to better understand the values returned by this method.

## Examples

- Select Table Cells (C#) (Select_Table_Cells_Example_CSharp.htm)
- Select Table Cells (VB.NET) (Select_Table_Cells_Example_VBNET.htm)
- Select Table Cells (VBA) (Select_Table_Cells_Example_VB.htm)

## See Also

- `ITableAnnotation.CellTextHorizontalJustification`
- `ITableAnnotation.CellTextVerticalJustification`
- `ITableAnnotation.DisplayedText`
- `ITableAnnotation.GetCellTextFormat`
- `ITableAnnotation.GetCellUseDocTextFormat`
- `ITableAnnotation.IsCellMerged`
- `ITableAnnotation.IsCellTextEditable`
- `ITableAnnotation.MergeCells`
- `ITableAnnotation.SetCellRange`
- `ITableAnnotation.SetCellTextFormat`