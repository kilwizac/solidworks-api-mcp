---
type: method
interface: IPartDoc
member: GetTessTriStripNorms
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.GetTessNorms
  - IPartDoc.GetTessTriStripEdges
  - IPartDoc.GetTessTriStripSize
  - IPartDoc.GetTessTriStripTextures
  - IPartDoc.GetTessTriStrips
  - IPartDoc.GetTessTriangleCount
  - IPartDoc.GetTessTriangles
  - IPartDoc.IGetTessNorms
  - IPartDoc.IGetTessTriStripEdgeSize
  - IPartDoc.IGetTessTriStripEdges
  - IPartDoc.IGetTessTriStripNorms
  - IPartDoc.IGetTessTriStrips
  - IPartDoc.IGetTessTriangles
  - ITessellation
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - parts
  - ipartdoc
  - gettesstristripnorms
  - part
  - doc
  - tess
  - tri
  - strip
  - norms
  - object
---

# IPartDoc.GetTessTriStripNorms

Gets the normal vector for each of the triangles, which make up the shaded picture tessellation for this part.

## Signature

```csharp
System.Object GetTessTriStripNorms()
```
## Parameters

None.

## Return Value

Array containing the tri strip normals (see Remarks )

## Remarks

The format of the returned data is:
DWORD
FaceCount
DWORD
StripCount
DWORD (
VertexCount
) x 3
DWORD
NumStrips
DWORD [
VertexPerStrip
] = array from 0 to (
Numstrips
-1).
Float [
Normals
] = array of X,Y,Z normal components for each strip from 0 to (
VertexPerStrip
-1).
where
FaceCount
= Number of faces on the body.
StripCount
= Total number of strips on the body.
VertexCount
x 3  = Total number of vertices. Multiplied by 3 to cover X, Y, and Z.
NumStrips
= Number of strips on a particular face.
VertexPerStrip
= Array containing the number of vertex points on particular face strip.
NormalComp
= Array of X,Y,Z normal components for each vertex on the particular face strip.

## See Also

- `IPartDoc.GetTessNorms`
- `IPartDoc.GetTessTriStripEdges`
- `IPartDoc.GetTessTriStripSize`
- `IPartDoc.GetTessTriStripTextures`
- `IPartDoc.GetTessTriStrips`
- `IPartDoc.GetTessTriangleCount`
- `IPartDoc.GetTessTriangles`
- `IPartDoc.IGetTessNorms`
- `IPartDoc.IGetTessTriStripEdgeSize`
- `IPartDoc.IGetTessTriStripEdges`
- `IPartDoc.IGetTessTriStripNorms`
- `IPartDoc.IGetTessTriStrips`
- `IPartDoc.IGetTessTriangles`
- `ITessellation`