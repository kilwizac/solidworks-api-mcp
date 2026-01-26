---
type: method
interface: IMassProperty
member: AddBodies
returns: System.Boolean
parameters:
  -
    name: BodyListIn
    type: System.Object
    description: Array of bodies in the model
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.IAddBodies
keywords:
  - addbodies
  - imassproperty
  - mass
  - add
  - bodies
  - body
  - list
  - object
  - boolean
  - properties
  - multibody
  - assembly
  - component
  - vb
  - net
  - vba
---

# IMassProperty.AddBodies

Uses only the specified bodies when calculating the mass properties for this model.

## Signature

```csharp
System.Boolean AddBodies( 
   System.Object
BodyListIn
)
```
## Parameters

- `BodyListIn` (System.Object): Array of bodies in the model

## Return Value

True if the specified bodies are used for calculating mass properties , false if not

## Remarks

This method lets you select which solid bodies to use when calculating mass properties, much like a end-user selecting the bodies via the user interface.
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

## Examples

- Get Mass Properties of Multibody Assembly Component (C#) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_CSharp.htm)
- Get Mass Properties of Multibody Assembly Component (VB.NET) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VBNET.htm)
- Get Mass Properties of Multibody Assembly Component (VBA) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VB.htm)

## See Also

- `IMassProperty.IAddBodies`