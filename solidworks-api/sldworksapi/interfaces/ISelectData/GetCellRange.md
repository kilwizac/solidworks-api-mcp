---
type: method
interface: ISelectData
member: GetCellRange
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
    description: 0-based column number at the beginning of the selection range
  -
    name: LastColumn
    type: System.Int32
    description: 0-based column number at the end of the selection range
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - ISelectData.SetCellRange
keywords:
  - cells
  - tables
  - select
  - table
  - getcellrange
  - iselectdata
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

# ISelectData.GetCellRange

Gets the specified range of table cells for this selection.

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

- `FirstRow` (System.Int32): 0-based row number at the beginning of the selection range
- `LastRow` (System.Int32): 0-based row number at the end of the selection range
- `FirstColumn` (System.Int32): 0-based column number at the beginning of the selection range
- `LastColumn` (System.Int32): 0-based column number at the end of the selection range

## Return Value

Unknown.

## Remarks

The range of table cells are only used for a selection made in a table. For all other types of selections, these values are ignored.
By default, the value for FirstRow, LastRow, FirstColumn, and LastColumn is -1, which indicates that the entire table is selected.

## See Also

- `ISelectData.SetCellRange`