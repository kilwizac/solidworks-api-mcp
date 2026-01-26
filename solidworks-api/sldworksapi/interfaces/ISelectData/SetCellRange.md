---
type: method
interface: ISelectData
member: SetCellRange
returns: void
parameters:
  -
    name: FirstRow
    type: System.Int32
    description: 0-based row number at the beginning of the selection range
  -
    name: LastRow
    type: System.Int32
    description: 0-based row number at the end of the selection range
  -
    name: FirstColumn
    type: System.Int32
    description: 0-based row column at the beginning of the selection range
  -
    name: LastColumn
    type: System.Int32
    description: 0-based row column at the end of the selection range
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - ISelectData.GetCellRange
keywords:
  - setcellrange
  - iselectdata
  - select
  - data
  - cell
  - range
  - first
  - row
  - int32
  - last
  - column
  - void
---

# ISelectData.SetCellRange

Sets the specified range of table cells for this selection.

## Signature

```csharp
void SetCellRange( 
   System.Int32
FirstRow
,
   System.Int32
LastRow
,
   System.Int32
FirstColumn
,
   System.Int32
LastColumn
)
```
## Parameters

- `FirstRow` (System.Int32): 0-based row number at the beginning of the selection range
- `LastRow` (System.Int32): 0-based row number at the end of the selection range
- `FirstColumn` (System.Int32): 0-based row column at the beginning of the selection range
- `LastColumn` (System.Int32): 0-based row column at the end of the selection range

## Return Value

Unknown.

## Remarks

The range of table cells are only used for a selection made in a table. For all other types of selections, these values are ignored.
By default, the value for FirstRow, LastRow, FirstColumn, and LastColumn is -1, which indicates that the entire table is selected.
To select an entire...
Set...
Row
FirstColumn and LastColumn to value values
FirstRow LastRow to -1
Column
FirstRow and LastRow to valid values
FirstColumn and LastColumn to -1

## See Also

- `ISelectData.GetCellRange`