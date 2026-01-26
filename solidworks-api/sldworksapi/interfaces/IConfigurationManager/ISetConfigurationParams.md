---
type: method
interface: IConfigurationManager
member: ISetConfigurationParams
returns: System.Boolean
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration
  -
    name: ParamCount
    type: System.Int32
    description: Number of parameters
  -
    name: ParamNames
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of the names of the parameters for this configuration of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: ParamValues
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of values for the parameters for this configuration of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.GetParameterCount
  - IConfiguration.GetParameters
  - IConfiguration.IGetParameters
  - IConfiguration.ISetParameters
  - IConfiguration.SetParameters
  - IConfigurationManager.ActiveConfiguration
  - IConfigurationManager.GetConfigurationParams
  - IConfigurationManager.GetConfigurationParamsCount
  - IConfigurationManager.IGetConfigurationParams
  - IConfigurationManager.SetConfigurationParams
keywords:
  - parameters
  - see
  - also
  - iparameter
  - configurations
  - isetconfigurationparams
  - iconfigurationmanager
  - configuration
  - manager
  - params
  - config
  - name
  - string
  - param
  - count
  - int32
  - names
  - values
  - boolean
---

# IConfigurationManager.ISetConfigurationParams

Sets the parameters for this configuration.

## Signature

```csharp
System.Boolean ISetConfigurationParams( 
   System.String
ConfigName
,
   System.Int32
ParamCount
,
   ref System.String
ParamNames
,
   ref System.String
ParamValues
)
```
## Parameters

- `ConfigName` (System.String): Name of the configuration
- `ParamCount` (System.Int32): Number of parameters
- `ParamNames` (System.String): in-process, unmanaged C++: Pointer to an array of the names of the parameters for this configuration of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `ParamValues` (System.String): in-process, unmanaged C++: Pointer to an array of values for the parameters for this configuration of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the names and values of the parameters for this configuration are set, false if unsuccessful

## See Also

- `IConfiguration.GetParameterCount`
- `IConfiguration.GetParameters`
- `IConfiguration.IGetParameters`
- `IConfiguration.ISetParameters`
- `IConfiguration.SetParameters`
- `IConfigurationManager.ActiveConfiguration`
- `IConfigurationManager.GetConfigurationParams`
- `IConfigurationManager.GetConfigurationParamsCount`
- `IConfigurationManager.IGetConfigurationParams`
- `IConfigurationManager.SetConfigurationParams`