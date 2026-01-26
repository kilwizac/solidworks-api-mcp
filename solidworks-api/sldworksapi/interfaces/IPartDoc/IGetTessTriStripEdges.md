---
type: method
interface: IPartDoc
member: IGetTessTriStripEdges
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - geometry
  - parts
  - ui
related:
  - IPartDoc.GetTessNorms
  - IPartDoc.GetTessTriStripEdges
  - IPartDoc.GetTessTriStripNorms
  - IPartDoc.GetTessTriStripSize
  - IPartDoc.GetTessTriStrips
  - IPartDoc.GetTessTriangleCount
  - IPartDoc.GetTessTriangles
  - IPartDoc.IGetTessNorms
  - IPartDoc.IGetTessTriStripEdgeSize
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
  - igettesstristripedges
  - part
  - doc
  - tess
  - tri
  - strip
  - edges
  - int32
---

# IPartDoc.IGetTessTriStripEdges

Gets the edge ID for each of the edges in the triangles that make up the tessellation for this part.

## Signature

```csharp
System.Int32 IGetTessTriStripEdges()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of longs containing the list of edge IDs for this part document (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The format of the returned data is:
DWORD
FaceCount
DWORD
StripCount
DWORD
EdgeCount
ForEach
Face
DWORD
StripCount
DWORD [
StripLengths
]
ForEach Strip
(where this is an array of edge IDs for each strip from 1 to (VertexPerStrip-1). Element 0 indicates if that a triangle strip exists (value = 1) or a single triangle (value = 0))
Long [
EdgeIds
]
where:
FaceCount
:
Number of faces on the body
StripCount
:
Total number of strips on the body
EdgeCount
:
Total number of vertices
NumStrips
:
Number of strips on a particular face
StripLengths
:
Array containing the number of vertex points on particular face strip
EdgeIds
:
Array of edge IDs for each vertex on the particular face strip
For triangle strips,
EdgeIds
is:
If the strip has n vertices, then there are 2(n 2) + 1 edge tags. The i-th element of the tags array (starting at i = 1) will be the tag of the edge between vertex floor((i 1) / 2) + 1 and vertex floor(i/2) + 2, where floor(x) is the integer portion of x.
For single triangles,
EdgeIds
is:
The i-th element of the tags array (starting at i = 1) will be the tag of the edge between vertex i-1 (if i=1 then i=n) and vertex i.

## See Also

- `IPartDoc.GetTessNorms`
- `IPartDoc.GetTessTriStripEdges`
- `IPartDoc.GetTessTriStripNorms`
- `IPartDoc.GetTessTriStripSize`
- `IPartDoc.GetTessTriStrips`
- `IPartDoc.GetTessTriangleCount`
- `IPartDoc.GetTessTriangles`
- `IPartDoc.IGetTessNorms`
- `IPartDoc.IGetTessTriStripEdgeSize`
- `IPartDoc.IGetTessTriStripNorms`
- `IPartDoc.IGetTessTriStrips`
- `IPartDoc.IGetTessTriangles`
- `ITessellation`