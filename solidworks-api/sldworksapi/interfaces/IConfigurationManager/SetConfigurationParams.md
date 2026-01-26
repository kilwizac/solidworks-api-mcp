---
type: method
interface: IConfigurationManager
member: SetConfigurationParams
returns: System.Boolean
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration (see Remarks )
  -
    name: ParamNames
    type: System.Object
    description: Array of the names of the parameters for ConfigName (see Remarks )
  -
    name: ParamValues
    type: System.Object
    description: Array of values for the parameters for ConfigName (see Remarks )
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
  - IConfigurationManager.ISetConfigurationParams
keywords:
  - parameters
  - see
  - also
  - iparameter
  - configurations
  - setconfigurationparams
  - iconfigurationmanager
  - configuration
  - manager
  - params
  - config
  - name
  - string
  - param
  - names
  - object
  - values
  - boolean
---

# IConfigurationManager.SetConfigurationParams

Sets the parameters for this configuration.

## Signature

```csharp
System.Boolean SetConfigurationParams( 
   System.String
ConfigName
,
   ref System.Object
ParamNames
,
   ref System.Object
ParamValues
)
```
## Parameters

- `ConfigName` (System.String): Name of the configuration (see Remarks )
- `ParamNames` (System.Object): Array of the names of the parameters for ConfigName (see Remarks )
- `ParamValues` (System.Object): Array of values for the parameters for ConfigName (see Remarks )

## Return Value

True if the names and values of parameters for the specified configuration are set, false if not

## Remarks

In ConfigName, if you specify the name of a configuration that:
does not exist, this method creates a new configuration with ParamNames and ParamValues.
exists, this method sets that configuration with ParamNames and ParamValues.
You can control these parameters in a part document:
Dimension values. Specify the dimension name in ParamNames for example, D1@Sketch1) and the value in ParamValues (for example, 60.0mm).
Suppression state of features. Specify the feature name in ParamNames (for example, $STATE@Extrude2) and the suppression state in ParamValues (S=Suppressed or R=Resolved).

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
- `IConfigurationManager.ISetConfigurationParams`