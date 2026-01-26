---
type: method
interface: IAssemblyDoc
member: SetComponentSuppression
returns: System.Boolean
parameters:
  -
    name: State
    type: System.Int32
    description: State to set as defined by swComponentSuppressionState_e (see Remarks )
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
  - IAssemblyDoc.ResolveOutOfDateLightWeightComponents
  - IAssemblyDoc.SetComponentState
  - IComponent2.GetSuppression
  - IComponent2.IsSuppressed
  - IComponent2.SetSuppression2
keywords:
  - components
  - see
  - also
  - icomponent2
  - lightweight
  - resolved
  - suppress
  - resolve
  - assemblies
  - iassemblydoc
  - setcomponentsuppression
  - assembly
  - doc
  - component
  - suppression
  - state
  - int32
  - boolean
---

# IAssemblyDoc.SetComponentSuppression

Suppresses, resolves, or sets to lightweight selected components of this assembly in the active configuration only.

## Signature

```csharp
System.Boolean SetComponentSuppression( 
   System.Int32
State
)
```
## Parameters

- `State` (System.Int32): State to set as defined by swComponentSuppressionState_e (see Remarks )

## Return Value

True if the selected components are suppressed, resolved, or set to lightweight, false if not

## Remarks

Only swComponentSuppressed, swComponentLightweight, or swComponentResolved are valid
values for State. If you specify another value for State, this method does nothing.
This method works on selected components in the active configuration only.

## See Also

- `IAssemblyDoc.GetLightWeightComponentCount`
- `IAssemblyDoc.LightweightAllResolved`
- `IAssemblyDoc.MakeLightWeight`
- `IAssemblyDoc.ResolveAllLightWeightComponents`
- `IAssemblyDoc.ResolveAllLightweight`
- `IAssemblyDoc.ResolveOutOfDateLightWeightComponents`
- `IAssemblyDoc.SetComponentState`
- `IComponent2.GetSuppression`
- `IComponent2.IsSuppressed`
- `IComponent2.SetSuppression2`