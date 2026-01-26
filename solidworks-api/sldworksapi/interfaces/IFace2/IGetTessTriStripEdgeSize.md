---
type: method
interface: IFace2
member: IGetTessTriStripEdgeSize
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
  - IFace2.GetTessTriStrips
  - IFace2.GetTessTriangleCount
  - IFace2.GetTessTriangles
  - IFace2.IGetTessNorms
  - IFace2.IGetTessTextures
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
  - igettesstristripedgesize
  - face2
  - tess
  - tri
  - strip
  - edge
  - size
  - int32
---

# IFace2.IGetTessTriStripEdgeSize

Gets the size of the array returned by IFace2::GetTessTriStripEdges and IFace2::IGetTessTriStripEdges.

## Signature

```csharp
System.Int32 IGetTessTriStripEdgeSize()
```
## Parameters

None.

## Return Value

Size of the array

## Remarks

The return value from this method is the number of longs returned from
IFace2::GetTessTriStripEdges
and
IFace2::IGetTessTriStripEdges
, which is (1 + NumStrips + EdgeCount).

## See Also

- `IFace2.GetTessNorms`
- `IFace2.GetTessTextures`
- `IFace2.GetTessTriStripNorms`
- `IFace2.GetTessTriStripSize`
- `IFace2.GetTessTriStrips`
- `IFace2.GetTessTriangleCount`
- `IFace2.GetTessTriangles`
- `IFace2.IGetTessNorms`
- `IFace2.IGetTessTextures`
- `IFace2.IGetTessTriStripNorms`
- `IFace2.IGetTessTriStrips`
- `IFace2.IGetTessTriangles`