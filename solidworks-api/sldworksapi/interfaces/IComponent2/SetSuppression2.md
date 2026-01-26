---
type: method
interface: IComponent2
member: SetSuppression2
returns: System.Int32
parameters:
  -
    name: State
    type: System.Int32
    description: Suppression state of this component as defined in swComponentSuppressionState_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.CompConfigProperties5
  - IAssemblyDoc.LightweightAllResolved
  - IAssemblyDoc.SetComponentSuppression
  - IComponent2.GetSuppression
  - IComponent2.IsHidden
  - IComponent2.IsSuppressed
keywords:
  - components
  - see
  - also
  - icomponent2
  - suppress
  - setsuppression2
  - component2
  - suppression2
  - state
  - int32
  - access
  - assembly
  - all
  - lightweight
  - resolved
  - vba
  - fully
  - vb
  - net
---

# IComponent2.SetSuppression2

Sets the suppression state of this component.

## Signature

```csharp
System.Int32 SetSuppression2( 
   System.Int32
State
)
```
## Parameters

- `State` (System.Int32): Suppression state of this component as defined in swComponentSuppressionState_e

## Return Value

Status as defined in swSuppressionError_e

## Remarks

SOLIDWORKS does not allow suppressing components while a PropertyManager page is open.

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)
- Set All Assembly Components Lightweight or Resolved (VBA) (Set_All_Assembly_Components_Lightweight_or_Resolved_Example_VB.htm)
- Set Fully Resolved Assembly to Lightweight (C#) (Set_Fully_Resolved_Assembly_to_Lightweight_Example_CSharp.htm)
- Set Fully Resolved Assembly to Lightweight (VB.NET) (Set_Fully_Resolved_Assembly_to_Lightweight_Example_VBNET.htm)
- Set Fully Resolved Assembly to Lightweight (VBA) (Set_Fully_Resolved_Assembly_to_Lightweight_Example_VB.htm)

## See Also

- `IAssemblyDoc.CompConfigProperties5`
- `IAssemblyDoc.LightweightAllResolved`
- `IAssemblyDoc.SetComponentSuppression`
- `IComponent2.GetSuppression`
- `IComponent2.IsHidden`
- `IComponent2.IsSuppressed`