---
type: method
interface: IModeler
member: ICreateConicalSurface2
returns: Surface
parameters:
  -
    name: Center
    type: System.Double
    description: Array containing 3 doubles (see Remarks )
  -
    name: Direction
    type: System.Double
    description: Array of 3 doubles (see Remarks )
  -
    name: RefDirection
    type: System.Double
    description: Array containing 3 doubles (see Remarks )
  -
    name: Radius
    type: System.Double
    description: See Remarks
  -
    name: SemiAngle
    type: System.Double
    description: See Remarks
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateBsplineSurface
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
  - IModeler.ICreateCylindricalSurface2
  - IModeler.ICreateExtrusionSurface
  - IModeler.ICreateLoftSurface
  - IModeler.ICreateOffsetSurface
  - IModeler.ICreatePlanarSurface2
  - IModeler.ICreateRuledSurface
  - IModeler.ICreateSweptSurface
  - IModeler.ICreateToroidalSurface
keywords:
  - conical
  - surfaces
  - surface
  - see
  - also
  - isurface
  - untrimmed
  - icreateconicalsurface2
  - imodeler
  - modeler
  - create
  - surface2
  - center
  - double
  - direction
  - ref
  - radius
  - semi
  - angle
---

# IModeler.ICreateConicalSurface2

Creates an untrimmed conical surface.

## Signature

```csharp
Surface ICreateConicalSurface2( 
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
,
   System.Double
SemiAngle
)
```
## Parameters

- `Center` (System.Double): Array containing 3 doubles (see Remarks )
- `Direction` (System.Double): Array of 3 doubles (see Remarks )
- `RefDirection` (System.Double): Array containing 3 doubles (see Remarks )
- `Radius` (System.Double): See Remarks
- `SemiAngle` (System.Double): See Remarks

## Return Value

Surface

## Remarks

Input arguments:
Argument
Description
Center
XYZ location which represents the center of the bottom
Direction
XYZ direction of the axis of the conical surface
Radius
Radius at the center
SemiAngle
Half angle of the cone in radians
You can trim the resulting surface to generate a sheet body (for example, using
ISurface::CreateTrimmedSheet
).

## See Also

- `IModeler.CreateBsplineSurface`
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
- `IModeler.ICreateCylindricalSurface2`
- `IModeler.ICreateExtrusionSurface`
- `IModeler.ICreateLoftSurface`
- `IModeler.ICreateOffsetSurface`
- `IModeler.ICreatePlanarSurface2`
- `IModeler.ICreateRuledSurface`
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`