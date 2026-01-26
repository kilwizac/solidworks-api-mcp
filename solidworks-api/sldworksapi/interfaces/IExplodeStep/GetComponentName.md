---
type: method
interface: IExplodeStep
member: GetComponentName
returns: System.String
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
  - IExplodeStep.GetComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - explode
  - step
  - getcomponentname
  - iexplodestep
  - component
  - name
  - index
  - int32
  - string
---

# IExplodeStep.GetComponentName

Gets the name of the specified component in this explode step.

## Signature

```csharp
System.String GetComponentName( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the component in this explode step

## Return Value

Name of the component

## Remarks

Before calling this method, call
IExplodeStep::GetNumOfComponents
to get a valid value for Index.

## See Also

- `IExplodeStep.GetComponents`