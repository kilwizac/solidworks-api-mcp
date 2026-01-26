---
type: method
interface: IAssemblyDoc
member: LightweightAllResolved
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
  - IAssemblyDoc.MakeLightWeight
  - IAssemblyDoc.ResolveAllLightWeightComponents
  - IAssemblyDoc.ResolveAllLightweight
  - IAssemblyDoc.ResolveOutOfDateLightWeightComponents
  - IAssemblyDoc.SelectiveOpen
  - IAssemblyDoc.SetComponentState
  - IComponent2.GetSuppression
  - IComponent2.SetSuppression2
keywords:
  - components
  - see
  - also
  - icomponent2
  - lightweight
  - assemblies
  - iassemblydoc
  - lightweightallresolved
  - assembly
  - doc
  - all
  - resolved
  - boolean
---

# IAssemblyDoc.LightweightAllResolved

Sets to lightweight all resolved child components of the selected components.

## Signature

```csharp
System.Boolean LightweightAllResolved()
```
## Parameters

None.

## Return Value

True if all child components of the selected components are set to lightweight, false if not

## Remarks

If no components are selected, then this method is applied to this assembly document.
Suppressed components are ignored.

## See Also

- `IAssemblyDoc.GetLightWeightComponentCount`
- `IAssemblyDoc.MakeLightWeight`
- `IAssemblyDoc.ResolveAllLightWeightComponents`
- `IAssemblyDoc.ResolveAllLightweight`
- `IAssemblyDoc.ResolveOutOfDateLightWeightComponents`
- `IAssemblyDoc.SelectiveOpen`
- `IAssemblyDoc.SetComponentState`
- `IComponent2.GetSuppression`
- `IComponent2.SetSuppression2`