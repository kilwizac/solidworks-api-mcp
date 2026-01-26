---
type: method
interface: IConfiguration
member: GetExplodeStep
returns: System.Object
parameters:
  -
    name: ExplodeStepIndex
    type: System.Int32
    description: Index of the explode step in the explode step sequence
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
  - IConfiguration.IGetExplodeStep
keywords:
  - getexplodestep
  - iconfiguration
  - configuration
  - explode
  - step
  - index
  - int32
  - object
  - iexplodestep
---

# IConfiguration.GetExplodeStep

Gets the specified explode step in this configuration's explode step sequence.

## Signature

```csharp
System.Object GetExplodeStep( 
   System.Int32
ExplodeStepIndex
)
```
## Parameters

- `ExplodeStepIndex` (System.Int32): Index of the explode step in the explode step sequence

## Return Value

Explode step

## Remarks

Before calling this method, call
IConfiguration::GetNumberOfExplodeSteps
to get the number of explode steps in the explode step sequence.

## Examples

- IExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IExplodeStep)

## See Also

- `IConfiguration.AddExplodeStep`
- `IConfiguration.AddRadialExplodeStep`
- `IConfiguration.DeleteExplodeStep`
- `IConfiguration.IAddExplodeStep`
- `IConfiguration.IGetExplodeStep`