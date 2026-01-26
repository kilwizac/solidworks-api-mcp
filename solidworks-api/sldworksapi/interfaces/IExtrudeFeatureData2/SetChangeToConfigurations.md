---
type: method
interface: IExtrudeFeatureData2
member: SetChangeToConfigurations
returns: System.Boolean
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of the names of the configurations to modify
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.ISetChangeToConfigurations
keywords:
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - configurations
  - configuration
  - iconfiguration
  - extrudes
  - setchangetoconfigurations
  - feature
  - data2
  - change
  - config
  - opt
  - int32
  - names
  - object
  - boolean
---

# IExtrudeFeatureData2.SetChangeToConfigurations

Applies changes made to this extrude feature to the specified configurations.

## Signature

```csharp
System.Boolean SetChangeToConfigurations( 
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of the names of the configurations to modify

## Return Value

True if the operation succeeds, false if it fails

## See Also

- `IExtrudeFeatureData2.ISetChangeToConfigurations`