---
type: property
interface: ISurface
member: ICylinderParams
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.CylinderParams
  - ISurface.IsCylinder
keywords:
  - surface
  - see
  - also
  - isurface
  - cylindrical
  - icylinderparams
  - cylinder
  - params
  - double
readonly: true
---

# ISurface.ICylinderParams

Gets the parameters of a cylindrical surface.

## Signature

```csharp
System.Double ICylinderParams {get;}
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

## See Also

- `ISurface.CylinderParams`
- `ISurface.IsCylinder`