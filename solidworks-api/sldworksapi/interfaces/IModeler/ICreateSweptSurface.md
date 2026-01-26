---
type: method
interface: IModeler
member: ICreateSweptSurface
returns: Surface
parameters:
  -
    name: CurveIn
    type: Curve
    description: Curve to use to create the swept surface
  -
    name: Dir
    type: System.Double
    description: 3 doubles describing the direction vector to sweep the curve along (see Remarks )
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
  - IModeler.CreateToroidalSurface
  - IModeler.ICreateBsplineSurface
  - IModeler.ICreateConicalSurface2
  - IModeler.ICreateCylindricalSurface2
  - IModeler.ICreateLoftSurface
  - IModeler.ICreateOffsetSurface
  - IModeler.ICreatePlanarSurface2
  - IModeler.ICreateRuledSurface
  - IModeler.ICreateSheetFromSurface2
  - IModeler.ICreateSphericalSurface2
  - IModeler.ICreateToroidalSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - swept
  - sweeps
  - isweepfeaturedata
  - icreatesweptsurface
  - imodeler
  - modeler
  - create
  - curve
  - dir
  - double
---

# IModeler.ICreateSweptSurface

Creates a swept surface from a curve.

## Signature

```csharp
Surface ICreateSweptSurface( 
   Curve
CurveIn
,
   ref System.Double
Dir
)
```
## Parameters

- `CurveIn` (Curve): Curve to use to create the swept surface
- `Dir` (System.Double): 3 doubles describing the direction vector to sweep the curve along (see Remarks )

## Return Value

Newly created surface

## Remarks

This method creates an infinite surface. To create a trimmed surface, add a trimming loop with
ISurface::AddTrimmingLoop2
or
ISurface::IAddTrimmingLoop2
.
The Dir array is:
Dir[0] = X component of the direction vector
Dir[1] = Y component of the direction vector
Dir[2] = Z component of the direction vector

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
- `IModeler.CreateToroidalSurface`
- `IModeler.ICreateBsplineSurface`
- `IModeler.ICreateConicalSurface2`
- `IModeler.ICreateCylindricalSurface2`
- `IModeler.ICreateLoftSurface`
- `IModeler.ICreateOffsetSurface`
- `IModeler.ICreatePlanarSurface2`
- `IModeler.ICreateRuledSurface`
- `IModeler.ICreateSheetFromSurface2`
- `IModeler.ICreateSphericalSurface2`
- `IModeler.ICreateToroidalSurface`