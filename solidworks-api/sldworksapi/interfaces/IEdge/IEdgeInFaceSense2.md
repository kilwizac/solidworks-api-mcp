---
type: method
interface: IEdge
member: IEdgeInFaceSense2
returns: System.Boolean
parameters:
  -
    name: Facedisp
    type: Face2
    description: Pointer to the face that the edge is on
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.EdgeInFaceSense
keywords:
  - iedgeinfacesense2
  - iedge
  - edge
  - face
  - sense2
  - facedisp
  - face2
  - boolean
---

# IEdge.IEdgeInFaceSense2

Checks whether the edge and the loop lying on the specified face have the same direction (sense).

## Signature

```csharp
System.Boolean IEdgeInFaceSense2( 
   Face2
Facedisp
)
```
## Parameters

- `Facedisp` (Face2): Pointer to the face that the edge is on

## Return Value

True for same direction as the loop, false for opposite

## Remarks

If this edge does not belong to the face that is passed as an argument, unpredictable results can occur.

## See Also

- `IEdge.EdgeInFaceSense`