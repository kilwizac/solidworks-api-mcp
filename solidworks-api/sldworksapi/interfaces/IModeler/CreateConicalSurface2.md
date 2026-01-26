---
type: method
interface: IModeler
member: CreateConicalSurface2
returns: System.Object
parameters:
  -
    name: Center
    type: System.Object
    description: Array containing 3 doubles (see Remarks )
  -
    name: Direction
    type: System.Object
    description: Array containing 3 doubles (see Remarks )
  -
    name: RefDirection
    type: System.Object
    description: Array containing 3 doubles (see Remarks )
  -
    name: Radius
    type: System.Double
    description: See Remarks
  -
    name: SemiAngle
    type: System.Double
    description: e Remarks
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateCoonsBSurface
  - IModeler.CreateCylindricalSurface2
  - IModeler.CreateExtrusionSurface
  - IModeler.CreateLoftSurface
  - IModeler.CreateOffsetSurface
  - IModeler.CreatePlanarSurface
  - IModeler.CreateRuledSurface
  - IModeler.CreateSphericalSurface2
  - IModeler.CreateSweptSurface
  - IModeler.CreateToroidalSurface
  - IModeler.ICreateConicalSurface2
  - IModeler.ICreateCylindricalSurface2
  - IModeler.ICreateExtrusionSurface
  - IModeler.ICreateLoftSurface
  - IModeler.ICreateOffsetSurface
  - IModeler.ICreatePlanarSurface2
  - IModeler.ICreateRuledSurface
  - IModeler.ICreateSphericalSurface2
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
  - createconicalsurface2
  - imodeler
  - modeler
  - create
  - surface2
  - center
  - object
  - direction
  - ref
  - radius
  - double
  - semi
  - angle
---

# IModeler.CreateConicalSurface2

Creates an untrimmed conical surface.

## Signature

```csharp
System.Object CreateConicalSurface2( 
   System.Object
Center
,
   System.Object
Direction
,
   System.Object
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

- `Center` (System.Object): Array containing 3 doubles (see Remarks )
- `Direction` (System.Object): Array containing 3 doubles (see Remarks )
- `RefDirection` (System.Object): Array containing 3 doubles (see Remarks )
- `Radius` (System.Double): See Remarks
- `SemiAngle` (System.Double): e Remarks

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

- `IModeler.CreateCoonsBSurface`
- `IModeler.CreateCylindricalSurface2`
- `IModeler.CreateExtrusionSurface`
- `IModeler.CreateLoftSurface`
- `IModeler.CreateOffsetSurface`
- `IModeler.CreatePlanarSurface`
- `IModeler.CreateRuledSurface`
- `IModeler.CreateSphericalSurface2`
- `IModeler.CreateSweptSurface`
- `IModeler.CreateToroidalSurface`
- `IModeler.ICreateConicalSurface2`
- `IModeler.ICreateCylindricalSurface2`
- `IModeler.ICreateExtrusionSurface`
- `IModeler.ICreateLoftSurface`
- `IModeler.ICreateOffsetSurface`
- `IModeler.ICreatePlanarSurface2`
- `IModeler.ICreateRuledSurface`
- `IModeler.ICreateSphericalSurface2`
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`