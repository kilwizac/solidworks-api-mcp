---
type: method
interface: ISplineParamData
member: IGetSegments
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Size of Segments array
  -
    name: Segments
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of doubles VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISplineParamData.GetSegments
keywords:
  - igetsegments
  - isplineparamdata
  - spline
  - param
  - data
  - segments
  - count
  - int32
  - double
  - boolean
---

# ISplineParamData.IGetSegments

Gets the coefficients of all of the piecewise polynomials of a spline.

## Signature

```csharp
System.Boolean IGetSegments( 
   System.Int32
Count
,
   out System.Double
Segments
)
```
## Parameters

- `Count` (System.Int32): Size of Segments array
- `Segments` (System.Double): in-process, unmanaged C++: Pointer to an array of doubles VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if successful, false if not

## Remarks

This method works only with P-spline parameterization data. Before calling this method, call
ICurve::GetPCurveParams2
to obtain the P-spline parameterization data object for the curve.
Before calling this method, call
ISplineParamData::SegmentCount
to populate the Count parameter.
Each pair of spline control points defines one segment of a curve. Each segment is typically represented by a cubic polynomial. This method returns a one-dimensional array containing doubles that are the coefficients of all of the piecewise cubic polynomials of the spline.
The segment coefficients are stored in the Segments array in order of increasing variable exponent:
(constants)(first degree coefficients)(second degree coefficients)(third degree coefficients) etc.
For example, if the spline segments are represented by cubic rational (dim=4) polynomials in parametric form,
(w0*a0 + w1*a1*t + w2*a2*t**2 + w3*a3*t**3)
p(t) = --------------------------------------------
(w0 + w1*t + w2*t**2 + w3*t**3)
where w0, w1, w2, w3 are weighting coefficients and a0, a1, a2, a3 are vector coefficients, then the Segments array stores (dimension(4) X order(4)) = 16 coefficients:
(a0x,a0y,a0z,w0)(a1x,a1y,a1z,w1)(a2x,a2y,a2z,w2)(a3x,a3y,a3z,w3).
If the spline segments are represented by cubic non-rational (dim=3) polynomials, then the Segments array stores (dimension(3) X order(4)) = 12 coefficients:
(a0x,a0y,a0z)(a1x,a1y,a1z)(a2x,a2y,a2z)(a3x,a3y,a3z0).
The total number of coefficients returned by this method is:
(
segment count
) x (
order
) x (
dimension
)

## See Also

- `ISplineParamData.GetSegments`