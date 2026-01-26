---
type: method
interface: IFace2
member: GetTessTriStripNorms
returns: System.Object
parameters: []
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
  - IFace2.GetTessTriStripSize
  - IFace2.GetTessTriStrips
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
  - gettesstristripnorms
  - face2
  - tess
  - tri
  - strip
  - norms
  - object
---

# IFace2.GetTessTriStripNorms

Gets the normal vector for each of the triangles that make up the shaded picture tessellation for this face.

## Signature

```csharp
System.Object GetTessTriStripNorms()
```
## Parameters

None.

## Return Value

Array that contains the tristrip normals (see Remarks )

## Remarks

The format of the returned data is:
DWORD
NumStrips
DWORD [
VertexPerStrip
]
Float [
Normals
]
where:
NumStrips
= Number of strips on a particular face
VertexPerStrip
= Array containing the number of vertex points on each face strip
Normals
= Array of X,Y,Z normal components for each vertex on each face strip

## See Also

- `IFace2.GetTessNorms`
- `IFace2.GetTessTextures`
- `IFace2.GetTessTriStripEdges`
- `IFace2.GetTessTriStripSize`
- `IFace2.GetTessTriStrips`
- `IFace2.GetTessTriangleCount`
- `IFace2.GetTessTriangles`
- `IFace2.IGetTessNorms`
- `IFace2.IGetTessTextures`
- `IFace2.IGetTessTriStripEdgeSize`
- `IFace2.IGetTessTriStripEdges`
- `IFace2.IGetTessTriStripNorms`
- `IFace2.IGetTessTriStrips`
- `IFace2.IGetTessTriangles`