---
type: method
interface: IModeler
member: CreatePlanarSurface2
returns: System.Object
parameters:
  -
    name: VRootPoint
    type: System.Object
    description: Array of 3 doubles (x,y,z) representing the root point of the VNormal and VRef vectors
  -
    name: VNormal
    type: System.Object
    description: Array of 3 doubles (x,y,z) defining a vector with root point, VRootPoint; this vector must be perpendicular to VRef
  -
    name: VRef
    type: System.Object
    description: Array of 3 doubles (x,y,z) defining the x-axis on the planar surface with root point, VRootPoint; this vector must be perpendicular to VNormal
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
  - IModeler.ICreateSphericalSurface2
  - IModeler.ICreateSweptSurface
  - IModeler.ICreateToroidalSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - planar
  - createplanarsurface2
  - imodeler
  - modeler
  - create
  - surface2
  - root
  - point
  - object
  - normal
  - ref
  - infinite
  - plane
  - vba
  - cut
  - body
  - half
  - using
  - macro
  - feature
  - temporary
  - extruded
  - vb
  - net
---

# IModeler.CreatePlanarSurface2

Creates a new infinite planar surface.

## Signature

```csharp
System.Object CreatePlanarSurface2( 
   System.Object
VRootPoint
,
   System.Object
VNormal
,
   System.Object
VRef
)
```
## Parameters

- `VRootPoint` (System.Object): Array of 3 doubles (x,y,z) representing the root point of the VNormal and VRef vectors
- `VNormal` (System.Object): Array of 3 doubles (x,y,z) defining a vector with root point, VRootPoint; this vector must be perpendicular to VRef
- `VRef` (System.Object): Array of 3 doubles (x,y,z) defining the x-axis on the planar surface with root point, VRootPoint; this vector must be perpendicular to VNormal

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

## Examples

- Create Infinite Plane (VBA) (Create_Infinite_Plane_Example_VB.htm)
- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)
- Create Temporary Extruded Body (C#) (Create_Temporary_Extruded_Body_Example_CSharp.htm)
- Create Temporary Extruded Body (VB.NET) (Create_Temporary_Extruded_Body_Example_VBNET.htm)
- Create Temporary Extruded Body (VBA) (Create_Temporary_Extruded_Body_Example_VB.htm)

## See Also

- `IModeler.CreateBsplineSurface`
- `IModeler.CreateConicalSurface2`
- `IModeler.CreateCoonsBSurface`
- `IModeler.CreateCylindricalSurface2`
- `IModeler.CreateExtrusionSurface`
- `IModeler.CreateLoftSurface`
- `IModeler.CreateOffsetSurface`
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
- `IModeler.ICreateSphericalSurface2`
- `IModeler.ICreateSweptSurface`
- `IModeler.ICreateToroidalSurface`