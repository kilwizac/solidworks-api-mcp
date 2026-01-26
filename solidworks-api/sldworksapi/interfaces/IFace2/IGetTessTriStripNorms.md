---
type: method
interface: IFace2
member: IGetTessTriStripNorms
returns: System.Single
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
  - IFace2.GetTessTriStripNorms
  - IFace2.GetTessTriStripSize
  - IFace2.GetTessTriStrips
  - IFace2.GetTessTriangleCount
  - IFace2.GetTessTriangles
  - IFace2.IGetTessNorms
  - IFace2.IGetTessTextures
  - IFace2.IGetTessTriStripEdgeSize
  - IFace2.IGetTessTriStripEdges
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
  - igettesstristripnorms
  - face2
  - tess
  - tri
  - strip
  - norms
  - single
---

# IFace2.IGetTessTriStripNorms

Gets the normal vector for each of the triangles that make up the shaded picture tessellation for this face.

## Signature

```csharp
System.Single IGetTessTriStripNorms()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of floats (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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
- `IFace2.GetTessTriStripNorms`
- `IFace2.GetTessTriStripSize`
- `IFace2.GetTessTriStrips`
- `IFace2.GetTessTriangleCount`
- `IFace2.GetTessTriangles`
- `IFace2.IGetTessNorms`
- `IFace2.IGetTessTextures`
- `IFace2.IGetTessTriStripEdgeSize`
- `IFace2.IGetTessTriStripEdges`
- `IFace2.IGetTessTriStrips`
- `IFace2.IGetTessTriangles`