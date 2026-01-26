---
type: method
interface: ICurve
member: IGetEllipseParams
returns: void
parameters:
  -
    name: ParamArray
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.GetEllipseParams
  - ICurve.Identity
keywords:
  - igetellipseparams
  - icurve
  - curve
  - ellipse
  - params
  - param
  - array
  - double
  - void
---

# ICurve.IGetEllipseParams

Gets the parameters for this elliptical curve.

## Signature

```csharp
void IGetEllipseParams( 
   ref System.Double
ParamArray
)
```
## Parameters

- `ParamArray` (System.Double): in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

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
centerptX, centerptY, centerptZ
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
You must pass an array of 11 doubles that has already been allocated. If you pass a NULL
pointer or the curve is not an ellipse, then SOLIDWORKS returns S_false.

## See Also

- `ICurve.GetEllipseParams`
- `ICurve.Identity`