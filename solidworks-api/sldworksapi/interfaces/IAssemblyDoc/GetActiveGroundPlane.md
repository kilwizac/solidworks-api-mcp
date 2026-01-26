---
type: method
interface: IAssemblyDoc
member: GetActiveGroundPlane
returns: System.Object
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configurations from which to retrieve active ground planes as defined in swInConfigurationOpts_e : swThisConfiguration swAllConfigurations swSpecifyConfiguration (see Remarks )
  -
    name: Config_names
    type: System.Object
    description: Array of the names of configurations from which to retrieve active ground planes; valid only if Config_opt is set to swInConfiguration_e.swSpecifyConfiguration (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.ActivateGroundPlane
  - IFeatureManager.InsertGroundPlane
keywords:
  - getactivegroundplane
  - iassemblydoc
  - assembly
  - doc
  - active
  - ground
  - plane
  - config
  - opt
  - int32
  - names
  - object
  - insert
  - activate
  - vba
---

# IAssemblyDoc.GetActiveGroundPlane

Gets the active ground plane for the specified configurations.

## Signature

```csharp
System.Object GetActiveGroundPlane( 
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configurations from which to retrieve active ground planes as defined in swInConfigurationOpts_e : swThisConfiguration swAllConfigurations swSpecifyConfiguration (see Remarks )
- `Config_names` (System.Object): Array of the names of configurations from which to retrieve active ground planes; valid only if Config_opt is set to swInConfiguration_e.swSpecifyConfiguration (see Remarks )

## Return Value

Array of ground plane features

## Remarks

If Config_opt is set to swInConfiguration_e...
Then the returned array contains one active ground plane or null for...
swAllConfigurations
Each configuration in the assembly.
swSpecifyConfiguration
Each configuration in Config_names.
swThisConfiguration
The current configuration.
To populate config_names, use
IModelDoc2::GetConfigurationNames
.

## Examples

- Insert and Activate Ground Plane (VBA) (Insert_Ground_Plane_Example_VB.htm)

## See Also

- `IAssemblyDoc.ActivateGroundPlane`
- `IFeatureManager.InsertGroundPlane`