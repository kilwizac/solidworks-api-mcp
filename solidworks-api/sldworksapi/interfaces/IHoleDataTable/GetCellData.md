---
type: method
interface: IHoleDataTable
member: GetCellData
returns: System.Boolean
parameters:
  -
    name: ColumnName
    type: System.String
    description: Column name (see Remarks )
  -
    name: RowIndex
    type: System.Int32
    description: 0-based row index
  -
    name: CellData
    type: System.String
    description: Cell data
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - getcelldata
  - iholedatatable
  - hole
  - data
  - table
  - cell
  - column
  - name
  - string
  - row
  - index
  - int32
  - boolean
---

# IHoleDataTable.GetCellData

Gets data from the specified table cell of this Hole Wizard fastener table.

## Signature

```csharp
System.Boolean GetCellData( 
   System.String
ColumnName
,
   System.Int32
RowIndex
,
   out System.String
CellData
)
```
## Parameters

- `ColumnName` (System.String): Column name (see Remarks )
- `RowIndex` (System.Int32): 0-based row index
- `CellData` (System.String): Cell data

## Return Value

True if cell data successfully retrieved, false if not

## Remarks

To set:
ColumnName, use
IHoleDataTable::GetColumnNames
.
RowIndex, use
IHoleDataTable::GetRowCount
.

## Examples

- IHoleDataTable (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHoleDataTable)