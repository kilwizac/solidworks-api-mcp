---
type: method
interface: IModelDoc2
member: SetBlockingState
returns: void
parameters:
  -
    name: StateIn
    type: System.Int32
    description: State as defined in swBlockingStates_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetBlockingState
keywords:
  - blocking
  - states
  - locking
  - setblockingstate
  - imodeldoc2
  - model
  - doc2
  - state
  - int32
  - void
  - vba
---

# IModelDoc2.SetBlockingState

Sets the blocking state for the SOLIDWORKS menus.

## Signature

```csharp
void SetBlockingState( 
   System.Int32
StateIn
)
```
## Parameters

- `StateIn` (System.Int32): State as defined in swBlockingStates_e

## Return Value

Unknown.

## Remarks

Call
IModelDoc2::ResetBlockingState
to reset the state when the operations are completed.
IMPORTANT:
There must be a corresponding call to IModelDoc2::ResetBlockingState for every call to IModelDoc2::SetBlockingState. It is not enough to call IModelDoc2::ResetBlockingState once at the end of a sequence of operations that have called IModelDoc2::SetBlockingState several times.

## Examples

- Set Blocking State (VBA) (Set_Blocking_State_Example_VB.htm)

## See Also

- `IModelDoc2.GetBlockingState`