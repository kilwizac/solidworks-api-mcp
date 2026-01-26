---
type: method
interface: IComponent2
member: GetParent
returns: Component2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.GetComponentCount
  - IAssemblyDoc.GetComponents
  - IComponent2.GetChildren
  - IComponent2.IGetChildren
  - IConfiguration.GetRootComponent3
  - IConfiguration.IGetRootComponent2
  - IConfigurationManager.ActiveConfiguration
keywords:
  - parents
  - components
  - getparent
  - icomponent2
  - component2
  - parent
  - component
  - vba
  - show
  - selected
  - only
---

# IComponent2.GetParent

Gets the parent component.

## Signature

```csharp
Component2 GetParent()
```
## Parameters

None.

## Return Value

Parent component

## Remarks

If the component is the root component or a top-level component, then this method returns NULL.

## Examples

- Get Parent Component (VBA) (Get_Parent_Component_Example_VB.htm)
- Show Selected Components Only (VBA) (Only_Show_Selected_Components_Example_VB.htm)

## See Also

- `IAssemblyDoc.GetComponentCount`
- `IAssemblyDoc.GetComponents`
- `IComponent2.GetChildren`
- `IComponent2.IGetChildren`
- `IConfiguration.GetRootComponent3`
- `IConfiguration.IGetRootComponent2`
- `IConfigurationManager.ActiveConfiguration`