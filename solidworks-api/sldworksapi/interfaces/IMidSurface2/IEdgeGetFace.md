---
type: method
interface: IMidSurface2
member: IEdgeGetFace
returns: Face2
parameters:
  -
    name: EdgeInDisp
    type: Edge
    description: Midsurface edge
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related:
  - IMidSurface2.EdgeGetFace
keywords:
  - iedgegetface
  - imidsurface2
  - mid
  - surface2
  - edge
  - face
  - disp
  - face2
---

# IMidSurface2.IEdgeGetFace

Obsolete. Superseded by IMidSurface3::IEdgeGetFace.

## Signature

```csharp
Face2 IEdgeGetFace( 
   Edge
EdgeInDisp
)
```
## Parameters

- `EdgeInDisp` (Edge): Midsurface edge

## Return Value

Face on the original solid body

## Remarks

This condition occurs when a reference surface extends to meet one of the faces on the original part body. If the edge specified does not lie on one of the original part body faces, then a NULL is returned.
This edge is not topologically related to the face returned.

## See Also

- `IMidSurface2.EdgeGetFace`