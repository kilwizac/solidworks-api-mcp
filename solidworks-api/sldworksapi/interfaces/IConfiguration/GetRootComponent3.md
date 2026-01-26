---
type: method
interface: IConfiguration
member: GetRootComponent3
returns: Component2
parameters:
  -
    name: Resolve
    type: System.Boolean
    description: True to load additional components required by this configuration, false to not
docset: sldworksapi
deprecated: false
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
  - IConfiguration.GetChildren
  - IConfiguration.GetParent
  - IConfiguration.IGetChildren
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - components
  - configurations
  - icomponent2
  - getrootcomponent3
  - iconfiguration
  - configuration
  - root
  - component3
  - resolve
  - boolean
  - component2
  - traverse
  - assembly
  - component
  - feature
  - levels
  - using
  - recursion
  - vba
  - vb
  - net
  - change
  - color
  - specific
  - display
  - state
---

# IConfiguration.GetRootComponent3

Gets the root component for this assembly configuration.

## Signature

```csharp
Component2 GetRootComponent3( 
   System.Boolean
Resolve
)
```
## Parameters

- `Resolve` (System.Boolean): True to load additional components required by this configuration, false to not

## Return Value

IComponent2 , if Resolve is set to true IComponent2 , if Resolve is set to false, and the configuration is active Null or Nothing, if Resolve is set to false and the configuration is not active

## Remarks

Because every assembly has at least one configuration, you can use this method to begin traversing an assembly and its components.
This method returns a component object that is, essentially, a launching point for your assembly traversal. It is useful only for calling
IComponent2::GetChildren
. Most other IComponent2 object functions do not work with this root component object and return null or Nothing or an error condition. You can call
IComponent2::IsRoot
to determine if you have the root component.
An IComponent2 object is based on the currently active configuration; one assembly configuration might suppress the component, while another might display it. Therefore, your traversal of IComponent2 objects might vary if you switch to a different configuration.
The order of calls used in a typical assembly traversal is:
IModelDoc2::GetConfigurationByName
(called only once)
IConfiguration::GetRootComponent3 (called only once)
IComponent2::GetChildren
(called recursively)
From the SOLIDWORKS API, the IConfiguration and IComponent2 objects provide access to all the child components, their transforms, their bodies, as seen in a specific assembly configuration. The component body objects and component transforms can vary based on the configuration; therefore, you should traverse components for each configuration. For example, one assembly configuration might include an assembly-level feature that cuts a hole through each of the components in the assembly.
You can use
IComponent2::GetBody
on each assembly component to get the body of each component with the hole feature that was applied in this configuration. If you switch to a configuration without the assembly-level hole and re-traverse the component objects, then IComponent2::IGetBody returns the body object without the hole feature.
SOLIDWORKS generates an IAssemblyDoc
RegenNotify
event to indicate that a change might have taken place in one of your components. If you receive an IAssemblyDoc RegenNotify event, then you should re-traverse your components to be sure that your information is up-to-date.
If this method is called from the configuration of a part document, SOLIDWORKS returns null or Nothing.
You should use this method of assembly traversal to replace previous calls to the member class.

## Examples

- Traverse Assembly at Component and Feature Levels Using Recursion (VBA) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VB.NET) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VBNET.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (C#) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_CSharp.htm)
- Change Color of Component in Specific Display State (VBA) (Change_Color_of_Component_in_Specific_Display_State_Example_VB.htm)
- Change Color of Component in Specific Display State (VB.NET) (Change_Color_of_Component_in_Specific_Display_State_Example_VBNET.htm)
- Change Color of Component in Specific Display State (C#) (Change_Color_of_Component_in_Specific_Display_State_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.GetComponentCount`
- `IAssemblyDoc.GetComponents`
- `IAssemblyDoc.IGetComponents`
- `IComponent2.GetChildren`
- `IComponent2.GetParent`
- `IComponent2.IGetChildren`
- `IConfiguration.GetChildren`
- `IConfiguration.GetParent`
- `IConfiguration.IGetChildren`