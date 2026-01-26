---
type: method
interface: ISurface
member: IGetClosestPointOn
returns: System.Double
parameters:
  -
    name: X
    type: System.Double
    description: x coordinate of the approximate position on the surface
  -
    name: Y
    type: System.Double
    description: y coordinate of the approximate position on the surface
  -
    name: Z
    type: System.Double
    description: z coordinate of the approximate position on the surface
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.GetClosestPointOn
  - ISurface.GetProjectedPointOn
keywords:
  - igetclosestpointon
  - isurface
  - surface
  - closest
  - point
  - double
---

# ISurface.IGetClosestPointOn

Uses the X,Y,Z input point to determine the closest point on the surface.

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

- `X` (System.Double): x coordinate of the approximate position on the surface
- `Y` (System.Double): y coordinate of the approximate position on the surface
- `Z` (System.Double): z coordinate of the approximate position on the surface

## Return Value

in-process, unmanaged C++: Pointer to an array of 5 doubles containing the (x,y,z) coordinates and the (u,v) parameters of the point on the surface VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## See Also

- `ISurface.GetClosestPointOn`
- `ISurface.GetProjectedPointOn`