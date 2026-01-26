---
type: method
interface: IMidSurface3
member: IEdgeGetFace
returns: Face2
parameters:
  -
    name: EdgeInDisp
    type: Edge
    description: Midsurface edge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IMidSurface3.EdgeGetFace
keywords:
  - iedgegetface
  - imidsurface3
  - mid
  - surface3
  - edge
  - face
  - disp
  - face2
---

# IMidSurface3.IEdgeGetFace

Gets the body face on which the specified midsurface edge lies.

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

- `IMidSurface3.EdgeGetFace`