---
type: method
interface: IConfiguration
member: DeleteExplodeStep
returns: System.Boolean
parameters:
  -
    name: ExplodeStepName
    type: System.String
    description: Name of the explode step to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.AddExplodeStep
  - IConfiguration.AddPartExplodeStep
  - IConfiguration.AddRadialExplodeStep
  - IConfiguration.GetExplodeStep
  - IConfiguration.GetNumberOfExplodeSteps
  - IConfiguration.GetPartExplodeStep
  - IConfiguration.IAddExplodeStep
  - IConfiguration.IGetExplodeStep
keywords:
  - deleteexplodestep
  - iconfiguration
  - configuration
  - delete
  - explode
  - step
  - name
  - string
  - boolean
  - iexplodestep
---

# IConfiguration.DeleteExplodeStep

Deletes the specified explode step.

## Signature

```csharp
System.Boolean DeleteExplodeStep( 
   System.String
ExplodeStepName
)
```
## Parameters

- `ExplodeStepName` (System.String): Name of the explode step to delete

## Return Value

True if the explode step was deleted successfully, false if not

## Remarks

This method is valid only for the active configuration.

## Examples

- IExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IExplodeStep)

## See Also

- `IConfiguration.AddExplodeStep`
- `IConfiguration.AddPartExplodeStep`
- `IConfiguration.AddRadialExplodeStep`
- `IConfiguration.GetExplodeStep`
- `IConfiguration.GetNumberOfExplodeSteps`
- `IConfiguration.GetPartExplodeStep`
- `IConfiguration.IAddExplodeStep`
- `IConfiguration.IGetExplodeStep`