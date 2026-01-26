---
type: method
interface: IBomTable
member: IGetDisplayData
returns: DisplayData
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IBomTable.GetDisplayData
keywords:
  - igetdisplaydata
  - ibomtable
  - bom
  - table
  - display
  - data
---

# IBomTable.IGetDisplayData

Returns the IDisplayData object for this BOM table.

## Signature

```csharp
DisplayData IGetDisplayData()
```
## Parameters

None.

## Return Value

Pointer for the IDisplayData for this BOM table

## Remarks

Before you use any of the IBomTable methods, activate the BOM table using
IBomTable::Attach3
. After you finish getting BOM data, use
IBomTable::Detach
to deactivate the table.

## See Also

- `IBomTable.GetDisplayData`