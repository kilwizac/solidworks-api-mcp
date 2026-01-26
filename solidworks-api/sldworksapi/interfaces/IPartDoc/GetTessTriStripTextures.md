---
type: method
interface: IPartDoc
member: GetTessTriStripTextures
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
  - IFace2.GetTessTextures
  - IFace2.GetTessTriStripTextures
  - IPartDoc.GetTessNorms
  - IPartDoc.GetTessTriStripEdges
  - IPartDoc.GetTessTriStripNorms
  - IPartDoc.GetTessTriStripSize
  - IPartDoc.GetTessTriStrips
  - IPartDoc.GetTessTriangleCount
  - IPartDoc.GetTessTriangles
keywords:
  - gettesstristriptextures
  - ipartdoc
  - part
  - doc
  - tess
  - tri
  - strip
  - textures
  - object
---

# IPartDoc.GetTessTriStripTextures

Gets the texture coordinate components for each vertex on each triangle strip on each face of this part.

## Signature

```csharp
System.Object GetTessTriStripTextures()
```
## Parameters

None.

## Return Value

Array containing the triangle strip texture coordinate components (see Remarks )

## Remarks

The format of the returned data is:
DWORD
FaceCount
DWORD
StripCount
DWORD
Vertex
Count
DWORD
FaceStripCount
DWORD []
VertexesPerTriStrip
Double []
TextureCoords
where:
FaceCount
:
Number of faces on the body
StripCount
:
Total number of tri strips on the body
VertexCount
:
Total number of vertexes (multiplied by 2 for U and V coordinates)
FaceStripCount
:
Number of tri strips on each face
VertexesPerTriStrip
:
Array from 0 to (
FaceStripCount
- 1 ) containing the number of vertexes on each face tri strip
TextureCoords
:
Array from 0 to (
VertexesPerTriStrip
- 1) containing the U,V texture coordinate components for each vertex on each face tri strip

## See Also

- `IFace2.GetTessTextures`
- `IFace2.GetTessTriStripTextures`
- `IPartDoc.GetTessNorms`
- `IPartDoc.GetTessTriStripEdges`
- `IPartDoc.GetTessTriStripNorms`
- `IPartDoc.GetTessTriStripSize`
- `IPartDoc.GetTessTriStrips`
- `IPartDoc.GetTessTriangleCount`
- `IPartDoc.GetTessTriangles`