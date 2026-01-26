---
type: method
interface: IPartDoc
member: GetTessNorms
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
  - IPartDoc.GetTessTriStripEdges
  - IPartDoc.GetTessTriStripNorms
  - IPartDoc.GetTessTriStripSize
  - IPartDoc.GetTessTriStripTextures
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
  - gettessnorms
  - part
  - doc
  - tess
  - norms
  - object
---

# IPartDoc.GetTessNorms

Gets the normal vector for each of the triangles, which make up the shaded picture tessellation.

## Signature

```csharp
System.Object GetTessNorms()
```
## Parameters

None.

## Return Value

Array of floats (see Remarks )

## Remarks

The total size of the data is:
[
9 x sizeof(float) x (number of triangles)
]
.
The format of the returned data is:
float
x, y, z first point's unit normal
float
x, y, z second point's unit normal
float
x, y, z third point's unit normal
for the set of triangles for the part.

## See Also

- `IPartDoc.GetTessTriStripEdges`
- `IPartDoc.GetTessTriStripNorms`
- `IPartDoc.GetTessTriStripSize`
- `IPartDoc.GetTessTriStripTextures`
- `IPartDoc.GetTessTriangleCount`
- `IPartDoc.GetTessTriangles`
- `IPartDoc.IGetTessNorms`
- `IPartDoc.IGetTessTriStripEdgeSize`
- `IPartDoc.IGetTessTriStripEdges`
- `IPartDoc.IGetTessTriStripNorms`
- `IPartDoc.IGetTessTriStrips`
- `IPartDoc.IGetTessTriangles`
- `ITessellation`