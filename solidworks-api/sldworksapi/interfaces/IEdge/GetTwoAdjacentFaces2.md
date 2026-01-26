---
type: method
interface: IEdge
member: GetTwoAdjacentFaces2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.IGetTwoAdjacentFaces2
  - IVertex.GetAdjacentFaces
  - IVertex.IGetAdjacentFaces
keywords:
  - face
  - see
  - also
  - iface2
  - adjacent
  - faces
  - gettwoadjacentfaces2
  - iedge
  - edge
  - two
  - faces2
  - object
  - angle
  - hole
  - not
  - normal
  - vba
---

# IEdge.GetTwoAdjacentFaces2

Gets the two faces adjacent to an edge.

## Signature

```csharp
System.Object GetTwoAdjacentFaces2()
```
## Parameters

None.

## Return Value

Array containing two adjacent faces

## Remarks

This method is designed to be used with body-related edges, not reference curve or reference sketch edges. This method supports both solid and sheet bodies.
If...
Then the values returned are...
Two valid faces exist
Two faces
Only one valid face exists
One face and NULL

## Examples

- Get Angle of Hole Not Normal to a Face (VBA) (Get_Angle_of_Hole_Not_Normal_to_a_Face_Example_VB.htm)

## See Also

- `IEdge.IGetTwoAdjacentFaces2`
- `IVertex.GetAdjacentFaces`
- `IVertex.IGetAdjacentFaces`