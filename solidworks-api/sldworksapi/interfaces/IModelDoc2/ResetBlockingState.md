---
type: method
interface: IModelDoc2
member: ResetBlockingState
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - blocking
  - states
  - locking
  - resetblockingstate
  - imodeldoc2
  - model
  - doc2
  - reset
  - state
  - void
  - vba
---

# IModelDoc2.ResetBlockingState

Resets the blocking state for the SOLIDWORKS menus.

## Signature

```csharp
void ResetBlockingState()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Call this method after calling
IModelDoc2::SetBlockingState
to set the SOLIDWORKS menus back to their previous state.
NOTE:
You must call this method every time you call IModelDoc2::SetBlockingState. It is not enough to call this method once at the end of a sequence of operations that have called IModelDoc2::SetBlockingState several times.

## Examples

- Set Blocking State (VBA) (Set_Blocking_State_Example_VB.htm)