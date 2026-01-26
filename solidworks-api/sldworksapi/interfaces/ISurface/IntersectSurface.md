---
type: method
interface: ISurface
member: IntersectSurface
returns: System.Boolean
parameters:
  -
    name: OtherSurf
    type: System.Object
    description: Intersecting surface
  -
    name: CurveArray
    type: System.Object
    description: Array of curves
  -
    name: BoundsArray
    type: System.Object
    description: Array containing the curve bounds
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.GetIntersectSurfaceCount
  - ISurface.IIntersectSurface
keywords:
  - intersectsurface
  - isurface
  - surface
  - intersect
  - other
  - surf
  - object
  - curve
  - array
  - bounds
  - boolean
  - intersecting
  - faces
  - vba
---

# ISurface.IntersectSurface

Gets a surface-surface intersection.

## Signature

```csharp
System.Boolean IntersectSurface( 
   System.Object
OtherSurf
,
   out System.Object
CurveArray
,
   out System.Object
BoundsArray
)
```
## Parameters

- `OtherSurf` (System.Object): Intersecting surface
- `CurveArray` (System.Object): Array of curves
- `BoundsArray` (System.Object): Array containing the curve bounds

## Return Value

True if successful, false if not

## Examples

- Get Intersecting Faces (VBA) (Get_Intersecting_Faces_Example_VB.htm)

## See Also

- `ISurface.GetIntersectSurfaceCount`
- `ISurface.IIntersectSurface`