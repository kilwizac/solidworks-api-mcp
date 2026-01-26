---
type: method
interface: IConfiguration
member: GetNumberOfPartExplodeSteps
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - parts
related:
  - IConfiguration.AddPartExplodeStep
  - IConfiguration.GetCurrentPartExplodeViewName
keywords:
  - getnumberofpartexplodesteps
  - iconfiguration
  - configuration
  - number
  - part
  - explode
  - steps
  - int32
---

# IConfiguration.GetNumberOfPartExplodeSteps

Gets the number of explode steps in the explode view of a multibody part.

## Signature

```csharp
System.Int32 GetNumberOfPartExplodeSteps()
```
## Parameters

None.

## Return Value

Number of explode steps

## Remarks

This method is valid only for the active configuration.
Before calling this method, call
IPartDoc::ShowExploded
to activate the explode view of interest.
Call this method before calling
IConfiguration::GetPartExplodeStep
.

## See Also

- `IConfiguration.AddPartExplodeStep`
- `IConfiguration.GetCurrentPartExplodeViewName`