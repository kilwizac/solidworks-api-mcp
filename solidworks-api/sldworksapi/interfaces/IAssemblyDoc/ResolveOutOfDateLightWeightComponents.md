---
type: method
interface: IAssemblyDoc
member: ResolveOutOfDateLightWeightComponents
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
  - IAssemblyDoc.ResolveAllLightweight
  - IAssemblyDoc.SelectiveOpen
  - IAssemblyDoc.SetComponentSuppression
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - lightweight
  - components
  - resolve
  - icomponent2
  - resolved
  - resolveoutofdatelightweightcomponents
  - assembly
  - doc
  - out
  - date
  - light
  - weight
  - boolean
---

# IAssemblyDoc.ResolveOutOfDateLightWeightComponents

Resolves the selected out-of-date lightweight component, and any out-of-date lightweight sub-components, in the assembly.

## Signature

```csharp
System.Boolean ResolveOutOfDateLightWeightComponents()
```
## Parameters

None.

## Return Value

True if out-of-date components are resolved, false if not

## Remarks

You must select a lightweight component before using this method. If the lightweight component and any of its lightweight subcomponents are out-of-date, then this method resolves them. If your selection is invalid, then this method returns false.

## See Also

- `IAssemblyDoc.GetLightWeightComponentCount`
- `IAssemblyDoc.LightweightAllResolved`
- `IAssemblyDoc.MakeLightWeight`
- `IAssemblyDoc.ResolveAllLightWeightComponents`
- `IAssemblyDoc.ResolveAllLightweight`
- `IAssemblyDoc.SelectiveOpen`
- `IAssemblyDoc.SetComponentSuppression`