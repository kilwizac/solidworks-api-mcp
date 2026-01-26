---
type: property
interface: ISurface
member: ConeParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ISurface.IConeParams
  - ISurface.IsCone
keywords:
  - coneparams
  - isurface
  - surface
  - cone
  - params
  - object
readonly: true
---

# ISurface.ConeParams

Obsolete. Superseded by ISurface::ConeParams2.

## Signature

```csharp
System.Object ConeParams {get;}
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

- `ISurface.IConeParams`
- `ISurface.IsCone`