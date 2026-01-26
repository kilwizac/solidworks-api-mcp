---
type: method
interface: IComponent2
member: GetExcludeFromBOM2
returns: System.Object
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of the names of configurations in whose BOMs this component is excluded or included; null or Nothing if Config_opt is set to swInConfigurationOpts_e.swAllConfiguration or swInConfigurationOpts_e.swThisConfiguration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.CompConfigProperties6
  - IComponent2.SetExcludeFromBOM2
keywords:
  - bill
  - materials
  - components
  - see
  - also
  - icomponent2
  - getexcludefrombom2
  - component2
  - exclude
  - bom2
  - config
  - opt
  - int32
  - names
  - object
---

# IComponent2.GetExcludeFromBOM2

Gets whether this component is excluded from the bills of materials (BOMs) in the specified configurations.

## Signature

```csharp
System.Object GetExcludeFromBOM2( 
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of the names of configurations in whose BOMs this component is excluded or included; null or Nothing if Config_opt is set to swInConfigurationOpts_e.swAllConfiguration or swInConfigurationOpts_e.swThisConfiguration

## Return Value

Array of values indicating whether this component is: excluded (true) from - or - included (false) in the BOMs of the specified configurations.

## Remarks

This method is valid only for
table-based bills of materials
; it does not work for Microsoft Excel-based bills of materials.

## See Also

- `IAssemblyDoc.CompConfigProperties6`
- `IComponent2.SetExcludeFromBOM2`