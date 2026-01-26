---
type: method
interface: IAssemblyDoc
member: ResolveAllLightweight
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
  - IAssemblyDoc.GetLightWeightComponentCount
  - IAssemblyDoc.LightweightAllResolved
  - IAssemblyDoc.MakeLightWeight
  - IAssemblyDoc.ResolveAllLightWeightComponents
  - IAssemblyDoc.ResolveOutOfDateLightWeightComponents
  - IAssemblyDoc.SelectiveOpen
  - IAssemblyDoc.SetComponentState
  - IAssemblyDoc.SetComponentSuppression
keywords:
  - components
  - see
  - also
  - icomponent2
  - resolved
  - resolve
  - lightweight
  - assemblies
  - iassemblydoc
  - resolvealllightweight
  - assembly
  - doc
  - all
  - boolean
---

# IAssemblyDoc.ResolveAllLightweight

Resolves all lightweight child components of the selected components

## Signature

```csharp
System.Boolean ResolveAllLightweight()
```
## Parameters

None.

## Return Value

True if all lightweight child components of the selected components are resolved, false if not

## Remarks

If no components are selected, then this method is applied to this assembly document.
Suppressed components are ignored.

## See Also

- `IAssemblyDoc.GetLightWeightComponentCount`
- `IAssemblyDoc.LightweightAllResolved`
- `IAssemblyDoc.MakeLightWeight`
- `IAssemblyDoc.ResolveAllLightWeightComponents`
- `IAssemblyDoc.ResolveOutOfDateLightWeightComponents`
- `IAssemblyDoc.SelectiveOpen`
- `IAssemblyDoc.SetComponentState`
- `IAssemblyDoc.SetComponentSuppression`