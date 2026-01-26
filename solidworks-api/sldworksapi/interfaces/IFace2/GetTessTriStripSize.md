---
type: method
interface: IFace2
member: GetTessTriStripSize
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
  - IFace2.GetTessTriStripEdges
  - IFace2.GetTessTriStripNorms
  - IFace2.GetTessTriangleCount
  - IFace2.GetTessTriangles
  - IFace2.IGetTessNorms
  - IFace2.IGetTessTextures
  - IFace2.IGetTessTriStripEdgeSize
  - IFace2.IGetTessTriStripEdges
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
  - gettesstristripsize
  - face2
  - tess
  - tri
  - strip
  - size
  - int32
---

# IFace2.GetTessTriStripSize

Gets the array size required for IFace2::GetTessTriStrips and IFace2::IGetTessTriStrips.

## Signature

```csharp
System.Int32 GetTessTriStripSize()
```
## Parameters

None.

## Return Value

Array size

## Remarks

The return value from this method is the number of floats returned from IFace2::GetTessTriStrips and IFace2::IGEtTessTriStrips. That number is (1 + NumStrips + 3 * VertexCount).

## See Also

- `IFace2.GetTessNorms`
- `IFace2.GetTessTextures`
- `IFace2.GetTessTriStripEdges`
- `IFace2.GetTessTriStripNorms`
- `IFace2.GetTessTriangleCount`
- `IFace2.GetTessTriangles`
- `IFace2.IGetTessNorms`
- `IFace2.IGetTessTextures`
- `IFace2.IGetTessTriStripEdgeSize`
- `IFace2.IGetTessTriStripEdges`
- `IFace2.IGetTessTriStripNorms`
- `IFace2.IGetTessTriangles`