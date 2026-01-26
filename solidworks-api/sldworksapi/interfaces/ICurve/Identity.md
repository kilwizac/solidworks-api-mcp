---
type: method
interface: ICurve
member: Identity
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.IsBcurve
  - ICurve.IsCircle
  - ICurve.IsEllipse
  - ICurve.IsLine
  - ICurve.IsTrimmedCurve
keywords:
  - identity
  - icurve
  - curve
  - int32
  - length
  - edge
  - vba
  - spline
  - elliptical
---

# ICurve.Identity

Gets the type of curve.

## Signature

```csharp
System.Int32 Identity()
```
## Parameters

None.

## Return Value

Type of curve as defined in swCurveTypes_e

## Remarks

If the return value is TRIMMED_TYPE, then the original untrimmed curve type may be established by calling
ICurve::IsLine
,
ICurve::IsBcurve
or
ICurve::IsCircle
.
To determine if a circular edge is a complete circle or an arc, see
IEdge::GetCurveParams2
or
IEdge::IGetCurveParams2
.

## Examples

- Get Length of Edge (VBA) (Get_Length_of_Edge_Example_VB.htm)
- Get Length of Spline or Elliptical Edge (VBA) (Get_Length_of_Spline_or_Elliptical_Edge_Example_VB.htm)

## See Also

- `ICurve.IsBcurve`
- `ICurve.IsCircle`
- `ICurve.IsEllipse`
- `ICurve.IsLine`
- `ICurve.IsTrimmedCurve`