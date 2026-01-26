---
type: method
interface: IMassProperty2
member: SetOverrideOptions
returns: System.Boolean
parameters:
  -
    name: Options
    type: System.Object
    description: IMassPropertyOverrideOptions
  -
    name: Config_option
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of configuration names; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.GetOverrideOptions
keywords:
  - setoverrideoptions
  - imassproperty2
  - mass
  - property2
  - override
  - options
  - object
  - config
  - option
  - int32
  - names
  - boolean
---

# IMassProperty2.SetOverrideOptions

Sets the mass property override options for the selected bodies/components.

## Signature

```csharp
System.Boolean SetOverrideOptions( 
   System.Object
Options
,
   System.Int32
Config_option
,
   System.Object
Config_names
)
```
## Parameters

- `Options` (System.Object): IMassPropertyOverrideOptions
- `Config_option` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration

## Return Value

True if the mass property override options are set successfully, false if not

## Examples

- IMassProperty2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMassProperty2)

## See Also

- `IMassProperty2.GetOverrideOptions`