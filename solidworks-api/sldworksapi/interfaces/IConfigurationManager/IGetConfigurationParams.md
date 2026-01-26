---
type: method
interface: IConfigurationManager
member: IGetConfigurationParams
returns: System.Boolean
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration
  -
    name: ParamCount
    type: System.Int32
    description: Number of parameters for this configuration
  -
    name: ParamNames
    type: System.String
    description: in-process, unmanaged C++: Pointer to an an array of the names of the parameters for this configuration of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: ParamValues
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of values of the parameters for this configuration of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
  - IConfigurationManager.ISetConfigurationParams
  - IConfigurationManager.SetConfigurationParams
keywords:
  - parameters
  - see
  - also
  - iparameter
  - configurations
  - igetconfigurationparams
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

# IConfigurationManager.IGetConfigurationParams

Gets the parameters for this configuration.

## Signature

```csharp
System.Boolean IGetConfigurationParams( 
   System.String
ConfigName
,
   System.Int32
ParamCount
,
   out System.String
ParamNames
,
   out System.String
ParamValues
)
```
## Parameters

- `ConfigName` (System.String): Name of the configuration
- `ParamCount` (System.Int32): Number of parameters for this configuration
- `ParamNames` (System.String): in-process, unmanaged C++: Pointer to an an array of the names of the parameters for this configuration of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `ParamValues` (System.String): in-process, unmanaged C++: Pointer to an array of values of the parameters for this configuration of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if successful in getting the names and values of the parameters for this configuration, false if unsuccessful

## Remarks

Call
IConfgurationManager::GetConfigurationParamsCount
before calling this method to get the value for ParamCount.
The output values may not be accurate if a design table was not added to the model.

## Examples

- Get Configuration Parameters (C++) (Get_Configuration_Parameters_Example_CPlusPlus_COM.htm)

## See Also

- `IConfiguration.GetParameterCount`
- `IConfiguration.GetParameters`
- `IConfiguration.IGetParameters`
- `IConfiguration.ISetParameters`
- `IConfiguration.SetParameters`
- `IConfigurationManager.ActiveConfiguration`
- `IConfigurationManager.GetConfigurationParams`
- `IConfigurationManager.ISetConfigurationParams`
- `IConfigurationManager.SetConfigurationParams`