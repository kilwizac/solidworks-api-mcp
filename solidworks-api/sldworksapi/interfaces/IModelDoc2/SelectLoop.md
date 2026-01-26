---
type: method
interface: IModelDoc2
member: SelectLoop
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - selections
  - ui
related: []
keywords:
  - loops
  - see
  - also
  - iloop2
  - select
  - selectloop
  - imodeldoc2
  - model
  - doc2
  - loop
  - void
---

# IModelDoc2.SelectLoop

Selects the loop that corresponds to the selected edge.

## Signature

```csharp
void SelectLoop()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method associates the loop with the selected edge in the
ISelectionMgr
; it does not add an item  to the ISelectionMgr. To find out if the selected edge has an associated loop, use
ISelectionMgr::GetSelectedObjectLoop2
.