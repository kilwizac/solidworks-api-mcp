---
type: method
interface: IModelDoc2
member: GetBendState
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
  - IModelDoc2.SetBendState
keywords:
  - bends
  - state
  - getbendstate
  - imodeldoc2
  - model
  - doc2
  - bend
  - int32
  - flatten
  - sheet
  - metal
  - part
  - vba
---

# IModelDoc2.GetBendState

Gets the current bend state of a sheet metal part.

## Signature

```csharp
System.Int32 GetBendState()
```
## Parameters

None.

## Return Value

Current state of sheet metal bends as defined in swSMBendState_e

## Remarks

If...
Then...
A part with bend information is being edited in context of the assembly (see
IAssemblyDoc::EditPart2
)
The bend state for that part is returned.
This method is run on a part without bend information or directly on an assembly
swSMBendStateNone is returned, and the return status is S_false (COM only).

## Examples

- Flatten Sheet Metal Part (VBA) (Flatten_Sheet_Metal_Part_Example_VB.htm)

## See Also

- `IModelDoc2.SetBendState`