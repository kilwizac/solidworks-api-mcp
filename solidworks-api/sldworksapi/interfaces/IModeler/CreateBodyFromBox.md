---
type: method
interface: IModeler
member: CreateBodyFromBox
returns: System.Object
parameters:
  -
    name: BoxDimArray
    type: System.Object
    description: Array of 9 doubles (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.CreateBodiesFromSheets2
  - IModeler.CreateBodyFromCone
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
  - box
  - dimensions
  - createbodyfrombox
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

# IModeler.CreateBodyFromBox

Obsolete. Superseded by IModeler::CreateBodyFromBox3.

## Signature

```csharp
System.Object CreateBodyFromBox( 
   System.Object
BoxDimArray
)
```
## Parameters

- `BoxDimArray` (System.Object): Array of 9 doubles (see Remarks )

## Return Value

Body

## Remarks

The input parameter is the following array of doubles:
[
boxFaceCenter
[3],
boxAxis
[3],
boxWidth, boxLength
,
boxHeight
]
where:
boxFaceCenter
[3]
XYZ location that represents the center of one of the box faces.
boxAxis
[3]
XYZ direction. The box will be extruded along this vector from the
boxFaceCenter
location
,
a distance of
boxHeight.
boxWidth
Box width. If
boxAxis
is parallel to the Z axis (0,0,1), then this value represents the dimension that is parallel to the X-axis; otherwise, the orientation is not defined.
boxLength
Box length. If
boxAxis
is parallel to the Z axis (0,0,1), then this value represents the dimension that is parallel to the Y axis; otherwise, the orientation is not defined.
boxHeight
Height to extrude along the
boxAxis
direction. If
boxHeight
is 0, a sheet body will be created of dimension
boxWidth
x
boxLength
and whose normal is defined by
boxAxis
.

## Examples

- Create Solid Bodies Using Geometry and Topology (C#) (Create_Solid_Bodies_using_Geometry_and_Topology_APIs_Example_CSharp.htm)
- Create Solid Bodies Using Geometry and Topology (VB.NET) (Create_Solid_Bodies_using_Geometry_and_Topology_APIs_Example_VBNET.htm)
- Create Solid Bodies Using Geometry and Topology (VBA) (Create_Solid_Bodies_using_Geometry_and_Topology_APIs_Example_VB.htm)

## See Also

- `IModeler.CreateBodiesFromSheets2`
- `IModeler.CreateBodyFromCone`
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