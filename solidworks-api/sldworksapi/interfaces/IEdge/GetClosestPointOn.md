---
type: method
interface: IEdge
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
  - ICurve.GetClosestPointOn
  - ICurve.IGetClosestPointOn
  - IEdge.IGetClosestPointOn
  - IFace2.GetClosestPointOn
  - IFace2.IGetClosestPointOn
  - ISurface.GetClosestPointOn
  - ISurface.IGetClosestPointOn
  - IVertex.GetClosestPointOn
  - IVertex.IGetClosestPointOn
keywords:
  - points
  - closest
  - getclosestpointon
  - iedge
  - edge
  - point
  - double
  - object
---

# IEdge.GetClosestPointOn

Uses the X,Y,Z input point and returns the closest point on the edge.

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

Array of five doubles (see Remarks )

## Remarks

This method returns only one point, regardless of how many points achieve the minimum distance.
This method returns an array that contains the following values:
[
PointX, PointY, PointZ, UParameter, NotUsed
]
where the point values represent the point on the edge, and
UParameter
is the parameter on the edge that is closest to the input point. Ignore the fifth array element.

## See Also

- `ICurve.GetClosestPointOn`
- `ICurve.IGetClosestPointOn`
- `IEdge.IGetClosestPointOn`
- `IFace2.GetClosestPointOn`
- `IFace2.IGetClosestPointOn`
- `ISurface.GetClosestPointOn`
- `ISurface.IGetClosestPointOn`
- `IVertex.GetClosestPointOn`
- `IVertex.IGetClosestPointOn`