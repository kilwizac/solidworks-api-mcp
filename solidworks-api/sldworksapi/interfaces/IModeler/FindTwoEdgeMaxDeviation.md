---
type: method
interface: IModeler
member: FindTwoEdgeMaxDeviation
returns: System.Double
parameters:
  -
    name: LpEdge1
    type: System.Object
    description: First edge
  -
    name: LpEdge2
    type: System.Object
    description: Second edge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.IFindTwoEdgeMaxDeviation
keywords:
  - distance
  - edges
  - edge
  - see
  - also
  - iedge
  - findtwoedgemaxdeviation
  - imodeler
  - modeler
  - find
  - two
  - max
  - deviation
  - lp
  - edge1
  - object
  - edge2
  - double
---

# IModeler.FindTwoEdgeMaxDeviation

Finds the maximum distance between two edges.

## Signature

```csharp
System.Double FindTwoEdgeMaxDeviation( 
   System.Object
LpEdge1
,
   System.Object
LpEdge2
)
```
## Parameters

- `LpEdge1` (System.Object): First edge
- `LpEdge2` (System.Object): Second edge

## Return Value

Maximum distance between the two edges

## See Also

- `IModeler.IFindTwoEdgeMaxDeviation`