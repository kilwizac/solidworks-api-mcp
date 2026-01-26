---
type: method
interface: IConfiguration
member: IGetExplodeStep
returns: ExplodeStep
parameters:
  -
    name: ExplodeStepIndex
    type: System.Int32
    description: Index number of the explode step in the explode step sequence
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.AddExplodeStep
  - IConfiguration.DeleteExplodeStep
  - IConfiguration.GetExplodeStep
  - IConfiguration.IAddExplodeStep
keywords:
  - igetexplodestep
  - iconfiguration
  - configuration
  - explode
  - step
  - index
  - int32
---

# IConfiguration.IGetExplodeStep

Gets a pointer to the specified explode step in the configuration explode step sequence.

## Signature

```csharp
ExplodeStep IGetExplodeStep( 
   System.Int32
ExplodeStepIndex
)
```
## Parameters

- `ExplodeStepIndex` (System.Int32): Index number of the explode step in the explode step sequence

## Return Value

Pointer to the explode step

## Remarks

Before calling this method, call
IConfiguration::GetNumberOfExplodeSteps
to get the number of explode steps in the sequence.

## See Also

- `IConfiguration.AddExplodeStep`
- `IConfiguration.DeleteExplodeStep`
- `IConfiguration.GetExplodeStep`
- `IConfiguration.IAddExplodeStep`