---
type: method
interface: IModeler
member: IFindTwoEdgeMaxDeviation
returns: System.Double
parameters:
  -
    name: PEdge1
    type: Edge
    description: First edge
  -
    name: PEdge2
    type: Edge
    description: Second edge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.FindTwoEdgeMaxDeviation
keywords:
  - distance
  - edges
  - edge
  - see
  - also
  - iedge
  - ifindtwoedgemaxdeviation
  - imodeler
  - modeler
  - find
  - two
  - max
  - deviation
  - edge1
  - edge2
  - double
---

# IModeler.IFindTwoEdgeMaxDeviation

Finds the maximum distance between two edges.

## Signature

```csharp
System.Double IFindTwoEdgeMaxDeviation( 
   Edge
PEdge1
,
   Edge
PEdge2
)
```
## Parameters

- `PEdge1` (Edge): First edge
- `PEdge2` (Edge): Second edge

## Return Value

Maximum distance between the two edges

## See Also

- `IModeler.FindTwoEdgeMaxDeviation`