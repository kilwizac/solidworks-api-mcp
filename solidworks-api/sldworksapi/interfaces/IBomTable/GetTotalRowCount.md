---
type: method
interface: IBomTable
member: GetTotalRowCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IBomTable.GetRowCount
  - IBomTable.GetTotalColumnCount
keywords:
  - gettotalrowcount
  - ibomtable
  - bom
  - table
  - total
  - row
  - count
  - int32
---

# IBomTable.GetTotalRowCount

Gets the total number of rows in the BOM table.

## Signature

```csharp
System.Int32 GetTotalRowCount()
```
## Parameters

None.

## Return Value

Total number of rows in the BOM table

## Remarks

This method returns 0 if the BOM is obscured, which may occur when debugging a macro. This is a quirk in Microsoft Excel, which is used by SOLIDWORKS for the BOM functionality.
Before you use any of the IBomTable methods, activate the BOM table using
IBomTable::Attach3
. After you finish getting BOM data, use
IBomTable::Detach
to deactivate the table.

## See Also

- `IBomTable.GetRowCount`
- `IBomTable.GetTotalColumnCount`