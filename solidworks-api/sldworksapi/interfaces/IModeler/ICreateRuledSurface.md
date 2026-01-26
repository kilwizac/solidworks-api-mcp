---
type: method
interface: IModeler
member: ICreateRuledSurface
returns: Surface
parameters:
  -
    name: Curve1In
    type: Curve
    description: First curve
  -
    name: Curve2In
    type: Curve
    description: Second curve
  -
    name: Apex
    type: System.Double
    description: Array of 3 doubles, (x, y, z), the apex point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateBsplineSurface
  - IModeler.CreateConicalSurface2
  - IModeler.CreateCoonsBSurface
  - IModeler.CreateCylindricalSurface2
  - IModeler.CreateExtrusionSurface
  - IModeler.CreateLoftSurface
  - IModeler.CreateOffsetSurface
  - IModeler.CreatePlanarSurface2
  - IModeler.CreateRuledSurface
  - IModeler.CreateSphericalSurface2
  - IModeler.CreateSweptSurface
  - IModeler.CreateToroidalSurface
  - IModeler.ICreateBsplineSurface
  - IModeler.ICreateConicalSurface2
  - IModeler.ICreateCylindricalSurface2
  - IModeler.ICreateExtrusionSurface
  - IModeler.ICreateLoftSurface
  - IModeler.ICreateOffsetSurface
  - IModeler.ICreatePlanarSurface2
  - IModeler.ICreateSphericalSurface2
  - IModeler.ICreateSweptSurface
  - IModeler.ICreateToroidalSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - ruled
  - surfaces
  - iruledsurfacefeaturedata
  - icreateruledsurface
  - imodeler
  - modeler
  - create
  - curve1
  - curve
  - curve2
  - apex
  - double
---

# IModeler.ICreateRuledSurface

Creates a ruled surface from the curves.

## Signature

```csharp
Surface ICreateRuledSurface( 
   Curve
Curve1In
,
   Curve
Curve2In
,
   ref System.Double
Apex
)
```
## Parameters

- `Curve1In` (Curve): First curve
- `Curve2In` (Curve): Second curve
- `Apex` (System.Double): Array of 3 doubles, (x, y, z), the apex point

## Return Value

Newly created ruled surface

## Remarks

Valid input curves are b-curves.

## See Also

- `IModeler.CreateBsplineSurface`
- `IModeler.CreateConicalSurface2`
- `IModeler.CreateCoonsBSurface`
- `IModeler.CreateCylindricalSurface2`
- `IModeler.CreateExtrusionSurface`
- `IModeler.CreateLoftSurface`
- `IModeler.CreateOffsetSurface`
- `IModeler.CreatePlanarSurface2`
- `IModeler.CreateRuledSurface`
- `IModeler.CreateSphericalSurface2`
- `IModeler.CreateSweptSurface`
- `IModeler.CreateToroidalSurface`
- `IModeler.ICreateBsplineSurface`
- `IModeler.ICreateConicalSurface2`
- `IModeler.ICreateCylindricalSurface2`
- `IModeler.ICreateExtrusionSurface`
- `IModeler.ICreateLoftSurface`
- `IModeler.ICreateOffsetSurface`
- `IModeler.ICreatePlanarSurface2`
- `IModeler.ICreateSphericalSurface2`
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`