---
type: method
interface: IFace2
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
  - geometry
related:
  - IFace2.GetClosestPointOn
  - IFace2.IGetClosestPointOn
keywords:
  - projection
  - point
  - face
  - points
  - projected
  - getprojectedpointon
  - iface2
  - face2
  - math
  - direction
  - vector
  - vba
---

# IFace2.GetProjectedPointOn

Gets the point where the input point is projected on to this face.

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

Point where the input point is projected on to the face

## Examples

- Get Projected Point (VBA) (Get_Projected_Point_Example_VB.htm)

## See Also

- `IFace2.GetClosestPointOn`
- `IFace2.IGetClosestPointOn`