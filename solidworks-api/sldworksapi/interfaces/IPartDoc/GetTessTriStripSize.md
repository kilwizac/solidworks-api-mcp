---
type: method
interface: IPartDoc
member: GetTessTriStripSize
returns: System.Int32
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
  - IPartDoc.GetTessTriStripNorms
  - IPartDoc.GetTessTriStripTextures
  - IPartDoc.GetTessTriangleCount
  - IPartDoc.GetTessTriangles
  - IPartDoc.IGetTessNorms
  - IPartDoc.IGetTessTriStripEdgeSize
  - IPartDoc.IGetTessTriStripEdges
  - IPartDoc.IGetTessTriStripNorms
  - IPartDoc.IGetTessTriangles
  - ITessellation
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - parts
  - ipartdoc
  - gettesstristripsize
  - part
  - doc
  - tess
  - tri
  - strip
  - size
  - int32
---

# IPartDoc.GetTessTriStripSize

Gets the size of the array floats required to contain the data returned when calling IPartDoc::GetTessTriStrips and IPartDoc::IGetTessTriStrips.

## Signature

```csharp
System.Int32 GetTessTriStripSize()
```
## Parameters

None.

## Return Value

Array of floats returned by IPartDoc::GetTessTriStrips and IPartDoc::IGetTessTriStrips

## Remarks

The number is calculated as ( 3 +
FaceCount
+
StripCount
+ 3 *
VertexCount
).

## See Also

- `IPartDoc.GetTessNorms`
- `IPartDoc.GetTessTriStripEdges`
- `IPartDoc.GetTessTriStripNorms`
- `IPartDoc.GetTessTriStripTextures`
- `IPartDoc.GetTessTriangleCount`
- `IPartDoc.GetTessTriangles`
- `IPartDoc.IGetTessNorms`
- `IPartDoc.IGetTessTriStripEdgeSize`
- `IPartDoc.IGetTessTriStripEdges`
- `IPartDoc.IGetTessTriStripNorms`
- `IPartDoc.IGetTessTriangles`
- `ITessellation`