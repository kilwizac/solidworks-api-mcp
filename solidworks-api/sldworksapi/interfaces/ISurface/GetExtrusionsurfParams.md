---
type: method
interface: ISurface
member: GetExtrusionsurfParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IGetExtrusionsurfParams
keywords:
  - getextrusionsurfparams
  - isurface
  - surface
  - extrusionsurf
  - params
  - object
---

# ISurface.GetExtrusionsurfParams

Gets the parameters for the extrusion surface.

## Signature

```csharp
System.Object GetExtrusionsurfParams()
```
## Parameters

None.

## Return Value

Array of doubles giving extrusion surface parameters

## Remarks

An extrusion surface is constructed by extruding a profile curve (line or arc or b-spline) along a direction vector. You can retrieve the profile curve for the extrusion using
ISurface::GetProfileCurve
or
ISurface::IGetProfileCurve
.
Three doubles of parameters returned,
DirectionVector[3]
, which is the direction vector along which the profile curve is extruded.

## See Also

- `ISurface.IGetExtrusionsurfParams`