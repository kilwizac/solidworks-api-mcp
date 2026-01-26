---
type: method
interface: IBomTable
member: DeSelect
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - selections
related:
  - IBomTable.Select
keywords:
  - deselect
  - ibomtable
  - bom
  - table
  - de
  - select
  - boolean
---

# IBomTable.DeSelect

Deselects this BOM table.

## Signature

```csharp
System.Boolean DeSelect()
```
## Parameters

None.

## Return Value

True if the BOM table is successfully deselected, false if not

## Remarks

Before you use any of the IBomTable methods, activate the BOM table using
IBomTable::Attach3
. After you finish getting BOM data, use
IBomTable::Detach
to deactivate the table.

## See Also

- `IBomTable.Select`