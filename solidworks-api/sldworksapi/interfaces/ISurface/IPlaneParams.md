---
type: property
interface: ISurface
member: IPlaneParams
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IsPlane
  - ISurface.PlaneParams
keywords:
  - surface
  - see
  - also
  - isurface
  - planar
  - iplaneparams
  - plane
  - params
  - double
readonly: true
---

# ISurface.IPlaneParams

Gets the parameters of a planar surface.

## Signature

```csharp
System.Double IPlaneParams {get;}
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

## See Also

- `ISurface.IsPlane`
- `ISurface.PlaneParams`