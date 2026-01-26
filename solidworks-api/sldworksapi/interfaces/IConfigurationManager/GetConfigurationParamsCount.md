---
type: method
interface: IConfigurationManager
member: GetConfigurationParamsCount
returns: System.Int32
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration
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
  - getconfigurationparamscount
  - iconfigurationmanager
  - configuration
  - manager
  - params
  - count
  - config
  - name
  - string
  - int32
---

# IConfigurationManager.GetConfigurationParamsCount

Gets the number of parameters for this configuration.

## Signature

```csharp
System.Int32 GetConfigurationParamsCount( 
   System.String
ConfigName
)
```
## Parameters

- `ConfigName` (System.String): Name of the configuration

## Return Value

Number of parameters in this configuration

## Remarks

Call this method before calling
IConfigurationManager::IGetConfigurationParams
.

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