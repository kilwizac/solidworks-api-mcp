---
type: property
interface: ISurface
member: CylinderParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.ICylinderParams
  - ISurface.IsCylinder
keywords:
  - surface
  - see
  - also
  - isurface
  - cylindrical
  - cylinderparams
  - cylinder
  - params
  - object
  - angle
  - hole
  - not
  - normal
  - face
  - vba
  - entities
  - attached
  - cosmetic
  - thread
  - parameters
readonly: true
---

# ISurface.CylinderParams

Gets the parameters of a cylindrical surface.

## Signature

```csharp
System.Object CylinderParams {get;}
```
## Parameters

None.

## Return Value

Array of doubles describing the parameters of a cylindrical surface

## Remarks

Returns an array of 7 doubles:
origin.x
origin.y
origin.z
axis.x
axis.y
axis.z
radius
The
origin
and
radius
parameters are in meters.

## Examples

- Get Angle of Hole Not Normal to a Face (VBA) (Get_Angle_of_Hole_Not_Normal_to_a_Face_Example_VB.htm)
- Get Entities Attached to Cosmetic Thread (VBA) (Get_Entities_Attached_To_Cosmetic_Thread_Example_VB.htm)
- Get Parameters of Cylindrical Surface (VBA) (Get_Parameters_of_Cylindrical_Surface_Example_VB.htm)

## See Also

- `ISurface.ICylinderParams`
- `ISurface.IsCylinder`