---
type: method
interface: IFace2
member: GetSilhoutteEdgesVB
returns: System.Object
parameters:
  -
    name: Xroot
    type: System.Double
    description: X component of the root point
  -
    name: Yroot
    type: System.Double
    description: Y component of the root point
  -
    name: Zroot
    type: System.Double
    description: Z component of the root point
  -
    name: Xnormal
    type: System.Double
    description: X component of the direction vector
  -
    name: Ynormal
    type: System.Double
    description: Y component of the direction vector
  -
    name: Znormal
    type: System.Double
    description: Z component of the direction vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.IGetSilhoutteEdgeCount
  - IFace2.IGetSilhoutteEdges
  - IModelDoc2.InsertSplitLineSil
keywords:
  - edge
  - see
  - also
  - iedge
  - silhouette
  - edges
  - getsilhoutteedgesvb
  - iface2
  - face2
  - silhoutte
  - vb
  - xroot
  - double
  - yroot
  - zroot
  - xnormal
  - ynormal
  - znormal
  - object
---

# IFace2.GetSilhoutteEdgesVB

Gets the silhouette edges.

## Signature

```csharp
System.Object GetSilhoutteEdgesVB( 
   System.Double
Xroot
,
   System.Double
Yroot
,
   System.Double
Zroot
,
   System.Double
Xnormal
,
   System.Double
Ynormal
,
   System.Double
Znormal
)
```
## Parameters

- `Xroot` (System.Double): X component of the root point
- `Yroot` (System.Double): Y component of the root point
- `Zroot` (System.Double): Z component of the root point
- `Xnormal` (System.Double): X component of the direction vector
- `Ynormal` (System.Double): Y component of the direction vector
- `Znormal` (System.Double): Z component of the direction vector

## Return Value

Array of edges

## Remarks

The return array has two elements for each edge: the first is the silhouette edge and the second is unused. To iterate through the edges, an application needs to step through every second element.
The returned edges are transient and cannot be selected.

## See Also

- `IFace2.IGetSilhoutteEdgeCount`
- `IFace2.IGetSilhoutteEdges`
- `IModelDoc2.InsertSplitLineSil`