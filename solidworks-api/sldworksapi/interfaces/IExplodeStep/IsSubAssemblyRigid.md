---
type: method
interface: IExplodeStep
member: IsSubAssemblyRigid
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.Solving
keywords:
  - rigid
  - sub
  - assemblies
  - issubassemblyrigid
  - iexplodestep
  - explode
  - step
  - assembly
  - boolean
---

# IExplodeStep.IsSubAssemblyRigid

Gets whether the subassembly is rigid or flexible.

## Signature

```csharp
System.Boolean IsSubAssemblyRigid()
```
## Parameters

None.

## Return Value

True if the subassembly is rigid, false if it is flexible

## Remarks

See the SOLIDWORKS Help for more information about flexible and rigid subassemblies.

## See Also

- `IComponent2.Solving`