---
type: method
interface: IComponent2
member: IsSuppressed
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.LightweightAllResolved
  - IAssemblyDoc.SetComponentSuppression
  - IComponent2.GetSuppression
  - IComponent2.SetSuppression2
  - IFeature.ISetSuppression2
  - IFeature.IsSuppressed2
  - IFeature.SetSuppression2
keywords:
  - issuppressed
  - icomponent2
  - component2
  - suppressed
  - boolean
  - change
  - material
  - properties
  - vba
  - component
  - suppression
  - state
  - transforms
  - assembly
  - components
  - make
  - lightweight
---

# IComponent2.IsSuppressed

Gets whether this component is suppressed.

## Signature

```csharp
System.Boolean IsSuppressed()
```
## Parameters

None.

## Return Value

True if this component is suppressed, false if not

## Remarks

The suppression state of a component can vary based on the active configuration. You might want to use
IComponent2::GetSuppression
, which returns the specific suppression state of the component.

## Examples

- Change Material Properties (VBA) (Change_Material_Properties_Example_VB.htm)
- Get and Set Component's Suppression State (VBA) (Get_and_Set_Component_s_Suppression_State_Example_VB.htm)
- Get Transforms of Assembly Components (VBA) (Get_Transforms_of_Assembly_Components_Example_VB.htm)
- Make Assembly Components Lightweight (VBA) (Make_Assembly_Components_Lightweight_Example_VB.htm)

## See Also

- `IAssemblyDoc.LightweightAllResolved`
- `IAssemblyDoc.SetComponentSuppression`
- `IComponent2.GetSuppression`
- `IComponent2.SetSuppression2`
- `IFeature.ISetSuppression2`
- `IFeature.IsSuppressed2`
- `IFeature.SetSuppression2`