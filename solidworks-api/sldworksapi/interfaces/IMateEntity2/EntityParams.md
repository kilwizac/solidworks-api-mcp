---
type: property
interface: IMateEntity2
member: EntityParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IMateEntity2.GetEntityParamsSize
  - IMateEntity2.IGetEntityParams
keywords:
  - entityparams
  - imateentity2
  - mate
  - entity2
  - entity
  - params
  - object
  - edit
  - vba
  - definition
  - mates
  - entities
  - vb
  - net
readonly: true
---

# IMateEntity2.EntityParams

Gets the parameters for this mate entity.

## Signature

```csharp
System.Object EntityParams {get;}
```
## Parameters

None.

## Return Value

Array of doubles representing the mate entity parameters (see Remarks )

## Remarks

The return value is the following array of doubles:
[
pointX, pointY, pointZ, vectorI, vectorJ, vectorK, radius1, radius2
]
where
pointX
is the X location of this mate entity in the assembly model space
pointY
is the Y location of this mate entity in the assembly model space
pointZ
is the Z location of this mate entity in the assembly model space
vectorI
is the i component of the assembly mate vector
vectorJ
is the j component of the assembly mate vector
vectorK
is the k component of the assembly mate vector
radius1
is the value for the first radius
radius2
is the value for the second radius
To define the mate entity, the following information is returned based on the mate type. All coordinate information is given in terms of the assembly coordinate system where the mate resides.
Mate Type
Returned
swMatePoint
pointX, pointY, pointZ
swMateLine
pointX, pointY, pointZ, vectorI, vectorJ, vectorK
where the point is a point on the line and the vector represents the line direction.
swMatePlane
pointX, pointY, pointZ, vectorI, vectorJ, vectorK
where the point is a point on the plane and the vector represents the plane normal.
swMateCylinder
pointX, pointY, pointZ, vectorI, vectorJ, vectorK, radius1
where the point is a point on the cylinder axis and the vector represents the cylinder axis.
swMateCone
pointX, pointY, pointZ, vectorI, vectorJ, vectorK, radius1, radius2
where the point is a point on the cone axis and the vector represents the cone axis.
To get the
IMateEntity2
interface, use
IMate2::MateEntity
.

## Examples

- Edit Mate (VBA) (Edit_Mate_Example_VB.htm)
- Get Mate Definition (VBA) (Get_Mate_Definition_Example_VB.htm)
- Get Mates and Mate Entities (C#) (Get_Mates_and_Mate_Entities_Example_CSharp.htm)
- Get Mates and Mate Entities (VB.NET) (Get_Mates_and_Mate_Entities_Example_VBNET.htm)
- Get Mates and Mate Entities (VBA) (Get_Mates_and_Mate_Entities_Example_VB.htm)

## See Also

- `IMateEntity2.GetEntityParamsSize`
- `IMateEntity2.IGetEntityParams`