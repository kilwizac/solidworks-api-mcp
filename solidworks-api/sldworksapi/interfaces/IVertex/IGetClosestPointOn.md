---
type: method
interface: IVertex
member: IGetClosestPointOn
returns: System.Double
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
  - IVertex.GetClosestPointOn
keywords:
  - igetclosestpointon
  - ivertex
  - vertex
  - closest
  - point
  - double
---

# IVertex.IGetClosestPointOn

Gets the closest point on the vertex using the X, Y, Z input point.

## Signature

```csharp
System.Double IGetClosestPointOn( 
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

in-process, unmanaged C++: Pointer to an array of five doubles representing the X, Y, Z point on the vertex VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## See Also

- `IVertex.GetClosestPointOn`