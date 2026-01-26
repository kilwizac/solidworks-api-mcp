---
type: method
interface: IMidSurface2
member: EdgeGetFace
returns: System.Object
parameters:
  -
    name: EdgeInDisp
    type: System.Object
    description: Midsurface edge
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related:
  - IMidSurface2.IEdgeGetFace
keywords:
  - edgegetface
  - imidsurface2
  - mid
  - surface2
  - edge
  - face
  - disp
  - object
---

# IMidSurface2.EdgeGetFace

Obsolete. Superseded by IMidSurface3::EdgeGetFace.

## Signature

```csharp
System.Object EdgeGetFace( 
   System.Object
EdgeInDisp
)
```
## Parameters

- `EdgeInDisp` (System.Object): Midsurface edge

## Return Value

Face on the original solid body

## Remarks

This condition occurs when a reference surface extends to meet one of the faces on the original part body. If the edge specified does not lie on one of the original part body faces, then a NULL is returned.
This edge is not topologically related to the face returned.

## See Also

- `IMidSurface2.IEdgeGetFace`