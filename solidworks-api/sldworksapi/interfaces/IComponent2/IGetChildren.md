---
type: method
interface: IComponent2
member: IGetChildren
returns: Component2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.GetComponentCount
  - IAssemblyDoc.IGetComponents
  - IComponent2.GetParent
  - IConfiguration.GetRootComponent3
  - IConfiguration.IGetRootComponent2
  - IConfigurationManager.ActiveConfiguration
keywords:
  - children
  - components
  - igetchildren
  - icomponent2
  - component2
---

# IComponent2.IGetChildren

Gets all of the children components of this component.

## Signature

```csharp
Component2 IGetChildren()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of IComponent2 objects VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

If this assembly component is a part document, SOLIDWORKS returns NULL. If this assembly component is the root component or a subassembly, then this method returns the child components that belong to the assembly document.
The typical order of calls needed in assembly traversal is:
IConfigurationManager::ActiveConfiguration
(called only once)
IConfiguration::GetRootComponent
(called only once)
IComponent2::GetChildren (called recursively)
COM applications should use to
IComponent2::IGetChildrenCount
to determine the number of component children, which is the size of the array required to IComponent2::IGetChildren. Because IComponent2::IGetChildren returns an array, this code must be used in an in-process DLL.
You must call the IComponent2::GetChildren method recursively because it returns only the immediate (one level) children. It does not get child components of the sub-assemblies. For example, if one of the child components of a component is a sub-assembly that has its own children, those children are not returned by this method. You need to call this method again from that sub-assembly component to get its children.
For a given component, this method returns all of the immediate child components. This includes suppressed, hidden, and lightweight components. Use
IComponent2::Visible
and
IComponent2::GetSuppression
to detect the component states.
Results of an assembly traversal vary based on the configuration currently displayed in your main assembly and based on the configuration referenced by the subassembly component. The list of child components that this method returns can be different depending on which configuration is referenced by the component (see IConfigurationManager::ActiveConfiguration and
IComponent2::ReferencedConfiguration
).
For example, if one configuration of your main assembly contains a suppressed subassembly, IComponent2::GetChildren returns an empty array when you call it from that suppressed subassembly component. As another example, a subassembly document (.sldasm file) can contain several configurations, each of which has varying states of suppression for its child components. When inserted into your main assembly, this subassembly
document can reference any of these configurations. As a result, you might find that the child component suppression states vary based on which configuration is referenced by the subassembly component.
NOTE:
Components might not be returned in the same order from call to call.

## See Also

- `IAssemblyDoc.GetComponentCount`
- `IAssemblyDoc.IGetComponents`
- `IComponent2.GetParent`
- `IConfiguration.GetRootComponent3`
- `IConfiguration.IGetRootComponent2`
- `IConfigurationManager.ActiveConfiguration`