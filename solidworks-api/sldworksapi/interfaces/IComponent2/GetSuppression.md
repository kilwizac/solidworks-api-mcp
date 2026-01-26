---
type: method
interface: IComponent2
member: GetSuppression
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.LightweightAllResolved
  - IAssemblyDoc.SetComponentState
  - IAssemblyDoc.SetComponentSuppression
  - IComponent2.IsSuppressed
  - IComponent2.SetSuppression2
keywords:
  - getsuppression
  - icomponent2
  - component2
  - suppression
  - int32
  - access
  - assembly
  - change
  - material
  - properties
  - vba
  - make
  - components
  - lightweight
  - component
  - state
  - vb
  - net
---

# IComponent2.GetSuppression

Obsolete. Superseded by IComponent2::GetSuppression2.

## Signature

```csharp
System.Int32 GetSuppression()
```
## Parameters

None.

## Return Value

Suppression state of this component instance as defined in swComponentSuppressionState_e

## Remarks

Use this method to determine if the component is suppressed, lightweight, or fully resolved. It is critical to know the component's suppression state because lightweight and suppressed components contain only a small subset of data compared to a fully resolved component. For more information, see
Work With Lightweight Components
.

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)
- Change Material Properties (VBA) (Change_Material_Properties_Example_VB.htm)
- Make Assembly Components Lightweight (VBA) (Make_Assembly_Components_Lightweight_Example_VB.htm)
- Get Component State (C#) (Get_Component_State_Example_CSharp.htm)
- Get Component State (VB.NET) (Get_Component_State_Example_VBNET.htm)
- Get Component State (VBA) (Get_Component_State_Example_VB.htm)

## See Also

- `IAssemblyDoc.LightweightAllResolved`
- `IAssemblyDoc.SetComponentState`
- `IAssemblyDoc.SetComponentSuppression`
- `IComponent2.IsSuppressed`
- `IComponent2.SetSuppression2`