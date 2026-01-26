---
type: property
interface: IMassProperty
member: PrincipleMomentsOfInertia
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.GetMomentOfInertia
  - IMassProperty.IGetMomentOfInertia
  - IMassProperty.IGetPrincipleAxesOfInertia
  - IMassProperty.IGetPrincipleMomentsOfInertia
  - IMassProperty.OverrideMomentsOfInertia
  - IMassProperty.PrincipleAxesOfInertia
keywords:
  - principlemomentsofinertia
  - imassproperty
  - mass
  - principle
  - moments
  - inertia
  - object
  - override
  - properties
  - vb
  - net
  - vba
  - multibody
  - assembly
  - component
readonly: true
---

# IMassProperty.PrincipleMomentsOfInertia

Gets the principal moments of inertia for this model.

## Signature

```csharp
System.Object PrincipleMomentsOfInertia {get;}
```
## Parameters

None.

## Return Value

Array of size 3 (see Remarks )

## Remarks

This property returns metric units unless explicitly specified otherwise.
The return value is a 0-based array of doubles:
[
Px, Py, Pz
]

## Examples

- Get and Override Mass Properties (C#) (Get_Mass_Properties_Using_IMassProperty_Example_CSharp.htm)
- Get and Override Mass Properties (VB.NET) (Get_Mass_Properties_Using_IMassProperty_Example_VBNET.htm)
- Get and Override Mass Properties (VBA) (Get_Mass_Properties_using_MassProperty_Object_Example_VB.htm)
- Get Mass Properties of Multibody Assembly Component (C#) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_CSharp.htm)
- Get Mass Properties of Multibody Assembly Component (VB.NET) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VBNET.htm)
- Get Mass Properties of Multibody Assembly Component (VBA) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VB.htm)

## See Also

- `IMassProperty.GetMomentOfInertia`
- `IMassProperty.IGetMomentOfInertia`
- `IMassProperty.IGetPrincipleAxesOfInertia`
- `IMassProperty.IGetPrincipleMomentsOfInertia`
- `IMassProperty.OverrideMomentsOfInertia`
- `IMassProperty.PrincipleAxesOfInertia`