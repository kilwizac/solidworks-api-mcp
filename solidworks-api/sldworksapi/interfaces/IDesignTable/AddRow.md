---
type: method
interface: IDesignTable
member: AddRow
returns: System.Boolean
parameters:
  -
    name: CellValues
    type: System.Object
    description: Array of the cell values
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.AutoAddNewConfigs
  - IDesignTable.AutoAddNewParams
  - IDesignTable.GetRowCount
  - IDesignTable.GetTotalRowCount
  - IDesignTable.GetVisibleRowCount
  - IDesignTable.GetVisibleTopRowNumber
  - IDesignTable.RowHidden
  - IDesignTable.SetRowChanged
keywords:
  - addrow
  - idesigntable
  - design
  - table
  - add
  - row
  - cell
  - values
  - object
  - boolean
  - vba
---

# IDesignTable.AddRow

Adds a row to the design table.

## Signature

```csharp
System.Boolean AddRow( 
   System.Object
CellValues
)
```
## Parameters

- `CellValues` (System.Object): Array of the cell values

## Return Value

True if the row was successfully added, false if not

## Remarks

Do not use
IDesignTable::Attach
or
IDesignTable::Detach
with this method. Instead, use
IDesignTable::EditTable2
and
IDesignTable::UpdateTable
.

## Examples

- Add Row to Design Table (VBA) (Add_Row_to_Design_Table_Example_VB.htm)

## See Also

- `IDesignTable.AutoAddNewConfigs`
- `IDesignTable.AutoAddNewParams`
- `IDesignTable.GetRowCount`
- `IDesignTable.GetTotalRowCount`
- `IDesignTable.GetVisibleRowCount`
- `IDesignTable.GetVisibleTopRowNumber`
- `IDesignTable.RowHidden`
- `IDesignTable.SetRowChanged`