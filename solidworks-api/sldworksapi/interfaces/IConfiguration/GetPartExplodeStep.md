---
type: method
interface: IConfiguration
member: GetPartExplodeStep
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the explode step (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - parts
related:
  - IConfiguration.AddPartExplodeStep
  - IConfiguration.DeleteExplodeStep
  - IConfiguration.GetCurrentPartExplodeViewName
keywords:
  - getpartexplodestep
  - iconfiguration
  - configuration
  - part
  - explode
  - step
  - index
  - int32
  - object
---

# IConfiguration.GetPartExplodeStep

Gets the specified explode step of an explode view of a multibody part.

## Signature

```csharp
System.Object GetPartExplodeStep( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the explode step (see Remarks )

## Return Value

IPartExplodeStep

## Remarks

This method is valid only for the active configuration.
Before calling this method, call
IPartDoc::ShowExploded
to activate the explode view of interest.
To specify Index, call
IConfiguration::GetNumberOfPartExplodeSteps
to get the number of explode steps in the explode view.

## See Also

- `IConfiguration.AddPartExplodeStep`
- `IConfiguration.DeleteExplodeStep`
- `IConfiguration.GetCurrentPartExplodeViewName`