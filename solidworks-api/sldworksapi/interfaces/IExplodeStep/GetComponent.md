---
type: method
interface: IExplodeStep
member: GetComponent
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of a component in this explode step
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IExplodeStep.GetComponentName
  - IExplodeStep.GetComponents
  - IExplodeStep.GetNumOfComponents
  - IExplodeStep.IGetComponent
keywords:
  - components
  - see
  - also
  - icomponent2
  - explode
  - step
  - getcomponent
  - iexplodestep
  - component
  - index
  - int32
  - object
---

# IExplodeStep.GetComponent

Gets the specified component in this explode step.

## Signature

```csharp
System.Object GetComponent( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of a component in this explode step

## Return Value

Specified component in the explode step

## Remarks

Before calling this method, call
IExplodeStep::GetNumOfComponents
to get a valid value for Index.

## See Also

- `IExplodeStep.GetComponentName`
- `IExplodeStep.GetComponents`
- `IExplodeStep.GetNumOfComponents`
- `IExplodeStep.IGetComponent`