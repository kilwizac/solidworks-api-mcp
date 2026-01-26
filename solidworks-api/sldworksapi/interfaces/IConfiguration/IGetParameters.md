---
type: method
interface: IConfiguration
member: IGetParameters
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
    description: in-process, unmanaged C++: Pointer to an array of the values of the parameters of size NParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.GetParameters
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
  - igetparameters
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

# IConfiguration.IGetParameters

Gets the parameters (suppression state of features, suppression state or visibility of components, dimensions, and so on) for this configuration.

## Signature

```csharp
void IGetParameters( 
   System.Int32
NParamCount
,
   out System.String
Params
,
   out System.String
Values
)
```
## Parameters

- `NParamCount` (System.Int32): Number of parameters
- `Params` (System.String): in-process, unmanaged C++: Pointer to an array of the names of the parameters of size NParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Values` (System.String): in-process, unmanaged C++: Pointer to an array of the values of the parameters of size NParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Call
IConfiguration::GetParameterCount
before calling this method.
The output values may not be accurate if a design table was not added to the model.

## See Also

- `IConfiguration.GetParameters`
- `IConfiguration.ISetParameters`
- `IConfiguration.SetParameters`
- `IConfigurationManager.GetConfigurationParams`
- `IConfigurationManager.GetConfigurationParamsCount`
- `IConfigurationManager.IGetConfigurationParams`
- `IConfigurationManager.ISetConfigurationParams`
- `IConfigurationManager.SetConfigurationParams`