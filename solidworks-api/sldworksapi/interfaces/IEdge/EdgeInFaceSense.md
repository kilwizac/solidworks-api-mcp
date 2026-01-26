---
type: method
interface: IEdge
member: EdgeInFaceSense
returns: System.Boolean
parameters:
  -
    name: Facedisp
    type: System.Object
    description: Face that the edge is on
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.IEdgeInFaceSense2
keywords:
  - edgeinfacesense
  - iedge
  - edge
  - face
  - sense
  - facedisp
  - object
  - boolean
---

# IEdge.EdgeInFaceSense

Checks whether the edge and the loop lying on the specified face have the same direction (sense).

## Signature

```csharp
System.Boolean EdgeInFaceSense( 
   System.Object
Facedisp
)
```
## Parameters

- `Facedisp` (System.Object): Face that the edge is on

## Return Value

True for the same direction, false for the opposite direction

## Remarks

If this edge does not belong to the specified face, then this method can cause unpredictable
results.

## See Also

- `IEdge.IEdgeInFaceSense2`