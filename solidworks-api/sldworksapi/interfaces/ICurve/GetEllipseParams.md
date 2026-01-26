---
type: method
interface: ICurve
member: GetEllipseParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.IGetEllipseParams
  - ICurve.Identity
  - ICurve.IsEllipse
keywords:
  - getellipseparams
  - icurve
  - curve
  - ellipse
  - params
  - object
---

# ICurve.GetEllipseParams

Gets the parameters for this elliptical curve.

## Signature

```csharp
System.Object GetEllipseParams()
```
## Parameters

None.

## Return Value

Object (see Remarks )

## Remarks

Use
ICurve::IsEllipse
to determine if a curve is an ellipse.
The return value is an array of doubles with the following format:
[
centerptX, centerptY, centerptZ, majorRad, majorAxisX, majorAxisY, majorAxisZ,
minorRad, minorAxisX, minorAxisY, minorAxisZ
]
where:
centerptX
,
centerptY
,
centerptZ
= location of ellipse center
majorRad
= major radius
majorAxisX
,
majorAxisY
,
majorAxisZ
= major axis values
minorRad
= minor radius
minorAxisX
,
minorAxisY
,
minorAxisZ
= minor axis values
For Dispatch users, if this curve is not an ellipse, then SOLIDWORKS returns an empty
VARIANT. Otherwise, SOLIDWORKS returns a SafeArray in Visual Basic for Applications (VBA).

## See Also

- `ICurve.IGetEllipseParams`
- `ICurve.Identity`
- `ICurve.IsEllipse`