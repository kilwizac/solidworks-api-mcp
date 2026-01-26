---
type: method
interface: IFace2
member: GetTessNorms
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
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
  - gettessnorms
  - face2
  - tess
  - norms
  - object
---

# IFace2.GetTessNorms

Gets the normal vector for each of the triangles that make up the shaded picture tessellation.

## Signature

```csharp
System.Object GetTessNorms()
```
## Parameters

None.

## Return Value

Array (see Remarks )

## Remarks

The data returned by this method takes the following format:
float x, y, z - First point's unit normal
float x, y, z - Second point's unit normal
float x, y, z - Third point's unit normal
where this data repeats itself for the set of triangles on this IFace2.
The total size of the data is [ 9 x sizeof(float) x (number of triangles) ].

## See Also

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
- `IFace2.IGetTessTriStripNorms`
- `IFace2.IGetTessTriStrips`
- `IFace2.IGetTessTriangles`