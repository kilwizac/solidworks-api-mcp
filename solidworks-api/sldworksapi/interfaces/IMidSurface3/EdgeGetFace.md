---
type: method
interface: IMidSurface3
member: EdgeGetFace
returns: System.Object
parameters:
  -
    name: EdgeInDisp
    type: System.Object
    description: Midsurface edge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IMidSurface3.IEdgeGetFace
keywords:
  - edgegetface
  - imidsurface3
  - mid
  - surface3
  - edge
  - face
  - disp
  - object
---

# IMidSurface3.EdgeGetFace

Gets the body face on which the specified midsurface edge lies.

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

This condition occurs when a reference surface extends to meet one of the faces on the original part body. If the edge specified does not lie on one of the original part body faces, then a null is returned.
This edge is not topologically related to the face returned.

## See Also

- `IMidSurface3.IEdgeGetFace`