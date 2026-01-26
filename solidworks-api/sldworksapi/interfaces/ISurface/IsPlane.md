---
type: method
interface: ISurface
member: IsPlane
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreatePlanarSurface2
  - IModeler.ICreatePlanarSurface2
  - ISurface.IPlaneParams
  - ISurface.PlaneParams
  - ISurfacePlanarFeatureData
keywords:
  - surface
  - see
  - also
  - isurface
  - planar
  - isplane
  - plane
  - boolean
  - create
  - infinite
  - vba
  - angle
  - hole
  - not
  - normal
  - face
  - parameters
---

# ISurface.IsPlane

Gets whether the surface is a planar surface.

## Signature

```csharp
System.Boolean IsPlane()
```
## Parameters

None.

## Return Value

True if surface is planar surface, false if not

## Examples

- Create Infinite Plane (VBA) (Create_Infinite_Plane_Example_VB.htm)
- Get Angle of Hole Not Normal to a Face (VBA) (Get_Angle_of_Hole_Not_Normal_to_a_Face_Example_VB.htm)
- Get Parameters of Planar Surface (VBA) (Get_Parameters_of_Planar_Surface_Example_VB.htm)

## See Also

- `IModeler.CreatePlanarSurface2`
- `IModeler.ICreatePlanarSurface2`
- `ISurface.IPlaneParams`
- `ISurface.PlaneParams`
- `ISurfacePlanarFeatureData`