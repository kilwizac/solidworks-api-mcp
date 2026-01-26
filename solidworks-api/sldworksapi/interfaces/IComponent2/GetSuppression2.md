---
type: method
interface: IComponent2
member: GetSuppression2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
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
  - components
  - see
  - also
  - icomponent2
  - suppress
  - getsuppression2
  - component2
  - suppression2
  - int32
  - component
  - suppression
  - state
  - vba
---

# IComponent2.GetSuppression2

Gets the suppression state of this component.

## Signature

```csharp
System.Int32 GetSuppression2()
```
## Parameters

None.

## Return Value

Suppression state of this component or internal ID mismatch error code as defined in swComponentSuppressionState_e

## Remarks

The difference between this method and the now obsolete IComponent2::GetSuppression is that this method returns an error code (5 = swComponentSuppressionState_e.swComponentInternalIdMismatch) if there is an internal ID mismatch.
Use this method to determine if the component is suppressed, lightweight, or fully resolved. It is critical to know the component's suppression state because lightweight and suppressed components contain only a small subset of data compared to a fully resolved component. For more information, see
Work With Lightweight Components
.

## Examples

- Get and Set Component's Suppression State (VBA) (Get_and_Set_Component_s_Suppression_State_Example_VB.htm)

## See Also

- `IAssemblyDoc.LightweightAllResolved`
- `IAssemblyDoc.SetComponentState`
- `IAssemblyDoc.SetComponentSuppression`
- `IComponent2.IsSuppressed`
- `IComponent2.SetSuppression2`