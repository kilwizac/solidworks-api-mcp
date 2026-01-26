---
type: property
interface: IConfigurationManager
member: ActiveConfiguration
returns: Configuration
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAssemblyDoc.AddComponentConfiguration
  - IConfiguration.GetParameterCount
  - IConfiguration.GetParameters
  - IConfiguration.IGetParameters
  - IConfiguration.ISetParameters
  - IConfiguration.SetParameters
  - IConfigurationManager.AddConfiguration
  - IConfigurationManager.GetConfigurationParams
  - IConfigurationManager.GetConfigurationParamsCount
  - IConfigurationManager.IGetConfigurationParams
  - IConfigurationManager.ISetConfigurationParams
  - IConfigurationManager.SetConfigurationParams
  - IModelDoc2.AddConfiguration3
keywords:
  - activeconfiguration
  - iconfigurationmanager
  - configuration
  - manager
  - active
  - add
  - derived
  - configurations
  - vba
  - dimension
  - values
  - all
  - display
  - dimensions
  - gtols
  - surface
  - finish
  - symbols
  - names
  - bodies
  - multibody
  - part
  - select
  - assembly
  - components
  - lightweight
  - resolved
  - traverse
  - component
  - feature
  - levels
  - using
  - recursion
  - vb
  - net
readonly: true
---

# IConfigurationManager.ActiveConfiguration

Gets the active configuration.

## Signature

```csharp
Configuration ActiveConfiguration {get;}
```
## Parameters

None.

## Return Value

Pointer to the IConfiguration object

## Remarks

If this document is an assembly, then you could use this property to begin your traversal of the assembly components by making a subsequent call to
IConfiguration::GetRootComponent
or
IConfiguration::IGetRootComponent2
.
An
IComponent2
object is based on the currently active configuration; one assembly configuration might suppress the component, while another might display it. Therefore, your traversal of IComponent2 objects might vary if you switch to a different configuration.
You should use this method of assembly traversal to replace previous calls to the Member class.
The order of calls used in a typical assembly traversal is:
IConfigurationManager::ActiveConfiguration (called only once)
IConfiguration::GetRootComponent or IConfiguration::IGetRootComponent2 (called only once)
IComponent2::GetChildren
or
IComponent::IGetChildren
. (called recursively)
From the SOLIDWORKS API, the I
Configuration
and IComponent2 objects provide access to all the child components, their transforms, their bodies, as seen in a specific assembly configuration. The component body objects and component transforms can vary based on the configuration; therefore, you should traverse components for each configuration.
You can use
IComponent2::GetBody
on each assembly component to get the body of each component with the hole feature that was applied in this configuration. If you switch to a configuration without the assembly-level hole and re-traverse the component objects, then IComponent2::IGetBody returns the body object without the hole feature.

## Examples

- Add Derived Configurations (VBA) (Add_Derived_Configurations_Example_VB.htm)
- Get Dimension Values in All Configurations (VBA) (Get_Dimension_Values_in_All_Configurations_Example_VB.htm)
- Get Display Dimensions, GTols, and Surface-finish Symbols (VBA) (Get_Display_Dimensions,_Gtols,_and_Surface-Finish_Symbols_Example_VB.htm)
- Get Names of Bodies in Multibody Part (VBA) (Get_Names_of_Bodies_in_MultiBody_Part_Example_VB.htm)
- Select Bodies (VBA) (Select_Bodies_Example_VB.htm)
- Set All Assembly Components Lightweight or Resolved (VBA) (Set_All_Assembly_Components_Lightweight_or_Resolved_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VBA) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VB.NET) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VBNET.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (C#) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.AddComponentConfiguration`
- `IConfiguration.GetParameterCount`
- `IConfiguration.GetParameters`
- `IConfiguration.IGetParameters`
- `IConfiguration.ISetParameters`
- `IConfiguration.SetParameters`
- `IConfigurationManager.AddConfiguration`
- `IConfigurationManager.GetConfigurationParams`
- `IConfigurationManager.GetConfigurationParamsCount`
- `IConfigurationManager.IGetConfigurationParams`
- `IConfigurationManager.ISetConfigurationParams`
- `IConfigurationManager.SetConfigurationParams`
- `IModelDoc2.AddConfiguration3`