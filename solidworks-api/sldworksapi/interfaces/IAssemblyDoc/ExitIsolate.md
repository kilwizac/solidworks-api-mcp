---
type: method
interface: IAssemblyDoc
member: ExitIsolate
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.SaveIsolate
  - IAssemblyDoc.SetIsolateVisibility
keywords:
  - components
  - see
  - also
  - icomponent2
  - isolate
  - assemblies
  - iassemblydoc
  - display
  - states
  - exitisolate
  - assembly
  - doc
  - exit
  - boolean
  - component
  - vb
  - net
  - vba
---

# IAssemblyDoc.ExitIsolate

Exits isolating the selected components and returns the assembly to its original display state.

## Signature

```csharp
System.Boolean ExitIsolate()
```
## Parameters

None.

## Return Value

True if isolating the selected component exits and the assembly returns to its original display state, false if not

## Examples

- Isolate Component (C#) (Isolate_Component_Example_CSharp.htm)
- Isolate Component (VB.NET) (Isolate_Component_Example_VBNET.htm)
- Isolate Component (VBA) (Isolate_Component_Example_VB.htm)

## See Also

- `IAssemblyDoc.SaveIsolate`
- `IAssemblyDoc.SetIsolateVisibility`