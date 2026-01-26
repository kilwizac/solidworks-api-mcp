---
type: property
interface: ISurface
member: PlaneParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IPlaneParams
  - ISurface.IsPlane
keywords:
  - surface
  - see
  - also
  - isurface
  - planar
  - planeparams
  - plane
  - params
  - object
  - create
  - infinite
  - vba
  - angle
  - hole
  - not
  - normal
  - face
  - parameters
readonly: true
---

# ISurface.PlaneParams

Gets the parameters of a planar surface.

## Signature

```csharp
System.Object PlaneParams {get;}
```
## Parameters

None.

## Return Value

Array of doubles describing the parameters of a planar surface

## Remarks

Returns an array of 6 double values:
normal.x
normal.y
normal.z
rootPoint.x
rootPoint.y
rootPoint.z
The
rootPoint
values are in meters.

## Examples

- Create Infinite Plane (VBA) (Create_Infinite_Plane_Example_VB.htm)
- Get Angle of Hole Not Normal to a Face (VBA) (Get_Angle_of_Hole_Not_Normal_to_a_Face_Example_VB.htm)
- Get Normal of Planar Surface (VBA) (Get_Normal_of_Planar_Surface_Example_VB.htm)
- Get Parameters of Planar Surface (VBA) (Get_Parameters_of_Planar_Surface_Example_VB.htm)

## See Also

- `ISurface.IPlaneParams`
- `ISurface.IsPlane`