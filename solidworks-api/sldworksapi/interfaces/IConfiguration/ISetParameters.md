---
type: method
interface: IConfiguration
member: ISetParameters
returns: void
parameters:
  -
    name: NParamCount
    type: System.Int32
    description: Number of parameters
  -
    name: Params
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of the names of the parameters of size NParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: Values
    type: System.String
    description: in-process, unmanaged C++: Pointe to an array of the values for the parameters of size NParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.GetParameterCount
  - IConfiguration.GetParameters
  - IConfiguration.IGetParameters
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
  - isetparameters
  - iconfiguration
  - configuration
  - param
  - count
  - int32
  - params
  - string
  - values
  - void
---

# IConfiguration.ISetParameters

Sets the parameters (suppression state of features, suppression state or visibility of components, dimensions, and so on) for this configuration.

## Signature

```csharp
void ISetParameters( 
   System.Int32
NParamCount
,
   ref System.String
Params
,
   ref System.String
Values
)
```
## Parameters

- `NParamCount` (System.Int32): Number of parameters
- `Params` (System.String): in-process, unmanaged C++: Pointer to an array of the names of the parameters of size NParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Values` (System.String): in-process, unmanaged C++: Pointe to an array of the values for the parameters of size NParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

To get the number of parameters to set for this configuration, call
IConfiguration::GetParameterCount
.
You can control these parameters in a part document:
Dimension values. Specify the dimension name in params for example, D1@Sketch1) and the value in values (for example, 60.0mm).
Suppression state of features. Specify the feature name in params (for example, $STATE@Extrude2) and the suppression state in values (S=suppressed or U=Unsuppressed).

## See Also

- `IConfiguration.GetParameterCount`
- `IConfiguration.GetParameters`
- `IConfiguration.IGetParameters`
- `IConfiguration.SetParameters`
- `IConfigurationManager.GetConfigurationParams`
- `IConfigurationManager.GetConfigurationParamsCount`
- `IConfigurationManager.IGetConfigurationParams`
- `IConfigurationManager.ISetConfigurationParams`
- `IConfigurationManager.SetConfigurationParams`