---
type: method
interface: IHoleDataTable
member: GetRowData
returns: System.Boolean
parameters:
  -
    name: RowIndex
    type: System.Int32
    description: 0-based index of row
  -
    name: RowData
    type: System.Object
    description: Row data
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - getrowdata
  - iholedatatable
  - hole
  - data
  - table
  - row
  - index
  - int32
  - object
  - boolean
---

# IHoleDataTable.GetRowData

Gets data for the specified row of this Hole Wizard fastener table.

## Signature

```csharp
System.Boolean GetRowData( 
   System.Int32
RowIndex
,
   out System.Object
RowData
)
```
## Parameters

- `RowIndex` (System.Int32): 0-based index of row
- `RowData` (System.Object): Row data

## Return Value

True if row data successfully retrieved, false if not

## Remarks

To set RowIndex, use
IHoleDataTable::GetRowCount
.