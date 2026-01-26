---
type: method
interface: IEdge
member: IGetTwoAdjacentFaces2
returns: void
parameters:
  -
    name: Face1
    type: Face2
    description: Pointer to the first adjacent face
  -
    name: Face2
    type: Face2
    description: Pointer to the second adjacent face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.GetTwoAdjacentFaces2
  - IVertex.GetAdjacentFaces
  - IVertex.IGetAdjacentFaces
keywords:
  - face
  - see
  - also
  - iface2
  - adjacent
  - faces
  - igettwoadjacentfaces2
  - iedge
  - edge
  - two
  - faces2
  - face1
  - face2
  - void
---

# IEdge.IGetTwoAdjacentFaces2

Gets the two faces adjacent to an edge.

## Signature

```csharp
void IGetTwoAdjacentFaces2( 
   out Face2
Face1
,
   out Face2
Face2
)
```
## Parameters

- `Face1` (Face2): Pointer to the first adjacent face
- `Face2` (Face2): Pointer to the second adjacent face

## Return Value

Unknown.

## Remarks

This method is designed to be used with body-related edges, not reference curve or reference sketch edges. This method supports both solid and sheet bodies.
If...
Then the values returned are...
Two valid faces exist
Two faces
Only one valid face exists
One face and NULL

## See Also

- `IEdge.GetTwoAdjacentFaces2`
- `IVertex.GetAdjacentFaces`
- `IVertex.IGetAdjacentFaces`