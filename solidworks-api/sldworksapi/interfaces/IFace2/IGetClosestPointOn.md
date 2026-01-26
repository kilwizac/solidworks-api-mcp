---
type: method
interface: IFace2
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
  - ICurve.GetClosestPointOn
  - ICurve.IGetClosestPointOn
  - IEdge.GetClosestPointOn
  - IEdge.IGetClosestPointOn
  - IFace2.GetClosestPointOn
  - IFace2.GetProjectedPointOn
  - ISurface.GetClosestPointOn
  - ISurface.IGetClosestPointOn
  - IVertex.GetClosestPointOn
  - IVertex.IGetClosestPointOn
keywords:
  - points
  - closest
  - igetclosestpointon
  - iface2
  - face2
  - point
  - double
---

# IFace2.IGetClosestPointOn

Uses the X,Y,Z input point to determine the closest point on the face.

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

in-process, unmanaged C++: Pointer to an array of five doubles representing the X,Y,Z point on the face followed by the U, V parameter on the face that is closest to the input point VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method returns only one point, regardless of how many points achieve the minimum distance.

## See Also

- `ICurve.GetClosestPointOn`
- `ICurve.IGetClosestPointOn`
- `IEdge.GetClosestPointOn`
- `IEdge.IGetClosestPointOn`
- `IFace2.GetClosestPointOn`
- `IFace2.GetProjectedPointOn`
- `ISurface.GetClosestPointOn`
- `ISurface.IGetClosestPointOn`
- `IVertex.GetClosestPointOn`
- `IVertex.IGetClosestPointOn`