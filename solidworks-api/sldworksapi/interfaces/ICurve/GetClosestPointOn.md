---
type: method
interface: ICurve
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
related:
  - IEdge.GetClosestPointOn
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
  - icurve
  - curve
  - point
  - double
  - object
---

# ICurve.GetClosestPointOn

Determines the closest point on the curve using the x,y,z input point.

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

Array of 5 doubles (see Remarks )

## Remarks

This method returns only one point, regardless of the number of valid minimum distance points.
The array return contains the following values:
[
PointX, PointY, PointZ, ParamU, NotUsed
]
where:
PointX
,
PointY
,and
PointZ
represent the point on the curve
ParamU
is the parameter on the curve that is closest to the input point
NotUsed
is unused

## See Also

- `IEdge.GetClosestPointOn`
- `IEdge.IGetClosestPointOn`
- `IFace2.GetClosestPointOn`
- `IFace2.IGetClosestPointOn`
- `ISurface.GetClosestPointOn`
- `ISurface.IGetClosestPointOn`
- `IVertex.GetClosestPointOn`
- `IVertex.IGetClosestPointOn`