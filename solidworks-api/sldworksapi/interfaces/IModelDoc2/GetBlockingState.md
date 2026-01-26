---
type: method
interface: IModelDoc2
member: GetBlockingState
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ResetBlockingState
keywords:
  - blocking
  - states
  - getblockingstate
  - imodeldoc2
  - model
  - doc2
  - state
  - int32
  - vba
---

# IModelDoc2.GetBlockingState

Gets the current value of the SOLIDWORKS blocking state, within the range of values accessible by IModelDoc2::SetBlockingState.

## Signature

```csharp
System.Int32 GetBlockingState()
```
## Parameters

None.

## Return Value

State as defined by swBlockingStates_e

## Examples

- Get Blocking State (VBA) (Get_Blocking_State_Example_VB.htm)
- Set Blocking State (VBA) (Set_Blocking_State_Example_VB.htm)

## See Also

- `IModelDoc2.ResetBlockingState`