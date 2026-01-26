---
type: method
interface: IConfiguration
member: GetParameters
returns: void
parameters:
  -
    name: Params
    type: System.Object
    description: Array of the names of the parameters
  -
    name: Values
    type: System.Object
    description: Array of the values of the parameters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.GetParameterCount
  - IConfiguration.IGetParameters
  - IConfiguration.ISetParameters
  - IConfiguration.SetParameters
  - IConfigurationManager.GetConfigurationParams
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
  - getparameters
  - iconfiguration
  - configuration
  - params
  - object
  - values
  - void
---

# IConfiguration.GetParameters

Gets the parameters (suppression state of features, suppression state or visibility of components, dimensions, and so on) for this configuration.

## Signature

```csharp
void GetParameters( 
   out System.Object
Params
,
   out System.Object
Values
)
```
## Parameters

- `Params` (System.Object): Array of the names of the parameters
- `Values` (System.Object): Array of the values of the parameters

## Return Value

Unknown.

## Remarks

The output values may not be accurate if a design table was not added to the model.

## See Also

- `IConfiguration.GetParameterCount`
- `IConfiguration.IGetParameters`
- `IConfiguration.ISetParameters`
- `IConfiguration.SetParameters`
- `IConfigurationManager.GetConfigurationParams`
- `IConfigurationManager.GetConfigurationParamsCount`
- `IConfigurationManager.IGetConfigurationParams`
- `IConfigurationManager.ISetConfigurationParams`
- `IConfigurationManager.SetConfigurationParams`