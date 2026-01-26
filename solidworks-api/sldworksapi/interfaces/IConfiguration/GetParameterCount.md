---
type: method
interface: IConfiguration
member: GetParameterCount
returns: System.Int32
parameters: []
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
  - getparametercount
  - iconfiguration
  - configuration
  - parameter
  - count
  - int32
---

# IConfiguration.GetParameterCount

Gets the number of parameters for this configuration.

## Signature

```csharp
System.Int32 GetParameterCount()
```
## Parameters

None.

## Return Value

Number of parameters

## Remarks

Call this method before calling
IConfiguration::IGetParameters
.

## See Also

- `IConfiguration.GetParameters`
- `IConfiguration.ISetParameters`
- `IConfiguration.SetParameters`
- `IConfigurationManager.GetConfigurationParams`
- `IConfigurationManager.GetConfigurationParamsCount`
- `IConfigurationManager.IGetConfigurationParams`
- `IConfigurationManager.ISetConfigurationParams`
- `IConfigurationManager.SetConfigurationParams`