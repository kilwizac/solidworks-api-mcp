---
type: method
interface: IConfiguration
member: GetNumberOfExplodeSteps
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.AddExplodeStep
  - IConfiguration.AddRadialExplodeStep
  - IConfiguration.DeleteExplodeStep
  - IConfiguration.IAddExplodeStep
keywords:
  - getnumberofexplodesteps
  - iconfiguration
  - configuration
  - number
  - explode
  - steps
  - int32
---

# IConfiguration.GetNumberOfExplodeSteps

Gets the number of explode steps for this configuration.

## Signature

```csharp
System.Int32 GetNumberOfExplodeSteps()
```
## Parameters

None.

## Return Value

Number of explode steps on this configuration

## Remarks

Call this method before calling
IConfiguration::GetExplodeStep
or
IConfiguration::IGetExplodeStep
.

## See Also

- `IConfiguration.AddExplodeStep`
- `IConfiguration.AddRadialExplodeStep`
- `IConfiguration.DeleteExplodeStep`
- `IConfiguration.IAddExplodeStep`