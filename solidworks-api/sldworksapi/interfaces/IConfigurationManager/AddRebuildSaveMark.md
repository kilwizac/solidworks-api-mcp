---
type: method
interface: IConfigurationManager
member: AddRebuildSaveMark
returns: System.Boolean
parameters:
  -
    name: WhichConfigurations
    type: System.Int32
    description: One of the following options in swInConfigurationOpts_e : swAllConfiguration swSpecifyConfiguration swThisConfiguration swSpeedpakConfiguration
  -
    name: ConfigNames
    type: System.Object
    description: Array of configuration names to which to apply the mark; valid only if WhichConfigurations is set to swInConfigurationOpts_e.swSpecifyConfiguration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IConfiguration.AddRebuildSaveMark
  - IConfiguration.NeedsRebuild
  - IConfigurationManager.RemoveMarkForAllConfigurations
  - IModelDoc2.EditRebuild3
  - IModelDocExtension.EditRebuildAll
  - IModelDocExtension.ForceRebuildAll
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - data
  - rebuild
  - configurations
  - models
  - addrebuildsavemark
  - iconfigurationmanager
  - manager
  - add
  - save
  - mark
  - which
  - int32
  - config
  - names
  - object
  - boolean
  - work
  - vba
---

# IConfigurationManager.AddRebuildSaveMark

Adds marks indicating whether the specified configurations need to be rebuilt and their configuration data saved every time the model document is saved.

## Signature

```csharp
System.Boolean AddRebuildSaveMark( 
   System.Int32
WhichConfigurations
,
   System.Object
ConfigNames
)
```
## Parameters

- `WhichConfigurations` (System.Int32): One of the following options in swInConfigurationOpts_e : swAllConfiguration swSpecifyConfiguration swThisConfiguration swSpeedpakConfiguration
- `ConfigNames` (System.Object): Array of configuration names to which to apply the mark; valid only if WhichConfigurations is set to swInConfigurationOpts_e.swSpecifyConfiguration

## Return Value

True if configurations marked successfully, false if not

## Examples

- Work With Configurations (VBA) (Work_with_Configurations_Example_VB.htm)

## See Also

- `IConfiguration.AddRebuildSaveMark`
- `IConfiguration.NeedsRebuild`
- `IConfigurationManager.RemoveMarkForAllConfigurations`
- `IModelDoc2.EditRebuild3`
- `IModelDocExtension.EditRebuildAll`
- `IModelDocExtension.ForceRebuildAll`