---
type: method
interface: IModeler
member: CreateOffsetSurface
returns: System.Object
parameters:
  -
    name: SurfaceIn
    type: System.Object
    description: Offset surface
  -
    name: Distance
    type: System.Double
    description: Offset distance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IBody2.CreateOffsetSurface
  - IBody2.ICreateOffsetSurface
  - IModeler.CreateBsplineSurface
  - IModeler.CreateConicalSurface2
  - IModeler.CreateCoonsBSurface
  - IModeler.CreateCylindricalSurface2
  - IModeler.CreateExtrusionSurface
  - IModeler.CreateLoftSurface
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
  - IModeler.ICreateSphericalSurface2
  - IModeler.ICreateSweptSurface
  - IModeler.ICreateToroidalSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - offset
  - surfaces
  - createoffsetsurface
  - imodeler
  - modeler
  - create
  - object
  - distance
  - double
---

# IModeler.CreateOffsetSurface

Creates a surface that is offset from an existing surface.

## Signature

```csharp
System.Object CreateOffsetSurface( 
   System.Object
SurfaceIn
,
   System.Double
Distance
)
```
## Parameters

- `SurfaceIn` (System.Object): Offset surface
- `Distance` (System.Double): Offset distance

## Return Value

Newly created surface

## See Also

- `IBody2.CreateOffsetSurface`
- `IBody2.ICreateOffsetSurface`
- `IModeler.CreateBsplineSurface`
- `IModeler.CreateConicalSurface2`
- `IModeler.CreateCoonsBSurface`
- `IModeler.CreateCylindricalSurface2`
- `IModeler.CreateExtrusionSurface`
- `IModeler.CreateLoftSurface`
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
- `IModeler.ICreateSphericalSurface2`
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`