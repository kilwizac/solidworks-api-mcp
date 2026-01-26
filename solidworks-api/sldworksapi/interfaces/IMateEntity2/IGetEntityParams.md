---
type: method
interface: IMateEntity2
member: IGetEntityParams
returns: System.Double
parameters:
  -
    name: NParamsSize
    type: System.Int32
    description: Number of parameters for this mate entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IMateEntity2.EntityParams
keywords:
  - igetentityparams
  - imateentity2
  - mate
  - entity2
  - entity
  - params
  - size
  - int32
  - double
---

# IMateEntity2.IGetEntityParams

Gets the parameters of this mate entity.

## Signature

```csharp
System.Double IGetEntityParams( 
   System.Int32
NParamsSize
)
```
## Parameters

- `NParamsSize` (System.Int32): Number of parameters for this mate entity

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles representing the parameters for this mate entity (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IMateEntity2::GetEntityParamsSize
to get the value for the size of the array.
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

## See Also

- `IMateEntity2.EntityParams`