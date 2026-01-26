---
type: method
interface: IFace2
member: IGetSilhoutteEdgeCount
returns: System.Int32
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
  - igetsilhoutteedgecount
  - iface2
  - face2
  - silhoutte
  - count
  - root
  - double
  - normal
  - int32
---

# IFace2.IGetSilhoutteEdgeCount

Gets the number of silhouette edges for this face.

## Signature

```csharp
System.Int32 IGetSilhoutteEdgeCount( 
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

Number of silhouette edges

## Remarks

This method calculates the number of edges returned by
IFace2::IGetSilhoutteEdges
for a given vector root point (root) and a vector direction (normal). Call this method before calling IFace2::IGetSilhoutte.

## See Also

- `IFace2.GetSilhoutteEdgesVB`