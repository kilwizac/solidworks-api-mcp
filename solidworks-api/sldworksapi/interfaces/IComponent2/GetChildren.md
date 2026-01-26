---
type: method
interface: IComponent2
member: GetChildren
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.GetComponentCount
  - IAssemblyDoc.GetComponents
  - IComponent2.GetParent
  - IComponent2.IGetChildren
  - IConfiguration.GetRootComponent3
keywords:
  - children
  - components
  - getchildren
  - icomponent2
  - component2
  - object
  - display
  - dimensions
  - gtols
  - surface
  - finish
  - symbols
  - vba
  - names
  - bodies
  - multibody
  - part
  - transforms
  - assembly
  - make
  - all
  - visible
  - traverse
  - component
  - feature
  - levels
  - using
  - recursion
  - vb
  - net
---

# IComponent2.GetChildren

Gets all of the children components of this component.

## Signature

```csharp
System.Object GetChildren()
```
## Parameters

None.

## Return Value

Array of components

## Remarks

If this assembly component is a part document, SOLIDWORKS returns NULL. If this assembly component is the root component or a subassembly, then this method returns the child components that belong to the assembly document.
The typical order of calls needed in assembly traversal is:
IConfigurationManager::ActiveConfiguration
(called only once)
IConfiguration::GetRootComponent
(called only once)
IComponent2::GetChildren (called recursively)
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

## Examples

- Get Display Dimensions, GTols, and Surface-finish Symbols (VBA) (Get_Display_Dimensions,_Gtols,_and_Surface-Finish_Symbols_Example_VB.htm)
- Get Names of Bodies in Multibody Part (VBA) (Get_Names_of_Bodies_in_MultiBody_Part_Example_VB.htm)
- Get Transforms of Assembly Components (VBA) (Get_Transforms_of_Assembly_Components_Example_VB.htm)
- Make All Assembly Components Visible (VBA) (Make_All_Assembly_Components_Visible_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels (VBA) (Traverse_Assembly_at_Component_and_Feature_Level_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VBA) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VB.NET) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VBNET.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (C#) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.GetComponentCount`
- `IAssemblyDoc.GetComponents`
- `IComponent2.GetParent`
- `IComponent2.IGetChildren`
- `IConfiguration.GetRootComponent3`