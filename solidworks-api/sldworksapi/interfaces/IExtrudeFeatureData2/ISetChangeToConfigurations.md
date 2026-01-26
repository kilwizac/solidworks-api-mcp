---
type: method
interface: IExtrudeFeatureData2
member: ISetChangeToConfigurations
returns: System.Boolean
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_count
    type: System.Int32
    description: Number of configurations to modify
  -
    name: Config_names
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of the names of the configurations to modify VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.SetChangeToConfigurations
keywords:
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - configurations
  - configuration
  - iconfiguration
  - extrudes
  - isetchangetoconfigurations
  - feature
  - data2
  - change
  - config
  - opt
  - int32
  - count
  - names
  - string
  - boolean
---

# IExtrudeFeatureData2.ISetChangeToConfigurations

Applies changes made to this extrude feature to the specified configurations.

## Signature

```csharp
System.Boolean ISetChangeToConfigurations( 
   System.Int32
Config_opt
,
   System.Int32
Config_count
,
   ref System.String
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations to modify
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of the names of the configurations to modify VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the operation succeeds, false if it fails

## See Also

- `IExtrudeFeatureData2.SetChangeToConfigurations`