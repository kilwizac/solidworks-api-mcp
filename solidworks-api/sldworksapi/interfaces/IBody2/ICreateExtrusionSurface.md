---
type: method
interface: IBody2
member: ICreateExtrusionSurface
returns: Surface
parameters:
  -
    name: ProfileCurve
    type: Curve
    description: ICurve object
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
  - IBody2.CreateExtrusionSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - icreateextrusionsurface
  - ibody2
  - body2
  - create
  - extrusion
  - profile
  - curve
  - axis
  - direction
  - object
  - imported
  - body
  - sketch
---

# IBody2.ICreateExtrusionSurface

Creates a new surface of extrusion (infinitely long tabulated cylinder).

## Signature

```csharp
Surface ICreateExtrusionSurface( 
   Curve
ProfileCurve
,
   System.Object
AxisDirection
)
```
## Parameters

- `ProfileCurve` (Curve): ICurve object
- `AxisDirection` (System.Object): Array of 3 doubles (x,y,z)

## Return Value

ISurface object

## Remarks

You can use this method with:
A set of related functions that construct a body from trimmed surfaces. The profile curve is extruded along the direction vector of axis direction, the new surface being the envelope of the curve. The profile curve must be of type line, circle, or B-spline curve.
Trimming curve creation routines (for example
ISurface::IAddTrimmingLoop2
) to construct a trimmed tabulated cylinder.
Any existing object created by this method is destroyed if you call this method again.

## Examples

- Create Imported Surface Body from Sketch (C#) (Create_Imported_Surface_Body_from_Sketch_Example_CSharp.htm)

## See Also

- `IBody2.CreateExtrusionSurface`