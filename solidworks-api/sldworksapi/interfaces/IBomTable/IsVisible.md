---
type: method
interface: IBomTable
member: IsVisible
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - isvisible
  - ibomtable
  - bom
  - table
  - visible
  - boolean
---

# IBomTable.IsVisible

Gets whether this BOM is visible.

## Signature

```csharp
System.Boolean IsVisible()
```
## Parameters

None.

## Return Value

True if the BOM is visible, false if not

## Remarks

Before you use any of the IBomTable methods, activate the BOM table using
IBomTable::Attach3
. After you finish getting BOM data, use
IBomTable::Detach
to deactivate the table.