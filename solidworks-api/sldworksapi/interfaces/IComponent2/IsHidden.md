---
type: method
interface: IComponent2
member: IsHidden
returns: System.Boolean
parameters:
  -
    name: ConsiderSuppressed
    type: System.Boolean
    description: Controls whether suppressed components are hidden
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.ISetVisibility
  - IComponent2.IsSuppressed
  - IComponent2.SetSuppression2
  - IComponent2.SetVisibility
  - IComponent2.Visible
keywords:
  - components
  - see
  - also
  - icomponent2
  - hide
  - suppress
  - ishidden
  - component2
  - hidden
  - consider
  - suppressed
  - boolean
  - change
  - material
  - properties
  - vba
  - transforms
  - assembly
  - component
  - state
  - vb
  - net
---

# IComponent2.IsHidden

Gets whether this component is hidden or suppressed.

## Signature

```csharp
System.Boolean IsHidden( 
   System.Boolean
ConsiderSuppressed
)
```
## Parameters

- `ConsiderSuppressed` (System.Boolean): Controls whether suppressed components are hidden

## Return Value

True or false (see Remarks )

## Remarks

The state of this component can vary based on the active configuration.
ConsiderSuppressed
Component
Component
IsHidden
True
Hidden
Unsuppressed
True
True
Hidden
Suppressed
True
True
Shown
Unsuppressed
False
True
Shown
Suppressed
True
False
Hidden
Unsuppressed
True
False
Hidden
Suppressed
True
False
Shown
Unsuppressed
False
False
Shown
Suppressed
False
NOTE:
For
lightweight
components, IsHidden returns True if ConsiderSuppressed is True.

## Examples

- Change Material Properties (VBA) (Change_Material_Properties_Example_VB.htm)
- Get Transforms of Assembly Components (VBA) (Get_Transforms_of_Assembly_Components_Example_VB.htm)
- Get Component State (C#) (Get_Component_State_Example_CSharp.htm)
- Get Component State (VB.NET (Get_Component_State_Example_VBNET.htm)
- Get Component State (VBA) (Get_Component_State_Example_VB.htm)

## See Also

- `IComponent2.ISetVisibility`
- `IComponent2.IsSuppressed`
- `IComponent2.SetSuppression2`
- `IComponent2.SetVisibility`
- `IComponent2.Visible`