---
type: method
interface: IFace2
member: GetTessTriStripTextures
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
  - IFace2.GetTessTriStripNorms
  - IFace2.GetTessTriStripSize
  - IFace2.GetTessTriStrips
  - IFace2.GetTessTriangleCount
  - IFace2.GetTessTriangles
  - IPartDoc.GetTessTriStripTextures
keywords:
  - gettesstristriptextures
  - iface2
  - face2
  - tess
  - tri
  - strip
  - textures
  - object
---

# IFace2.GetTessTriStripTextures

Gets the texture coordinate components for each vertex on each triangle strip on this face.

## Signature

```csharp
System.Object GetTessTriStripTextures()
```
## Parameters

None.

## Return Value

Array containing the triangle strip texture coordinate components (see Remarks )

## Remarks

Before calling this method, call
IFace2::HasTextureCoordinates
.
The format of the returned data is:
DWORD
NumStrips
DWORD []
VertexesPerStrip
Double [
]
TextureCoords
where:
NumStrips
= Number of tri strips on this face
VertexPerStrip
= Array containing the number of vertex points on each tri strip
TextureCoords
= Array from 0 to (
VertexPerStrip
- 1) containing the U,V texture coordinate components for each vertex on each tri strip

## See Also

- `IFace2.GetTessNorms`
- `IFace2.GetTessTextures`
- `IFace2.GetTessTriStripEdges`
- `IFace2.GetTessTriStripNorms`
- `IFace2.GetTessTriStripSize`
- `IFace2.GetTessTriStrips`
- `IFace2.GetTessTriangleCount`
- `IFace2.GetTessTriangles`
- `IPartDoc.GetTessTriStripTextures`