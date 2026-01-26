---
type: method
interface: IAssemblyDoc
member: AddPipePenetration
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AddPipingFitting
keywords:
  - piping
  - penetration
  - addpipepenetration
  - iassemblydoc
  - assembly
  - doc
  - add
  - pipe
  - int32
---

# IAssemblyDoc.AddPipePenetration

Penetrates the adjacent fitting or pipe with the pipe that ends at the selected sketch point.

## Signature

```csharp
System.Int32 AddPipePenetration()
```
## Parameters

None.

## Return Value

Indicates the success or failure of the operation as defined in swPipingPenetrationStatus_e

## Remarks

If the routing DLL is not available, then COM returns ITF_E_ROUTINGNOTLOADED.

## See Also

- `IAssemblyDoc.AddPipingFitting`