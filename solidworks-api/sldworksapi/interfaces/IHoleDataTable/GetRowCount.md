---
type: method
interface: IHoleDataTable
member: GetRowCount
returns: System.Boolean
parameters:
  -
    name: RowCount
    type: System.Int32
    description: Number of rows
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IHoleDataTable.GetCellData
  - IHoleDataTable.GetRowData
keywords:
  - getrowcount
  - iholedatatable
  - hole
  - data
  - table
  - row
  - count
  - int32
  - boolean
---

# IHoleDataTable.GetRowCount

Gets the number of rows in this Hole Wizard fastener table.

## Signature

```csharp
System.Boolean GetRowCount( 
   out System.Int32
RowCount
)
```
## Parameters

- `RowCount` (System.Int32): Number of rows

## Return Value

True if number of rows successfully retrieved, false if not

## See Also

- `IHoleDataTable.GetCellData`
- `IHoleDataTable.GetRowData`