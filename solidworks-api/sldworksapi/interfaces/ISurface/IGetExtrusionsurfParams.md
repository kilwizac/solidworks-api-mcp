---
type: method
interface: ISurface
member: IGetExtrusionsurfParams
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.GetExtrusionsurfParams
keywords:
  - igetextrusionsurfparams
  - isurface
  - surface
  - extrusionsurf
  - params
  - double
---

# ISurface.IGetExtrusionsurfParams

Gets the parameters for the extrusion surface.

## Signature

```csharp
System.Double IGetExtrusionsurfParams()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles giving extrusion surface parameters VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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

- `ISurface.GetExtrusionsurfParams`