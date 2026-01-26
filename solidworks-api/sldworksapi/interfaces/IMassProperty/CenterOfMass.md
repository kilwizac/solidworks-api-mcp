---
type: property
interface: IMassProperty
member: CenterOfMass
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.IGetCenterOfMass
  - IMassProperty.ISetAssignedMassProp
  - IMassProperty.Mass
  - IMassProperty.OverrideCenterOfMass
  - IMassProperty.SetAssignedMassProp
keywords:
  - centerofmass
  - imassproperty
  - mass
  - center
  - object
  - insert
  - coordinate
  - vba
  - dimensions
  - mid
  - tolerance
  - override
  - properties
  - vb
  - net
  - multibody
  - assembly
  - component
readonly: true
---

# IMassProperty.CenterOfMass

Gets the center of mass.

## Signature

```csharp
System.Object CenterOfMass {get;}
```
## Parameters

None.

## Return Value

Array containing the center of mass coordinates (see Remarks )

## Remarks

This property returns metric units unless explicitly specified otherwise.
The return value is a 0-based array of doubles:
[
x, y, z
]
.

## Examples

- Insert Coordinate System at Center of Mass (VBA) (Insert_Coordinate_System_at_Center_of_Mass_Example_VB.htm)
- Set Dimensions to Mid-tolerance (VBA) (Set_Dimensions_to_Mid-Tolerance_Example_VB.htm)
- Get and Override Mass Properties (C#) (Get_Mass_Properties_Using_IMassProperty_Example_CSharp.htm)
- Get and Override Mass Properties (VB.NET) (Get_Mass_Properties_Using_IMassProperty_Example_VBNET.htm)
- Get and Override Mass Properties (VBA) (Get_Mass_Properties_using_MassProperty_Object_Example_VB.htm)
- Get Mass Properties of Multibody Assembly Component (C#) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_CSharp.htm)
- Get Mass Properties of Multibody Assembly Component (VB.NET) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VBNET.htm)
- Get Mass Properties of Multibody Assembly Component (VBA) (Get_Mass_Properties_of_Multibody_Assembly_Component_Example_VB.htm)

## See Also

- `IMassProperty.IGetCenterOfMass`
- `IMassProperty.ISetAssignedMassProp`
- `IMassProperty.Mass`
- `IMassProperty.OverrideCenterOfMass`
- `IMassProperty.SetAssignedMassProp`