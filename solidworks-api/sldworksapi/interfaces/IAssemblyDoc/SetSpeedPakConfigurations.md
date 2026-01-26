---
type: method
interface: IAssemblyDoc
member: SetSpeedPakConfigurations
returns: System.Boolean
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e (see Remarks )
  -
    name: Config_names
    type: System.Object
    description: Array of the names of the configurations in the selected subassemblies to which to apply SpeedPak; valid only if Config_opt = swInConfigurationOpts_e.swSpecifyConfiguration (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.CreateSpeedPak
  - IAssemblyDoc.SetSpeedPakToParent
  - IAssemblyDoc.UpdateSpeedPak
  - IAssemblyDoc.UseSpeedPak
  - IComponent2.IsSpeedPak
keywords:
  - speedpak
  - assemblies
  - see
  - also
  - iassemblydoc
  - components
  - icomponent2
  - setspeedpakconfigurations
  - assembly
  - doc
  - speed
  - pak
  - configurations
  - config
  - opt
  - int32
  - names
  - object
  - boolean
---

# IAssemblyDoc.SetSpeedPakConfigurations

Sets the configurations in the selected subassemblies to which to apply SpeedPak in this assembly.

## Signature

```csharp
System.Boolean SetSpeedPakConfigurations( 
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e (see Remarks )
- `Config_names` (System.Object): Array of the names of the configurations in the selected subassemblies to which to apply SpeedPak; valid only if Config_opt = swInConfigurationOpts_e.swSpecifyConfiguration (see Remarks )

## Return Value

True if the specified configurations in the selected subassemblies are applied SpeedPak, false if not

## Remarks

Valid option for Config_opt is:
swInConfigurationOpts_e.swAllConfiguration,
swInConfigurationOpts_e.swSpecifyConfiguration, or
swInConfigurationOpts_e.swThisConfiguration
If Config_names = swInConfigurationOpts_e.swAllConfiguration or swInConfigurationOpts_e.swThisConfiguration, then pass Nothing or null.

## See Also

- `IAssemblyDoc.CreateSpeedPak`
- `IAssemblyDoc.SetSpeedPakToParent`
- `IAssemblyDoc.UpdateSpeedPak`
- `IAssemblyDoc.UseSpeedPak`
- `IComponent2.IsSpeedPak`