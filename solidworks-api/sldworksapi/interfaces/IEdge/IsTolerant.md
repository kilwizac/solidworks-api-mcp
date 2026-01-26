---
type: method
interface: IEdge
member: IsTolerant
returns: System.Boolean
parameters:
  -
    name: Tolerance
    type: System.Double
    description: Edge tolerance or gap in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IVertex.IsTolerant
keywords:
  - tolerance
  - edge
  - see
  - also
  - iedge
  - istolerant
  - tolerant
  - double
  - boolean
  - maximum
  - vertex
  - gaps
  - vba
  - vb
  - net
---

# IEdge.IsTolerant

Gets whether an edge is tolerant and its tolerance value.

## Signature

```csharp
System.Boolean IsTolerant( 
   out System.Double
Tolerance
)
```
## Parameters

- `Tolerance` (System.Double): Edge tolerance or gap in meters

## Return Value

True if tolerant, false if not tolerant

## Remarks

If the tolerance (or gap) between common edges in a part:
is greater than 1/2 of the session precision (i.e., > 5.0E-9 mm), then each edge is tolerant, and this method returns true.
is less than or equal to 1/2 of the session precision (i.e., <= 5.0E-9 mm), then each edge is exact and not tolerant, and this method returns false.
Traverse part body edges and use this method to find the maximum edge gap (tolerance) in a part, which can also be found using the
Tools > Check
dialog in the SOLIDWORKS Design user interface.

## Examples

- Get Maximum Edge and Vertex Gaps (VBA) (Get_Maximum_Edge_and_Vertex_Gaps_Example_VB.htm)
- Get Maximum Edge and Vertex Gaps (VB.NET) (Get_Maximum_Edge_and_Vertex_Gaps_Example_VBNET.htm)
- Get Maximum Edge and Vertex Gaps (C#) (Get_Maximum_Edge_and_Vertex_Gaps_Example_CSharp.htm)

## See Also

- `IVertex.IsTolerant`