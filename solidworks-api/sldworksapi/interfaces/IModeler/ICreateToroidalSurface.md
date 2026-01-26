---
type: method
interface: IModeler
member: ICreateToroidalSurface
returns: Surface
parameters:
  -
    name: Center
    type: System.Double
    description: Array containing 3 doubles (see Remarks )
  -
    name: Axis
    type: System.Double
    description: Array containing 3 doubles (see Remarks )
  -
    name: RefDirection
    type: System.Double
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
  - IModeler.ICreateRuledSurface
  - IModeler.ICreateSweptSurface
keywords:
  - toroidal
  - surfaces
  - surface
  - see
  - also
  - isurface
  - untrimmed
  - icreatetoroidalsurface
  - imodeler
  - modeler
  - create
  - center
  - double
  - axis
  - ref
  - direction
  - major
  - radius
  - minor
---

# IModeler.ICreateToroidalSurface

Creates an untrimmed toroidal surface from the specified arguments.

## Signature

```csharp
Surface ICreateToroidalSurface( 
   ref System.Double
Center
,
   ref System.Double
Axis
,
   ref System.Double
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

- `Center` (System.Double): Array containing 3 doubles (see Remarks )
- `Axis` (System.Double): Array containing 3 doubles (see Remarks )
- `RefDirection` (System.Double): Array containing 3 doubles (see Remarks )
- `MajorRadius` (System.Double): See Remarks
- `MinorRadius` (System.Double): See Remarks

## Return Value

Unknown.

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
- `IModeler.ICreateRuledSurface`
- `IModeler.ICreateSweptSurface`