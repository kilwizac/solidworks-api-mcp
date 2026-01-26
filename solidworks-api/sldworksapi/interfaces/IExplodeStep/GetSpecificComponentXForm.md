---
type: method
interface: IExplodeStep
member: GetSpecificComponentXForm
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of a component in the selection list
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - transform
  - explode
  - step
  - getspecificcomponentxform
  - iexplodestep
  - specific
  - component
  - form
  - index
  - int32
  - object
---

# IExplodeStep.GetSpecificComponentXForm

Gets the transformation matrix of the specified component in this explode step.

## Signature

```csharp
System.Object GetSpecificComponentXForm( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of a component in the selection list

## Return Value

Transformation matrix array of 16 doubles

## Remarks

Before calling this method, call
IExplodeStep::GetNumOfComponents
to get a valid value for Index.
For regular explode steps, this method works just like
IExplodeStep::GetComponentXform
to get the transformation of the entire explode step. This method also works for radial explode steps by getting the transformation of an individual radial explode component.