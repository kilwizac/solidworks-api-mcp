---
type: method
interface: IModeler
member: CreateCoonsBSurface
returns: Surface
parameters:
  -
    name: UCurve0
    type: Curve
    description: First curve of u direction
  -
    name: UCurve1
    type: Curve
    description: Second curve of u direction
  -
    name: VCurve0
    type: Curve
    description: First curve of v direction
  -
    name: VCurve1
    type: Curve
    description: Second curve of v direction
  -
    name: IgnoreClosureReqt
    type: System.Boolean
    description: True to ignore closure request, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateBsplineSurface
  - IModeler.CreateConicalSurface2
  - IModeler.CreateCylindricalSurface2
  - IModeler.CreateExtrusionSurface
  - IModeler.CreateLoftSurface
  - IModeler.CreateOffsetSurface
  - IModeler.CreatePlanarSurface2
  - IModeler.CreateRuledSurface
  - IModeler.CreateSheetFromSurface
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
  - IModeler.ICreateSphericalSurface2
  - IModeler.ICreateSweptSurface
  - IModeler.ICreateToroidalSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - coons
  - createcoonsbsurface
  - imodeler
  - modeler
  - create
  - curve0
  - curve
  - curve1
  - ignore
  - closure
  - reqt
  - boolean
---

# IModeler.CreateCoonsBSurface

Creates a coons b-surface using the four specified boundary curves.

## Signature

```csharp
Surface CreateCoonsBSurface( 
   Curve
UCurve0
,
   Curve
UCurve1
,
   Curve
VCurve0
,
   Curve
VCurve1
,
   System.Boolean
IgnoreClosureReqt
)
```
## Parameters

- `UCurve0` (Curve): First curve of u direction
- `UCurve1` (Curve): Second curve of u direction
- `VCurve0` (Curve): First curve of v direction
- `VCurve1` (Curve): Second curve of v direction
- `IgnoreClosureReqt` (System.Boolean): True to ignore closure request, false to not

## Return Value

B-surface

## Remarks

By default, IgnoreClosureReqt is not ignored.

## See Also

- `IModeler.CreateBsplineSurface`
- `IModeler.CreateConicalSurface2`
- `IModeler.CreateCylindricalSurface2`
- `IModeler.CreateExtrusionSurface`
- `IModeler.CreateLoftSurface`
- `IModeler.CreateOffsetSurface`
- `IModeler.CreatePlanarSurface2`
- `IModeler.CreateRuledSurface`
- `IModeler.CreateSheetFromSurface`
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
- `IModeler.ICreateSphericalSurface2`
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`