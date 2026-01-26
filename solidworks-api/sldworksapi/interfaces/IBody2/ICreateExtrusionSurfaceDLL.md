---
type: method
interface: IBody2
member: ICreateExtrusionSurfaceDLL
returns: Surface
parameters:
  -
    name: ProfileCurve
    type: Curve
    description: Pointer to the profile curve
  -
    name: AxisDirection
    type: System.Double
    description: Array of 3 doubles (x,y,z)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - icreateextrusionsurfacedll
  - ibody2
  - body2
  - create
  - extrusion
  - dll
  - profile
  - curve
  - axis
  - direction
  - double
---

# IBody2.ICreateExtrusionSurfaceDLL

Creates an extruded surface.

## Signature

```csharp
Surface ICreateExtrusionSurfaceDLL( 
   Curve
ProfileCurve
,
   ref System.Double
AxisDirection
)
```
## Parameters

- `ProfileCurve` (Curve): Pointer to the profile curve
- `AxisDirection` (System.Double): Array of 3 doubles (x,y,z)

## Return Value

Pointer to the new surface of extrusion (tabulated cylinder)

## Remarks

Any existing object created by this method is destroyed if you call this method again.