---
type: method
interface: IBomTable
member: Attach3
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IBomTable.Detach
keywords:
  - attach3
  - ibomtable
  - bom
  - table
  - boolean
---

# IBomTable.Attach3

Activates the BOM.

## Signature

```csharp
System.Boolean Attach3()
```
## Parameters

None.

## Return Value

True if successfully attached, false if not

## Remarks

If you want SOLIDWORKS to run in the background, then do not use this method. Using this method will cause SOLIDWORKS to become visible.
You must call this method before using any of the
IBomTable
methods.

## See Also

- `IBomTable.Detach`