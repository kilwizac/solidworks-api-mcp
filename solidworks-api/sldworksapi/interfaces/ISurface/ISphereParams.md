---
type: property
interface: ISurface
member: ISphereParams
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IsSphere
  - ISurface.SphereParams
keywords:
  - isphereparams
  - isurface
  - surface
  - sphere
  - params
  - double
readonly: true
---

# ISurface.ISphereParams

Gets the parameters of a spherical surface.

## Signature

```csharp
System.Double ISphereParams {get;}
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

- `ISurface.IsSphere`
- `ISurface.SphereParams`