---
type: method
interface: IFace2
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
  - IEdge.GetClosestPointOn
  - IEdge.IGetClosestPointOn
  - IFace2.GetProjectedPointOn
  - IFace2.IGetClosestPointOn
  - ISurface.GetClosestPointOn
  - ISurface.IGetClosestPointOn
  - IVertex.GetClosestPointOn
  - IVertex.IGetClosestPointOn
keywords:
  - points
  - closest
  - getclosestpointon
  - iface2
  - face2
  - point
  - double
  - object
  - calculate
  - distance
  - between
  - faces
  - vba
---

# IFace2.GetClosestPointOn

Uses the X,Y,Z input point to determine the closest point on the face.

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

Array of five doubles representing the X,Y,Z point on the face followed by the U, V parameter on the face that is closest to the input point

## Remarks

This method returns only one point, regardless of how many points achieve the minimum distance.

## Examples

- Calculate Closest Distance Between Faces (VBA) (Calculate_Closest_Distance_Between_Faces_Example_VB.htm)

## See Also

- `ICurve.GetClosestPointOn`
- `ICurve.IGetClosestPointOn`
- `IEdge.GetClosestPointOn`
- `IEdge.IGetClosestPointOn`
- `IFace2.GetProjectedPointOn`
- `IFace2.IGetClosestPointOn`
- `ISurface.GetClosestPointOn`
- `ISurface.IGetClosestPointOn`
- `IVertex.GetClosestPointOn`
- `IVertex.IGetClosestPointOn`