---
type: method
interface: IFace2
member: IGetSilhoutteEdges
returns: Edge
parameters:
  -
    name: Root
    type: System.Double
    description: Array of doubles defining the root point
  -
    name: Normal
    type: System.Double
    description: Array of doubles defining the direction vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetSilhoutteEdgesVB
keywords:
  - edge
  - see
  - also
  - iedge
  - silhouette
  - edges
  - igetsilhoutteedges
  - iface2
  - face2
  - silhoutte
  - root
  - double
  - normal
---

# IFace2.IGetSilhoutteEdges

Gets the silhouette edges for this face with the specified root point and in the specified direction.

## Signature

```csharp
Edge IGetSilhoutteEdges( 
   ref System.Double
Root
,
   ref System.Double
Normal
)
```
## Parameters

- `Root` (System.Double): Array of doubles defining the root point
- `Normal` (System.Double): Array of doubles defining the direction vector

## Return Value

in-process, unmanaged C++: Pointer to an array to hold the edge pointers VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

These edges are not added to the face and cannot be found using
IFace2::IGetEdges
. They are created and handed back to the caller as an array of edges packed with edges.
The vector root point (root) and a vector direction (normal) define the orientation for the silhouette edge creation.
The return array has two elements for each edge: the first is the silhouette edge and the second is  not used. To iterate through the edges, an application needs to step through every second element.
Before calling this method, call
IFace2::IGetSilhoutteEdgeCount
to get the size of array required to hold the edges.
The returned edges are transient and cannot be selected.

## See Also

- `IFace2.GetSilhoutteEdgesVB`