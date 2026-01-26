---
type: method
interface: IModeler
member: ICreateCylindricalSurface2
returns: Surface
parameters:
  -
    name: Center
    type: System.Double
    description: Array containing 3 doubles for XYZ location of the center of the bottom
  -
    name: Direction
    type: System.Double
    description: Array containing 3 doubles for XYZ direction of the axis of the cylindrical surface
  -
    name: RefDirection
    type: System.Double
    description: Array containing 3 doubles for XYZ direction of the axis of the cylindrical surface
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
  - IModeler.ICreateExtrusionSurface
  - IModeler.ICreateLoftSurface
  - IModeler.ICreateOffsetSurface
  - IModeler.ICreatePlanarSurface2
  - IModeler.ICreateRuledSurface
  - IModeler.ICreateSphericalSurface2
  - IModeler.ICreateSweptSurface
  - IModeler.ICreateToroidalSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - untrimmed
  - cylindrical
  - icreatecylindricalsurface2
  - imodeler
  - modeler
  - create
  - surface2
  - center
  - double
  - direction
  - ref
  - radius
---

# IModeler.ICreateCylindricalSurface2

Creates an untrimmed cylindrical surface.

## Signature

```csharp
Surface ICreateCylindricalSurface2( 
   ref System.Double
Center
,
   ref System.Double
Direction
,
   ref System.Double
RefDirection
,
   System.Double
Radius
)
```
## Parameters

- `Center` (System.Double): Array containing 3 doubles for XYZ location of the center of the bottom
- `Direction` (System.Double): Array containing 3 doubles for XYZ direction of the axis of the cylindrical surface
- `RefDirection` (System.Double): Array containing 3 doubles for XYZ direction of the axis of the cylindrical surface
- `Radius` (System.Double): Radius at the center

## Return Value

Surface

## Remarks

You can trim the resulting surface to generate a sheet body
, for example, using
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
- `IModeler.ICreateExtrusionSurface`
- `IModeler.ICreateLoftSurface`
- `IModeler.ICreateOffsetSurface`
- `IModeler.ICreatePlanarSurface2`
- `IModeler.ICreateRuledSurface`
- `IModeler.ICreateSphericalSurface2`
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`