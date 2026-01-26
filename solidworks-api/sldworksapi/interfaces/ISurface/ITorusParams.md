---
type: property
interface: ISurface
member: ITorusParams
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IsTorus
  - ISurface.TorusParams
keywords:
  - surface
  - see
  - also
  - isurface
  - toroidal
  - surfaces
  - itorusparams
  - torus
  - params
  - double
readonly: true
---

# ISurface.ITorusParams

Gets the parameters of a toroidal surface.

## Signature

```csharp
System.Double ITorusParams {get;}
```
## Parameters

None.

## Return Value

Array of doubles describing the parameters of a toroidal surface

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

## See Also

- `ISurface.IsTorus`
- `ISurface.TorusParams`