---
type: method
interface: IModeler
member: CreateToroidalSurface
returns: System.Object
parameters:
  -
    name: Center
    type: System.Object
    description: Array containing 3 doubles (see Remarks )
  -
    name: Axis
    type: System.Object
    description: Array containing 3 doubles (see Remarks )
  -
    name: RefDirection
    type: System.Object
    description: Array containing 3 doubles (see Remarks )
  -
    name: MajorRadius
    type: System.Double
    description: See Remarks
  -
    name: MinorRadius
    type: System.Double
    description: See Remarks
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
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
  - ISurface.IsTorus
  - ISurface.TorusParams
keywords:
  - surface
  - see
  - also
  - isurface
  - untrimmed
  - toroidal
  - surfaces
  - createtoroidalsurface
  - imodeler
  - modeler
  - create
  - center
  - object
  - axis
  - ref
  - direction
  - major
  - radius
  - double
  - minor
---

# IModeler.CreateToroidalSurface

Creates an untrimmed toroidal surface from the specified arguments.

## Signature

```csharp
System.Object CreateToroidalSurface( 
   System.Object
Center
,
   System.Object
Axis
,
   System.Object
RefDirection
,
   System.Double
MajorRadius
,
   System.Double
MinorRadius
)
```
## Parameters

- `Center` (System.Object): Array containing 3 doubles (see Remarks )
- `Axis` (System.Object): Array containing 3 doubles (see Remarks )
- `RefDirection` (System.Object): Array containing 3 doubles (see Remarks )
- `MajorRadius` (System.Double): See Remarks
- `MinorRadius` (System.Double): See Remarks

## Return Value

Untrimmed toroidal surface

## Remarks

Input arguments:
Center XYZ location that represents the center of the spherical surface.
Axis XYZ direction of the axis of the spherical surface.
RefDirection XYZ direction of the reference axis of the spherical surface; it must be perpendicular to the axis.
MajorRadius major radius of the toroidal surface.
MinorRadius minor radius of the toroidal surface.
The resulting surface can be trimmed using a method like
ISurface::CreateTrimmedSheet
to generate a sheet body.

## See Also

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
- `ISurface.IsTorus`
- `ISurface.TorusParams`