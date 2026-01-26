---
type: method
interface: IModeler
member: CreateSweptSurface
returns: System.Object
parameters:
  -
    name: CurveIn
    type: System.Object
    description: Curve to use to create the swept surface
  -
    name: Dir
    type: System.Object
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
  - IModeler.CreateToroidalSurface
  - IModeler.ICreateBsplineSurface
  - IModeler.ICreateConicalSurface2
  - IModeler.ICreateCylindricalSurface2
  - IModeler.ICreateExtrusionSurface
  - IModeler.ICreateLoftSurface
  - IModeler.ICreateOffsetSurface
  - IModeler.ICreatePlanarSurface2
  - IModeler.ICreateRuledSurface
  - IModeler.ICreateSweptSurface
  - IModeler.ICreateToroidalSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - swept
  - sweeps
  - isweepfeaturedata
  - createsweptsurface
  - imodeler
  - modeler
  - create
  - curve
  - object
  - dir
---

# IModeler.CreateSweptSurface

Creates a swept surface from a curve.

## Signature

```csharp
System.Object CreateSweptSurface( 
   System.Object
CurveIn
,
   System.Object
Dir
)
```
## Parameters

- `CurveIn` (System.Object): Curve to use to create the swept surface
- `Dir` (System.Object): 3 doubles describing the direction vector to sweep the curve along (see Remarks )

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
- `IModeler.CreateToroidalSurface`
- `IModeler.ICreateBsplineSurface`
- `IModeler.ICreateConicalSurface2`
- `IModeler.ICreateCylindricalSurface2`
- `IModeler.ICreateExtrusionSurface`
- `IModeler.ICreateLoftSurface`
- `IModeler.ICreateOffsetSurface`
- `IModeler.ICreatePlanarSurface2`
- `IModeler.ICreateRuledSurface`
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`