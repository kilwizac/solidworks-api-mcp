---
type: method
interface: ISurface
member: IGetRevsurfParams
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.GetRevsurfParams
keywords:
  - igetrevsurfparams
  - isurface
  - surface
  - revsurf
  - params
  - double
---

# ISurface.IGetRevsurfParams

Gets the parameters for the surface.

## Signature

```csharp
System.Double IGetRevsurfParams()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

A surface of revolution is constructed by revolving a profile curve (line or arc or b-spline) about an axis. The profile curve for the surface of revolution can be retrieved with
ISurface::GetProfileCurve
or
ISurface::IGetProfileCurve
.
Eight doubles of parameters returned.
Point [3]
-  X, Y, Z coordinates of the start point of the axis of rotation.
AxisDir[3]
-  Vector showing the direction of the axis of rotation.
Params[2]
-  Parameter range of the part of the profile curve that was used to create the surface.

## See Also

- `ISurface.GetRevsurfParams`