---
type: method
interface: IExplodeStep
member: IGetComponent
returns: Component
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the component in this explode step
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IExplodeStep.GetComponent
  - IExplodeStep.GetComponentName
  - IExplodeStep.GetNumOfComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - explode
  - step
  - igetcomponent
  - iexplodestep
  - component
  - index
  - int32
---

# IExplodeStep.IGetComponent

Gets the specified component in this explode step.

## Signature

```csharp
Component IGetComponent( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the component in this explode step

## Return Value

Specified component in the explode step

## Remarks

Before calling this method, call
IExplodeStep::GetNumOfComponents
to get a valid value for Index.

## See Also

- `IExplodeStep.GetComponent`
- `IExplodeStep.GetComponentName`
- `IExplodeStep.GetNumOfComponents`