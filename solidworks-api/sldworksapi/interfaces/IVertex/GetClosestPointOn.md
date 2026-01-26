---
type: method
interface: IVertex
member: GetClosestPointOn
returns: System.Object
parameters:
  -
    name: X
    type: System.Double
    description: X value of the input point
  -
    name: Y
    type: System.Double
    description: Y value of the input point
  -
    name: Z
    type: System.Double
    description: Z value of the input point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IVertex.IGetClosestPointOn
keywords:
  - getclosestpointon
  - ivertex
  - vertex
  - closest
  - point
  - double
  - object
---

# IVertex.GetClosestPointOn

Gets the closest point on the vertex using the X, Y, Z input point.

## Signature

```csharp
System.Object GetClosestPointOn( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `X` (System.Double): X value of the input point
- `Y` (System.Double): Y value of the input point
- `Z` (System.Double): Z value of the input point

## Return Value

Array of five doubles representing the X, Y, Z point on the vertex

## Remarks

Because a vertex is a point, you should receive the X,Y,Z location for the actual vertex.

## See Also

- `IVertex.IGetClosestPointOn`