---
type: method
interface: IMassProperty
member: IAddBodies
returns: System.Boolean
parameters:
  -
    name: NumBodies
    type: System.Int32
    description: Number of bodies in the model
  -
    name: BodyListIn
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of bodies in the model of size NumBodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.AddBodies
keywords:
  - iaddbodies
  - imassproperty
  - mass
  - add
  - bodies
  - num
  - int32
  - body
  - list
  - body2
  - boolean
---

# IMassProperty.IAddBodies

Uses only the specified bodies when calculating the mass properties for this model.

## Signature

```csharp
System.Boolean IAddBodies( 
   System.Int32
NumBodies
,
   ref Body2
BodyListIn
)
```
## Parameters

- `NumBodies` (System.Int32): Number of bodies in the model
- `BodyListIn` (Body2): in-process, unmanaged C++: Pointer to an array of bodies in the model of size NumBodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the specified bodies are used for calculating mass properties, false if not

## Remarks

This method lets you select which solid bodies to use when calculating mass properties, much like a end-user selecting the bodies via the interface.
NOTE:
If a sheet (surface) body is specified, it is ignored and false is returned.
The results of the mass property calculations vary based on whether or not this method is used.
If this method is...
Then...
Called and bodies are specified
These bodies can either be from a subset of the documents body list or from temporary bodies.
NOTE:
Each specified body should either come from the owning document or be a temporary body. If the body does not satisfy either case, then it is not used when calculating the mass properties.
Not called
Mass properties' calculations include all available bodies in the document.
Part
. All of the solid bodies are included in the calculations.
Assembly
. All of the bodies in all of the components are used in the calculations.
If the document from which the MassProperty object came is an assembly, then any body from any of the child components can be used. To obtain the body, call
IComponent2::GetBodies2
. Your application does not need to make a copy of the body or apply a transform to the body.

## See Also

- `IMassProperty.AddBodies`