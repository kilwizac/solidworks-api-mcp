---
type: method
interface: IModeler
member: ICreateSphericalSurface2
returns: Surface
parameters:
  -
    name: Center
    type: System.Double
    description: Array containing 3 doubles for XYZ location of the center of the spherical surface
  -
    name: Axis
    type: System.Double
    description: Array containing 3 doubles
  -
    name: RefDir
    type: System.Double
    description: Array containing 3 doubles
  -
    name: Radius
    type: System.Double
    description: Radius at the center
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
  - IModeler.ICreateSweptSurface
  - IModeler.ICreateToroidalSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - spherical
  - surfaces
  - icreatesphericalsurface2
  - imodeler
  - modeler
  - create
  - surface2
  - center
  - double
  - axis
  - ref
  - dir
  - radius
---

# IModeler.ICreateSphericalSurface2

Creates an untrimmed spherical surface.

## Signature

```csharp
Surface ICreateSphericalSurface2( 
   ref System.Double
Center
,
   ref System.Double
Axis
,
   ref System.Double
RefDir
,
   System.Double
Radius
)
```
## Parameters

- `Center` (System.Double): Array containing 3 doubles for XYZ location of the center of the spherical surface
- `Axis` (System.Double): Array containing 3 doubles
- `RefDir` (System.Double): Array containing 3 doubles
- `Radius` (System.Double): Radius at the center

## Return Value

Untrimmed spherical surface

## Remarks

The axis argument is the axis of the sphere; the refDir argument is perpendicular to the axis and through the center of the sphere and defines the origin of the UV space.
You can trim the resulting surface to generate a sheet body, for example, using
ISurface::CreateTrimmedSheet
.

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
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`