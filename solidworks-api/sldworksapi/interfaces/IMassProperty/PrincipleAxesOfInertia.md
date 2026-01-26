---
type: property
interface: IMassProperty
member: PrincipleAxesOfInertia
returns: System.Object
parameters:
  -
    name: Axis
    type: System.Int32
    description: 0 = x axis 1 = y axis 2 = z axis
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
  - IMassProperty.ISetOverridePrincipleAxesOrientation
  - IMassProperty.PrincipleMomentsOfInertia
  - IMassProperty.SetOverridePrincipleAxesOrientation
keywords:
  - principleaxesofinertia
  - imassproperty
  - mass
  - principle
  - axes
  - inertia
  - axis
  - int32
  - object
  - insert
  - coordinate
  - center
  - vba
  - properties
  - multibody
  - assembly
  - component
  - vb
  - net
readonly: true
---

# IMassProperty.PrincipleAxesOfInertia

Gets the principal axes of inertia for this model.

## Signature

```csharp
System.Object PrincipleAxesOfInertia( 
   System.Int32
Axis
) {get;}
```
## Parameters

- `Axis` (System.Int32): 0 = x axis 1 = y axis 2 = z axis

## Return Value

Array of size 3 (see Remarks )

## Remarks

This method returns:
a vector that represents the requested axis.
metric units unless explicitly specified otherwise.
The return value is a 0-based array of doubles:
[
lx, ly, lz
]

## Examples

- Insert Coordinate System at Center of Mass (VBA) (Insert_Coordinate_System_at_Center_of_Mass_Example_VB.htm)
- Get Mass Properties of Multibody Assembly Component (C#) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_CSharp.htm)
- Get Mass Properties of Multibody Assembly Component (VB.NET) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VBNET.htm)
- Get Mass Properties of Multibody Assembly Component (VBA) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VB.htm)

## See Also

- `IMassProperty.GetMomentOfInertia`
- `IMassProperty.IGetMomentOfInertia`
- `IMassProperty.IGetPrincipleAxesOfInertia`
- `IMassProperty.IGetPrincipleMomentsOfInertia`
- `IMassProperty.ISetOverridePrincipleAxesOrientation`
- `IMassProperty.PrincipleMomentsOfInertia`
- `IMassProperty.SetOverridePrincipleAxesOrientation`