---
type: method
interface: IConfiguration
member: SetParameters
returns: void
parameters:
  -
    name: Params
    type: System.Object
    description: Array of the names of the parameters
  -
    name: Values
    type: System.Object
    description: Array of the values for the parameters
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
  - setparameters
  - iconfiguration
  - configuration
  - params
  - object
  - values
  - void
---

# IConfiguration.SetParameters

Sets the parameters (suppression state of features, suppression state or visibility of components, dimensions, and so on) for this configuration.

## Signature

```csharp
void SetParameters( 
   ref System.Object
Params
,
   ref System.Object
Values
)
```
## Parameters

- `Params` (System.Object): Array of the names of the parameters
- `Values` (System.Object): Array of the values for the parameters

## Return Value

Unknown.

## Remarks

You can control these parameters in a part document:
Dimension values. Specify the dimension name in Params for example, D1@Sketch1) and the value in Values (for example, 60.0mm).
Suppression state of features. Specify the feature name in Params (for example, $STATE@Extrude2) and the suppression state in Values (S=Suppressed or R=Resolved).

## See Also

- `IConfiguration.GetParameterCount`
- `IConfiguration.GetParameters`
- `IConfiguration.IGetParameters`
- `IConfiguration.ISetParameters`
- `IConfigurationManager.GetConfigurationParams`
- `IConfigurationManager.GetConfigurationParamsCount`
- `IConfigurationManager.IGetConfigurationParams`
- `IConfigurationManager.ISetConfigurationParams`
- `IConfigurationManager.SetConfigurationParams`