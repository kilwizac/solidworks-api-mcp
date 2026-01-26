---
type: method
interface: IBody2
member: CreateExtrusionSurface
returns: System.Object
parameters:
  -
    name: ProfileCurve
    type: System.Object
    description: Profile curve
  -
    name: AxisDirection
    type: System.Object
    description: Array of 3 doubles (x,y,z)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.ICreateExtrusionSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - createextrusionsurface
  - ibody2
  - body2
  - create
  - extrusion
  - profile
  - curve
  - object
  - axis
  - direction
---

# IBody2.CreateExtrusionSurface

Creates a new surface of extrusion (infinitely long tabulated cylinder).

## Signature

```csharp
System.Object CreateExtrusionSurface( 
   System.Object
ProfileCurve
,
   System.Object
AxisDirection
)
```
## Parameters

- `ProfileCurve` (System.Object): Profile curve
- `AxisDirection` (System.Object): Array of 3 doubles (x,y,z)

## Return Value

New surface of extrusion (tabulated cylinder)

## Remarks

You can use this method with:
A set of related functions that construct a body from trimmed surfaces. The profile curve is extruded along the direction vector of axis direction, the new surface being the envelope of the curve. The profile curve must be of type line, circle, or B-spline curve.
Trimming curve creation routines (for example
ISurface::AddTrimmingLoop2
) to construct a trimmed tabulated cylinder.
Any existing object created by this method is destroyed if you call this method again.

## See Also

- `IBody2.ICreateExtrusionSurface`