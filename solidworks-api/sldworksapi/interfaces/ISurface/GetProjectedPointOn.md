---
type: method
interface: ISurface
member: GetProjectedPointOn
returns: MathPoint
parameters:
  -
    name: Point
    type: MathPoint
    description: Point to project
  -
    name: Direction
    type: MathVector
    description: Direction to project the point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.GetClosestPointOn
  - ISurface.IGetClosestPointOn
keywords:
  - getprojectedpointon
  - isurface
  - surface
  - projected
  - point
  - math
  - direction
  - vector
  - vba
---

# ISurface.GetProjectedPointOn

Gets the point where the input point is projected on to this surface.

## Signature

```csharp
MathPoint GetProjectedPointOn( 
   MathPoint
Point
,
   MathVector
Direction
)
```
## Parameters

- `Point` (MathPoint): Point to project
- `Direction` (MathVector): Direction to project the point

## Return Value

Point where the input point is projected onto the surface

## Examples

- Get Projected Point (VBA) (Get_Projected_Point_Example_VB.htm)

## See Also

- `ISurface.GetClosestPointOn`
- `ISurface.IGetClosestPointOn`