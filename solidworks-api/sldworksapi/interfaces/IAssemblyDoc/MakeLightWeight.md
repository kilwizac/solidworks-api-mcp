---
type: method
interface: IAssemblyDoc
member: MakeLightWeight
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.LightweightAllResolved
  - IAssemblyDoc.ResolveAllLightWeightComponents
  - IAssemblyDoc.ResolveAllLightweight
  - IAssemblyDoc.ResolveOutOfDateLightWeightComponents
  - IAssemblyDoc.SelectiveOpen
  - IAssemblyDoc.SetComponentState
  - IComponent2.GetSuppression
  - IComponent2.SetSuppression2
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - lightweight
  - components
  - icomponent2
  - makelightweight
  - assembly
  - doc
  - make
  - light
  - weight
  - void
  - vba
---

# IAssemblyDoc.MakeLightWeight

Sets the selected components to lightweight.

## Signature

```csharp
void MakeLightWeight()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

The purpose of this method is to support recording macros. You should use
IComponent2::GetSuppression
or
IComponent2::SetSuppression2
to get or set a component to lightweight.
This method sets the current selected components to lightweight, which is suitable for recording and running macros. IComponent2::GetSuppression and IComponent2::SetSuppression2 operate on the component itself.

## Examples

- Make Assembly Components Lightweight (VBA) (Make_Assembly_Components_Lightweight_Example_VB.htm)

## See Also

- `IAssemblyDoc.LightweightAllResolved`
- `IAssemblyDoc.ResolveAllLightWeightComponents`
- `IAssemblyDoc.ResolveAllLightweight`
- `IAssemblyDoc.ResolveOutOfDateLightWeightComponents`
- `IAssemblyDoc.SelectiveOpen`
- `IAssemblyDoc.SetComponentState`
- `IComponent2.GetSuppression`
- `IComponent2.SetSuppression2`