---
type: method
interface: IModeler
member: CreateBodyFromCone
returns: System.Object
parameters:
  -
    name: ConeDimArray
    type: System.Object
    description: Array containing 9 doubles (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.CreateBodiesFromSheets2
  - IModeler.CreateBodyFromBox
  - IModeler.CreateBodyFromCyl
  - IModeler.CreateBodyFromFaces2
  - IModeler.CreateBrepBody3
  - IModeler.CreateExtrudedBody
  - IModeler.CreateSweptBody
  - IModeler.CreateWireBody
  - IModeler.ICreateBodiesFromSheets2
  - IModeler.ICreateBodyFromBox2
  - IModeler.ICreateBodyFromCone2
  - IModeler.ICreateBodyFromCyl2
  - IModeler.ICreateBodyFromFaces3
  - IModeler.ICreateBrepBody3
  - IModeler.ICreateWireBody
keywords:
  - temporary
  - bodies
  - see
  - also
  - ibody2
  - cone
  - dimensions
  - createbodyfromcone
  - imodeler
  - modeler
  - create
  - body
  - dim
  - array
  - object
  - solid
  - using
  - geometry
  - topology
  - vb
  - net
  - vba
---

# IModeler.CreateBodyFromCone

Creates a temporary body from cone dimensions.

## Signature

```csharp
System.Object CreateBodyFromCone( 
   System.Object
ConeDimArray
)
```
## Parameters

- `ConeDimArray` (System.Object): Array containing 9 doubles (see Remarks )

## Return Value

Body

## Remarks

The ConeArray argument is the following array of doubles:
[
coneFaceCenter[3], coneAxis[3], coneBaseRadius, coneTopRadius, coneHeight
]
where:
coneFaceCenter[3]
XYZ location that represents the center of one of the cone faces
coneAxis[3]
XYZ direction; the cone is extruded along this vector from the
coneFaceCenter
location, a distance of
coneHeight
coneBaseRadius
Cone radius at the
coneFaceCenter
plane
coneTopRadius
Cone radius at
coneHeight
from the
coneFaceCenter
along the axis
coneHeight
Length to extrude along the
coneAxis
direction; if
coneHeight
is 0, then a sheet body is created of dimension
coneBaseRadius
and normal is defined by
coneAxis

## Examples

- Create Solid Bodies Using Geometry and Topology (C#) (Create_Solid_Bodies_using_Geometry_and_Topology_APIs_Example_CSharp.htm)
- Create Solid Bodies Using Geometry and Topology (VB.NET) (Create_Solid_Bodies_using_Geometry_and_Topology_APIs_Example_VBNET.htm)
- Create Solid Bodies Using Geometry and Topology (VBA) (Create_Solid_Bodies_using_Geometry_and_Topology_APIs_Example_VB.htm)

## See Also

- `IModeler.CreateBodiesFromSheets2`
- `IModeler.CreateBodyFromBox`
- `IModeler.CreateBodyFromCyl`
- `IModeler.CreateBodyFromFaces2`
- `IModeler.CreateBrepBody3`
- `IModeler.CreateExtrudedBody`
- `IModeler.CreateSweptBody`
- `IModeler.CreateWireBody`
- `IModeler.ICreateBodiesFromSheets2`
- `IModeler.ICreateBodyFromBox2`
- `IModeler.ICreateBodyFromCone2`
- `IModeler.ICreateBodyFromCyl2`
- `IModeler.ICreateBodyFromFaces3`
- `IModeler.ICreateBrepBody3`
- `IModeler.ICreateWireBody`