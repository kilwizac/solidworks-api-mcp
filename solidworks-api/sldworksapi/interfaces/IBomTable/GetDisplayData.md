---
type: method
interface: IBomTable
member: GetDisplayData
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IBomTable.IGetDisplayData
keywords:
  - getdisplaydata
  - ibomtable
  - bom
  - table
  - display
  - data
  - object
---

# IBomTable.GetDisplayData

Returns the IDisplayData object for this BOM table.

## Signature

```csharp
System.Object GetDisplayData()
```
## Parameters

None.

## Return Value

Display data for this BOM table

## Remarks

Before you use any of the IBomTable methods, activate the BOM table using
IBomTable::Attach3
. After you finish getting BOM data, use
IBomTable::Detach
to deactivate the table.

## See Also

- `IBomTable.IGetDisplayData`