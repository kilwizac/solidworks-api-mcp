---
type: method
interface: IModeler
member: ICreateExtrusionSurface
returns: Surface
parameters:
  -
    name: ProfileCurve
    type: Curve
    description: Profile curve
  -
    name: AxisDirection
    type: System.Double
    description: Array of 3 doubles (x,y,z)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IBody2.CreateExtrusionSurface
  - IBody2.ICreateExtrusionSurface
  - IModeler.CreateBsplineSurface
  - IModeler.CreateConicalSurface2
  - IModeler.CreateCoonsBSurface
  - IModeler.CreateCylindricalSurface2
  - IModeler.CreateExtrusionSurface
  - IModeler.CreateLoftSurface
  - IModeler.CreateOffsetSurface
  - IModeler.CreatePlanarSurface2
  - IModeler.CreateRuledSurface
  - IModeler.CreateSweptSurface
  - IModeler.CreateToroidalSurface
  - IModeler.ICreateBsplineSurface
  - IModeler.ICreateConicalSurface2
  - IModeler.ICreateCylindricalSurface2
  - IModeler.ICreateLoftSurface
  - IModeler.ICreateOffsetSurface
  - IModeler.ICreatePlanarSurface2
  - IModeler.ICreateRuledSurface
  - IModeler.ICreateSphericalSurface2
  - IModeler.ICreateSweptSurface
  - IModeler.ICreateToroidalSurface
keywords:
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - surfaces
  - surface
  - isurface
  - extruded
  - icreateextrusionsurface
  - imodeler
  - modeler
  - create
  - extrusion
  - profile
  - curve
  - axis
  - direction
  - double
---

# IModeler.ICreateExtrusionSurface

Creates an extruded surface.

## Signature

```csharp
Surface ICreateExtrusionSurface( 
   Curve
ProfileCurve
,
   ref System.Double
AxisDirection
)
```
## Parameters

- `ProfileCurve` (Curve): Profile curve
- `AxisDirection` (System.Double): Array of 3 doubles (x,y,z)

## Return Value

Unknown.

## Remarks

You can use this method with:
A set of related functions that construct a body from trimmed surfaces. The profile curve is extruded along the direction vector of axis direction, the new surface being the envelope of the curve. The profile curve must be of type line, circle, or b-spline curve.
Trimming curve creation routines (for example,
ISurface::AddTrimmingLoop2
or
ISurface::IAddTrimmingLoop2
) to construct a trimmed tabulated cylinder.

## See Also

- `IBody2.CreateExtrusionSurface`
- `IBody2.ICreateExtrusionSurface`
- `IModeler.CreateBsplineSurface`
- `IModeler.CreateConicalSurface2`
- `IModeler.CreateCoonsBSurface`
- `IModeler.CreateCylindricalSurface2`
- `IModeler.CreateExtrusionSurface`
- `IModeler.CreateLoftSurface`
- `IModeler.CreateOffsetSurface`
- `IModeler.CreatePlanarSurface2`
- `IModeler.CreateRuledSurface`
- `IModeler.CreateSweptSurface`
- `IModeler.CreateToroidalSurface`
- `IModeler.ICreateBsplineSurface`
- `IModeler.ICreateConicalSurface2`
- `IModeler.ICreateCylindricalSurface2`
- `IModeler.ICreateLoftSurface`
- `IModeler.ICreateOffsetSurface`
- `IModeler.ICreatePlanarSurface2`
- `IModeler.ICreateRuledSurface`
- `IModeler.ICreateSphericalSurface2`
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`