---
type: method
interface: IFace2
member: GetTessTriStrips
returns: System.Object
parameters:
  -
    name: NoConversion
    type: System.Boolean
    description: True prohibits conversion to user units from system units, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetTessNorms
  - IFace2.GetTessTextures
  - IFace2.GetTessTriStripEdges
  - IFace2.GetTessTriStripNorms
  - IFace2.GetTessTriStripSize
  - IFace2.GetTessTriangleCount
  - IFace2.GetTessTriangles
  - IFace2.IGetTessNorms
  - IFace2.IGetTessTextures
  - IFace2.IGetTessTriStripEdgeSize
  - IFace2.IGetTessTriStripEdges
  - IFace2.IGetTessTriStripNorms
  - IFace2.IGetTessTriStrips
  - IFace2.IGetTessTriangles
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - faces
  - face
  - iface2
  - gettesstristrips
  - face2
  - tess
  - tri
  - strips
  - no
  - conversion
  - boolean
  - object
---

# IFace2.GetTessTriStrips

Gets the vertices that make up the shaded picture tessellation for this face.

## Signature

```csharp
System.Object GetTessTriStrips( 
   System.Boolean
NoConversion
)
```
## Parameters

- `NoConversion` (System.Boolean): True prohibits conversion to user units from system units, false does not

## Return Value

Array (see Remarks )

## Remarks

These triangles are intended for graphics display purposes and do not represent a tessellation that can be used, for example, by a machining application. If you need the level of accuracy associated with a machining product, traverse the body faces and extract the topology and geometry data to create your own faceting.
This method returns an array of float values in the form of:
[
NumStrips
,
VertexPerStrip
1,
VertexPerStrip
2,...,
VertexPerStripN
,
VertexPoints
1[
VertexPerStrip
1 elements]*3,
VertexPoints
2[
VertexPerStrip
2 elements]*3,...,
VertexPointsN
[
VertexPerStripN
elements]*3]
where:
NumStrips
= number of triangle strips on a particular face.
VertexPerStripN
= number of vertex points for the
N
th triangle strip.
VertexPointsN
= a sub-array of vertices consisting of three float values representing the x,y,z coordinate of the vertex; the sub-array's length is defined by the
VertexPerStripN
element in the array.
Because the values
NumStrips
and the elements of
VertexPerStrip
are long values
packed into single values,
you must
unpack
them before using them.

## See Also

- `IFace2.GetTessNorms`
- `IFace2.GetTessTextures`
- `IFace2.GetTessTriStripEdges`
- `IFace2.GetTessTriStripNorms`
- `IFace2.GetTessTriStripSize`
- `IFace2.GetTessTriangleCount`
- `IFace2.GetTessTriangles`
- `IFace2.IGetTessNorms`
- `IFace2.IGetTessTextures`
- `IFace2.IGetTessTriStripEdgeSize`
- `IFace2.IGetTessTriStripEdges`
- `IFace2.IGetTessTriStripNorms`
- `IFace2.IGetTessTriStrips`
- `IFace2.IGetTessTriangles`