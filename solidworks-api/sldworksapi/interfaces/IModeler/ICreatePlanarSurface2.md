---
type: method
interface: IModeler
member: ICreatePlanarSurface2
returns: Surface
parameters:
  -
    name: RootPoint
    type: System.Double
    description: Array of 3 doubles (x,y,z)
  -
    name: Normal
    type: System.Double
    description: Array of 3 doubles (x,y,z)
  -
    name: Ref
    type: System.Double
    description: Array of 3 doubles representing the vector defining the x-axis on the plane
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
  - IModeler.ICreateRuledSurface
  - IModeler.ICreateSphericalSurface2
  - IModeler.ICreateSweptSurface
  - IModeler.ICreateToroidalSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - planar
  - icreateplanarsurface2
  - imodeler
  - modeler
  - create
  - surface2
  - root
  - point
  - double
  - normal
  - ref
---

# IModeler.ICreatePlanarSurface2

Creates a new infinite planar surface.

## Signature

```csharp
Surface ICreatePlanarSurface2( 
   ref System.Double
RootPoint
,
   ref System.Double
Normal
,
   ref System.Double
Ref
)
```
## Parameters

- `RootPoint` (System.Double): Array of 3 doubles (x,y,z)
- `Normal` (System.Double): Array of 3 doubles (x,y,z)
- `Ref` (System.Double): Array of 3 doubles representing the vector defining the x-axis on the plane

## Return Value

Newly created planar surface

## Remarks

You can use this method with:
A set of related functions designed to construct a body from trimmed surfaces. It can also be used with trimming curve creation routines to construct a trimmed planar surface.
Trimming curve creation routines such as
ISurface::AddTrimmingLoop2
or
ISurface::IAddTrimmingLoop2
to construct a trimmed surface.
See
IBody2::CreatePlanarTrimSurfaceDLL
or
IBody2::ICreatePlanarTrimSurfaceDLL
, which allows you to create a planar trimmed surface directly from the vertex points.

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
- `IModeler.ICreateRuledSurface`
- `IModeler.ICreateSphericalSurface2`
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`