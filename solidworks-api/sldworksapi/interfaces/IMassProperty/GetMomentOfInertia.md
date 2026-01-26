---
type: property
interface: IMassProperty
member: GetMomentOfInertia
returns: System.Object
parameters:
  -
    name: WhereTaken
    type: System.Int32
    description: Coordinate system as defined in swMassPropertyMoment_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.IGetMomentOfInertia
  - IMassProperty.IGetPrincipleAxesOfInertia
  - IMassProperty.IGetPrincipleMomentsOfInertia
  - IMassProperty.PrincipleAxesOfInertia
  - IMassProperty.PrincipleMomentsOfInertia
keywords:
  - getmomentofinertia
  - imassproperty
  - mass
  - moment
  - inertia
  - where
  - taken
  - int32
  - object
  - override
  - properties
  - vba
  - vb
  - net
  - multibody
  - assembly
  - component
readonly: null
---

# IMassProperty.GetMomentOfInertia

Gets the moment of inertia at the specified coordinate system for this model.

## Signature

```csharp
System.Object GetMomentOfInertia( 
   System.Int32
WhereTaken
)
```
## Parameters

- `WhereTaken` (System.Int32): Coordinate system as defined in swMassPropertyMoment_e

## Return Value

Array containing the moment of inertia calculations (see Remarks )

## Remarks

This method returns metric units unless explicitly specified otherwise.
The return value is a 0-based array of doubles:
[
Lxx, Lxy, Lxz, Lyx, Lyy, Lyz, Lzx, Lzy, Lzz
]

## Examples

- Get and Override Mass Properties (VBA) (Get_Mass_Properties_using_MassProperty_Object_Example_VB.htm)
- Get and Override Mass Properties (VB.NET) (Get_Mass_Properties_Using_IMassProperty_Example_VBNET.htm)
- Get and Override Mass Properties (C#) (Get_Mass_Properties_Using_IMassProperty_Example_CSharp.htm)
- Get Mass Properties of Multibody Assembly Component (C#) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_CSharp.htm)
- Get Mass Properties of Multibody Assembly Component (VB.NET) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VBNET.htm)
- Get Mass Properties of Multibody Assembly Component (VBA) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VB.htm)

## See Also

- `IMassProperty.IGetMomentOfInertia`
- `IMassProperty.IGetPrincipleAxesOfInertia`
- `IMassProperty.IGetPrincipleMomentsOfInertia`
- `IMassProperty.PrincipleAxesOfInertia`
- `IMassProperty.PrincipleMomentsOfInertia`