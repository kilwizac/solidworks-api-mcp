---
type: method
interface: IVertex
member: IsTolerant
returns: System.Boolean
parameters:
  -
    name: Tolerance
    type: System.Double
    description: Vertex tolerance or gap in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.IsTolerant
keywords:
  - tolerance
  - vertex
  - see
  - also
  - ivertex
  - istolerant
  - tolerant
  - double
  - boolean
  - maximum
  - edge
  - gaps
  - vba
  - vb
  - net
---

# IVertex.IsTolerant

Gets whether a vertex is tolerant and its tolerance value.

## Signature

```csharp
System.Boolean IsTolerant( 
   out System.Double
Tolerance
)
```
## Parameters

- `Tolerance` (System.Double): Vertex tolerance or gap in meters

## Return Value

True if tolerant, false if not tolerant

## Remarks

If the tolerance (or gap) between common vertices in a part:
is greater than 1/2 of the session precision (i.e., > 5.0E-9 mm), then each vertex is tolerant, and this method returns true.
is less than or equal to 1/2 of the session precision (i.e., <= 5.0E-9 mm), then each vertex is exact and not tolerant, and this method returns false.
Traverse part body vertices and use this method to find the maximum vertex gap (tolerance) in a part, which can also be found using the
Tools > Check
dialog in the SOLIDWORKS Design user interface.

## Examples

- Get Maximum Edge and Vertex Gaps (VBA) (Get_Maximum_Edge_and_Vertex_Gaps_Example_VB.htm)
- Get Maximum Edge and Vertex Gaps (VB.NET) (Get_Maximum_Edge_and_Vertex_Gaps_Example_VBNET.htm)
- Get Maximum Edge and Vertex Gaps (C#) (Get_Maximum_Edge_and_Vertex_Gaps_Example_CSharp.htm)

## See Also

- `IEdge.IsTolerant`