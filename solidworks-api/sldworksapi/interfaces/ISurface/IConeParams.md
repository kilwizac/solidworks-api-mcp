---
type: property
interface: ISurface
member: IConeParams
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.ConeParams
  - ISurface.IsCone
keywords:
  - surface
  - see
  - also
  - isurface
  - conical
  - surfaces
  - iconeparams
  - cone
  - params
  - double
readonly: true
---

# ISurface.IConeParams

Gets the parameters of a conical surface.

## Signature

```csharp
System.Double IConeParams {get;}
```
## Parameters

None.

## Return Value

Array of doubles describing the parameters of a conical surface

## Remarks

Returns an array of 8 doubles:
origin.x
origin.y
origin.z
axis.x
axis.y
axis.z
radius
half angle
The
half angle, origin,
and
radius
parameters are in meters.

## See Also

- `ISurface.ConeParams`
- `ISurface.IsCone`