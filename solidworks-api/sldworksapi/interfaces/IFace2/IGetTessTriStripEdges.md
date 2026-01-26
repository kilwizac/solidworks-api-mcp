---
type: method
interface: IFace2
member: IGetTessTriStripEdges
returns: System.Int32
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
  - IFace2.GetTessTriStripNorms
  - IFace2.GetTessTriStripSize
  - IFace2.GetTessTriangleCount
  - IFace2.GetTessTriangles
  - IFace2.IGetTessNorms
  - IFace2.IGetTessTextures
  - IFace2.IGetTessTriStripEdgeSize
  - IFace2.IGetTessTriStripNorms
  - IFace2.IGetTessTriangles
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - faces
  - face
  - iface2
  - igettesstristripedges
  - face2
  - tess
  - tri
  - strip
  - edges
  - int32
---

# IFace2.IGetTessTriStripEdges

Gets the edge ID for each of the edges in the triangles that make up the tessellation for this face.

## Signature

```csharp
System.Int32 IGetTessTriStripEdges()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of longs containing the list of edge IDs for this face (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Returns an array of long values that indicate which edges of the given triangle strip represent a face boundary. The array takes the form of:
[
nStrips
,
stripEdgeCount1
,
stripEdgeCount2
,...,
stripVertCountN
,
strip1
[
triStripFlag
,
stripEdgeCount1
elements],
strip2
[
triStripFlag
,
stripEdgeCount2
elements],...,
stripN
[
triStripFlag
,
stripEdgeCountN
elements&cd;
where:
nStrips
= The number of triangle strips on the face.
stripEdgeCountN
= The number of triangle edges for the
N
th triangle strip + 1.
stripN
= A sub-array that consists of the
triStripFlag
and an array of
stripEdgeCountN
edgeId
s.
triStripFlag
= Indicates if the triangle strip is a strip (=1) or if the triangle strip is a triangle (=0).
edgeId
= An identifier with an arbitrary value that represents the edge of the face. Each edge has a unique
edgeId
.
If you have this triangle strip, then you get a
stripVertexCount
of 10 using
IFace2::GetTessTriStrips
or
IFace2::IGetTessTriStrips
.
IFace2::GetTessTriStripEdges
and IFace2::IGetTessTriStripEdges get a
stripEdgeCount
of 18. This means that for each triangle strip
stripEdgeCount
- 1 = 2(
stripVertexCount
- 2) + 1. The first element represents a flag indicating if the current strip is a triangle strip or a simple triangle, 1 or 0, respectively.
If one of the triangle strip edges lies on a face edge, then the value of
stripN
[i] =
edgeId
. If the triangle strip edge does not lie on a face edge, then the value of
stripN
[i] = 0.

## See Also

- `IFace2.GetTessNorms`
- `IFace2.GetTessTextures`
- `IFace2.GetTessTriStripNorms`
- `IFace2.GetTessTriStripSize`
- `IFace2.GetTessTriangleCount`
- `IFace2.GetTessTriangles`
- `IFace2.IGetTessNorms`
- `IFace2.IGetTessTextures`
- `IFace2.IGetTessTriStripEdgeSize`
- `IFace2.IGetTessTriStripNorms`
- `IFace2.IGetTessTriangles`