---
type: method
interface: IConfiguration
member: IGetRootComponent2
returns: Component2
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - IAssemblyDoc.GetComponentCount
  - IAssemblyDoc.GetComponents
  - IAssemblyDoc.IGetComponents
  - IComponent2.GetChildren
  - IComponent2.GetParent
  - IComponent2.IGetChildren
  - IComponent2.IGetChildrenCount
  - IConfiguration.GetChildren
  - IConfiguration.GetChildrenCount
  - IConfiguration.GetParent
  - IConfiguration.IGetChildren
keywords:
  - igetrootcomponent2
  - iconfiguration
  - configuration
  - root
  - component2
---

# IConfiguration.IGetRootComponent2

Obsolete. Superseded by IConfiguration::GetRootComponent3.

## Signature

```csharp
Component2 IGetRootComponent2()
```
## Parameters

None.

## Return Value

Pointer to the root component, an IComponent2 object

## Remarks

Because every assembly has at least one configuration, you can use this method to begin traversing an assembly and its components.
This method returns a component object that is, essentially, a launching point for your assembly traversal. It is useful only for calling
IComponent2::IGetChildren
. Most other IComponent2 object functions do not work with this root component object and return NULL or an error condition. You can call
IComponent2::IsRoot
to determine if you have the root component.
An IComponent2 object is based on the currently active configuration; one assembly configuration might suppress the component, while another might display it. Therefore, your traversal of IComponent2 objects might vary if you switch to a different configuration.
The order of calls used in a typical assembly traversal is:
IConfigurationManager::ActiveConfiguration
(called only once)
IConfiguration::IGetRootComponent 2(called only once)
IComponent2::IGetChildren (called recursively)
From the SOLIDWORKS API, the IConfiguration and IComponent2 objects provide access to all the child components, their transforms, their bodies, as seen in a specific assembly configuration. The component body objects and component transforms can vary based on the configuration; therefore, you should traverse components for each configuration. For example, one assembly configuration might include an assembly-level feature that cuts a hole through each of the components in the assembly.
You can use
IComponent2::IGetBody
on each assembly component to get the body of each component with the hole feature that was applied in this configuration. If you switch to a configuration without the assembly-level hole and re-traverse the component objects, then IComponent2::IGetBody returns the body object without the hole feature.
SOLIDWORKS generates an IAssemblyDoc
RegenNotify
event to indicate that a change might have taken place in one of your components. If you receive an IAssemblyDoc RegenNotify event, then you should re-traverse your components to be sure that your information is up-to-date.
If this method is called from the configuration of a part document, SOLIDWORKS returns NULL.
You should use this method of assembly traversal to replace previous calls to the member class.

## See Also

- `IAssemblyDoc.GetComponentCount`
- `IAssemblyDoc.GetComponents`
- `IAssemblyDoc.IGetComponents`
- `IComponent2.GetChildren`
- `IComponent2.GetParent`
- `IComponent2.IGetChildren`
- `IComponent2.IGetChildrenCount`
- `IConfiguration.GetChildren`
- `IConfiguration.GetChildrenCount`
- `IConfiguration.GetParent`
- `IConfiguration.IGetChildren`