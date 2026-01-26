---
type: property
interface: ISurface
member: TorusParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.ITorusParams
  - ISurface.IsTorus
keywords:
  - surface
  - see
  - also
  - isurface
  - toroidal
  - surfaces
  - torusparams
  - torus
  - params
  - object
  - parameters
  - vba
readonly: true
---

# ISurface.TorusParams

Gets the parameters of a toroidal surface.

## Signature

```csharp
System.Object TorusParams {get;}
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Returns an array of 8 double values:
center.x
center.y
center.z
axis.x
axis.y
axis.z
major radius
- the distance between the center of torus and the center of revolved circle
minor radius
- the radius of the revolved circle
NOTES:
The real major radius (the outer radius) of the torus is major radius + minor radius.
The center, major radius, and minor radius are in meters.
Possible values that indicate a type of self-intersecting torus:
Apple - when the major radius is positive and less than or equal to the minor radius.
Lemon - when the major radius is negative and the sum of the radii is positive.

## Examples

- Get Parameters of Toroidal Surface (VBA) (Get_Parameters_of_Toroidal_Surface_Example_VB.htm)

## See Also

- `ISurface.ITorusParams`
- `ISurface.IsTorus`