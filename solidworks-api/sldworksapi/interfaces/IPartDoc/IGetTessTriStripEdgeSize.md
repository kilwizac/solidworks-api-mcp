---
type: method
interface: IPartDoc
member: IGetTessTriStripEdgeSize
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
  - IPartDoc.GetTessTriStripNorms
  - IPartDoc.GetTessTriStripSize
  - IPartDoc.GetTessTriStrips
  - IPartDoc.GetTessTriangleCount
  - IPartDoc.GetTessTriangles
  - IPartDoc.IGetTessNorms
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
  - igettesstristripedgesize
  - part
  - doc
  - tess
  - tri
  - strip
  - edge
  - size
  - int32
---

# IPartDoc.IGetTessTriStripEdgeSize

Gets the size of the array returned by IPartDoc::GetTessTriStripEdges and IPartDoc::IGetTessTriStripEdges.

## Signature

```csharp
System.Int32 IGetTessTriStripEdgeSize()
```
## Parameters

None.

## Return Value

Size of the array returned by IPartDoc::GetTessTriStripEdges and IPartDoc::IGetTessTriStripEdges

## Remarks

The number is calculated as (3 +
FaceCount
+
StripCount
+
EdgeCount
).

## See Also

- `IPartDoc.GetTessNorms`
- `IPartDoc.GetTessTriStripNorms`
- `IPartDoc.GetTessTriStripSize`
- `IPartDoc.GetTessTriStrips`
- `IPartDoc.GetTessTriangleCount`
- `IPartDoc.GetTessTriangles`
- `IPartDoc.IGetTessNorms`
- `IPartDoc.IGetTessTriStripNorms`
- `IPartDoc.IGetTessTriStrips`
- `IPartDoc.IGetTessTriangles`
- `ITessellation`