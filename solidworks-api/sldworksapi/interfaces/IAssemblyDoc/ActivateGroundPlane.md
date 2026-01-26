---
type: method
interface: IAssemblyDoc
member: ActivateGroundPlane
returns: System.Boolean
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configurations in which to activate a ground plane as defined in swInConfigurationOpts_e : swThisConfiguration swAllConfigurations swSpecifyConfiguration
  -
    name: Config_names
    type: System.Object
    description: Array of configurations in which to activate a ground plane; valid only if Config_opt is set to swInConfiguration_e.swSpecifyConfiguration (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.GetActiveGroundPlane
  - IFeatureManager.InsertGroundPlane
keywords:
  - activategroundplane
  - iassemblydoc
  - assembly
  - doc
  - activate
  - ground
  - plane
  - config
  - opt
  - int32
  - names
  - object
  - boolean
  - insert
  - vba
---

# IAssemblyDoc.ActivateGroundPlane

Activates the ground plane for the specified configurations.

## Signature

```csharp
System.Boolean ActivateGroundPlane( 
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configurations in which to activate a ground plane as defined in swInConfigurationOpts_e : swThisConfiguration swAllConfigurations swSpecifyConfiguration
- `Config_names` (System.Object): Array of configurations in which to activate a ground plane; valid only if Config_opt is set to swInConfiguration_e.swSpecifyConfiguration (see Remarks )

## Return Value

True if ground plane successfully activated in the specified configurations, false if not

## Remarks

To populate config_names, use
IModelDoc2::GetConfigurationNames
.
Before calling this method, use
IModelDocExtension::SelectByID2
to select the ground plane to activate in the specified configurations.
Only one ground plane can be active at a given time in each assembly configuration.

## Examples

- Insert and Activate Ground Plane (VBA) (Insert_Ground_Plane_Example_VB.htm)

## See Also

- `IAssemblyDoc.GetActiveGroundPlane`
- `IFeatureManager.InsertGroundPlane`