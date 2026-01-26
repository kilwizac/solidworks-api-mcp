---
type: property
interface: ISurface
member: SphereParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.ISphereParams
  - ISurface.IsSphere
keywords:
  - surface
  - see
  - also
  - isurface
  - spherical
  - sphereparams
  - sphere
  - params
  - object
readonly: true
---

# ISurface.SphereParams

Gets the parameters of a spherical surface.

## Signature

```csharp
System.Object SphereParams {get;}
```
## Parameters

None.

## Return Value

Array of doubles describing the parameters of a spherical surface

## Remarks

Returns an array of 4 doubles:
center.x
center.y
center.z
radius
The
center
and
radius
values are in meters.

## See Also

- `ISurface.ISphereParams`
- `ISurface.IsSphere`