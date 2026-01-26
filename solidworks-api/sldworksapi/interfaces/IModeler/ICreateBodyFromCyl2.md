---
type: method
interface: IModeler
member: ICreateBodyFromCyl2
returns: Body2
parameters:
  -
    name: CylDimArray
    type: System.Double
    description: Array containing 8 doubles (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.CreateBodiesFromSheets2
  - IModeler.CreateBodyFromBox
  - IModeler.CreateBodyFromCone
  - IModeler.CreateBodyFromFaces2
  - IModeler.CreateBrepBody3
  - IModeler.CreateExtrudedBody
  - IModeler.CreateSweptBody
  - IModeler.CreateWireBody
  - IModeler.ICreateBodiesFromSheets2
  - IModeler.ICreateBodyFromBox2
  - IModeler.ICreateBodyFromCone2
  - IModeler.ICreateBodyFromFaces3
  - IModeler.ICreateBrepBody3
  - IModeler.ICreateWireBody
keywords:
  - temporary
  - bodies
  - see
  - also
  - ibody2
  - cylinder
  - dimensions
  - icreatebodyfromcyl2
  - imodeler
  - modeler
  - create
  - body
  - cyl2
  - cyl
  - dim
  - array
  - double
  - body2
---

# IModeler.ICreateBodyFromCyl2

Creates a temporary body from cylinder dimensions.

## Signature

```csharp
Body2 ICreateBodyFromCyl2( 
   ref System.Double
CylDimArray
)
```
## Parameters

- `CylDimArray` (System.Double): Array containing 8 doubles (see Remarks )

## Return Value

Unknown.

## Remarks

TheCylArray argument is the following array of doubles:
[
cylFaceCenter[3], cylAxis[3], cylRadius, cylHeight
]
where:
cylFaceCenter[3]
XYZ location that represents the center of one of the cylinder faces
cylAxis[3]
XYZ direction; the cylinder is extruded along this vector from the
cylFaceCenter
location for a distance of
cylHeight
cylRadius
Cylinder radius
cylHeight
Length to extrude along the
cylAxis
direction; if
cylHeight
is 0, then a sheet body is created of dimension
cylRadius
and whose normal is defined by
cylAxis

## See Also

- `IModeler.CreateBodiesFromSheets2`
- `IModeler.CreateBodyFromBox`
- `IModeler.CreateBodyFromCone`
- `IModeler.CreateBodyFromFaces2`
- `IModeler.CreateBrepBody3`
- `IModeler.CreateExtrudedBody`
- `IModeler.CreateSweptBody`
- `IModeler.CreateWireBody`
- `IModeler.ICreateBodiesFromSheets2`
- `IModeler.ICreateBodyFromBox2`
- `IModeler.ICreateBodyFromCone2`
- `IModeler.ICreateBodyFromFaces3`
- `IModeler.ICreateBrepBody3`
- `IModeler.ICreateWireBody`