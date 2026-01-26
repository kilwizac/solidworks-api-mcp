---
type: method
interface: IConfigurationManager
member: GetConfigurationParams
returns: System.Boolean
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration
  -
    name: Params
    type: System.Object
    description: Array of the names of the parameters for this configuration
  -
    name: Values
    type: System.Object
    description: Array of values of the parameters for this configuration
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
  - IConfigurationManager.GetConfigurationParamsCount
  - IConfigurationManager.IGetConfigurationParams
  - IConfigurationManager.ISetConfigurationParams
  - IConfigurationManager.SetConfigurationParams
keywords:
  - parameters
  - see
  - also
  - iparameter
  - configurations
  - getconfigurationparams
  - iconfigurationmanager
  - configuration
  - manager
  - params
  - config
  - name
  - string
  - object
  - values
  - boolean
  - extract
  - specific
  - vba
---

# IConfigurationManager.GetConfigurationParams

Gets the parameters for this configuration.

## Signature

```csharp
System.Boolean GetConfigurationParams( 
   System.String
ConfigName
,
   out System.Object
Params
,
   out System.Object
Values
)
```
## Parameters

- `ConfigName` (System.String): Name of the configuration
- `Params` (System.Object): Array of the names of the parameters for this configuration
- `Values` (System.Object): Array of values of the parameters for this configuration

## Return Value

True if successful in getting the names and values of the parameters for this configuration, false if unsuccessful

## Remarks

The output values may not be accurate if a design table was not added to the model.

## Examples

- Extract Configuration-specific Parameters (VBA) (Extract_Configuration-Specific_Parameters_Example_VB.htm)

## See Also

- `IConfiguration.GetParameterCount`
- `IConfiguration.GetParameters`
- `IConfiguration.IGetParameters`
- `IConfiguration.ISetParameters`
- `IConfiguration.SetParameters`
- `IConfigurationManager.ActiveConfiguration`
- `IConfigurationManager.GetConfigurationParamsCount`
- `IConfigurationManager.IGetConfigurationParams`
- `IConfigurationManager.ISetConfigurationParams`
- `IConfigurationManager.SetConfigurationParams`