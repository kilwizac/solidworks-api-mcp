---
type: method
interface: IComponent2
member: IsFixed
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.FixComponent
  - IAssemblyDoc.TemporaryFixGroup
  - IAssemblyDoc.TemporaryFixGroupExit
  - IAssemblyDoc.UnfixComponent
keywords:
  - components
  - see
  - also
  - icomponent2
  - fix
  - component
  - isfixed
  - component2
  - fixed
  - boolean
  - name
  - vb
  - net
  - vba
  - state
---

# IComponent2.IsFixed

Gets whether the component is fixed or floating.

## Signature

```csharp
System.Boolean IsFixed()
```
## Parameters

None.

## Return Value

True if this component is fixed, false if it is floating

## Remarks

This method only applies to the top level of components. To get the actual state of sub-assemblies, you must get the
IModelDoc2
object of the subassembly, show the desired configuration, and get the state (fixed or floating) of the lower components.
To determine if a component is fixed or floating, you must begin the traversal from the subassembly document in the appropriate configuration instead of from the root level. At the root level, all of the components in the subassembly are allowed to move.

## Examples

- Get Component by Name (C#) (Get_Component_by_Name_Example_CSharp.htm)
- Get Component by Name (VB.NET) (Get_Component_by_Name_Example_VBNET.htm)
- Get Component by Name (VBA) (Get_Component_by_Name_Example_VB.htm)
- Get Component State (C#) (Get_Component_State_Example_CSharp.htm)
- Get Component State (VB.NET) (Get_Component_State_Example_VBNET.htm)
- Get Component State (VBA) (Get_Component_State_Example_VB.htm)

## See Also

- `IAssemblyDoc.FixComponent`
- `IAssemblyDoc.TemporaryFixGroup`
- `IAssemblyDoc.TemporaryFixGroupExit`
- `IAssemblyDoc.UnfixComponent`