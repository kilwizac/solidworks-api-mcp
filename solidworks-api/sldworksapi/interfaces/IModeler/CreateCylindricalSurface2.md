---
type: method
interface: IModeler
member: CreateCylindricalSurface2
returns: System.Object
parameters:
  -
    name: Center
    type: System.Object
    description: Array containing 3 doubles for XYZ location of the center of the bottom
  -
    name: Direction
    type: System.Object
    description: Array containing 3 doubles for XYZ direction of the axis of the cylindrical surface
  -
    name: RefDirection
    type: System.Object
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
  - untrimmed
  - cylindrical
  - createcylindricalsurface2
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
  - spherical
  - trimmed
  - sheet
  - feature
  - body
  - vba
---

# IModeler.CreateCylindricalSurface2

Creates an untrimmed cylindrical surface.

## Signature

```csharp
System.Object CreateCylindricalSurface2( 
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
)
```
## Parameters

- `Center` (System.Object): Array containing 3 doubles for XYZ location of the center of the bottom
- `Direction` (System.Object): Array containing 3 doubles for XYZ direction of the axis of the cylindrical surface
- `RefDirection` (System.Object): Array containing 3 doubles for XYZ direction of the axis of the cylindrical surface
- `Radius` (System.Double): Radius at the center

## Return Value

Surface

## Remarks

You can trim the resulting surface to generate a sheet body
, for example, using
ISurface::CreateTrimmedSheet
.

## Examples

- Create Spherical Surface, Trimmed Sheet, and Feature from Body (VBA) (Create_Spherical_Surface_Trimmed_Sheet_and_Feature_From_Body_Example_VB.htm)

## See Also

- `IModeler.CreateBsplineSurface`
- `IModeler.CreateConicalSurface2`
- `IModeler.CreateCoonsBSurface`
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