---
type: method
interface: ICurve
member: GetBCurveParams5
returns: SplineParamData
parameters:
  -
    name: WantCubicIn
    type: System.Boolean
    description: True to return cubic parameters, false to not
  -
    name: WantNRational
    type: System.Boolean
    description: True to return non-rational parameters; false to return rational parameters
  -
    name: ForceNonPeriodic
    type: System.Boolean
    description: True to convert the curve from periodic to nonperiodic, false to not (see Remarks )
  -
    name: IsClosed
    type: System.Boolean
    description: True for a closed curve, false for an open curve (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICoEdge.GetCurveParams
  - ICoEdge.IGetCurveParams
  - ICurve.CircleParams
  - ICurve.ConvertArcToBcurve
  - ICurve.ConvertLineToBcurve
  - ICurve.GetEllipseParams
  - ICurve.GetPCurveParams2
  - ICurve.ICircleParams
  - ICurve.IGetBCurveParamsSize3
  - ICurve.IGetEllipseParams
  - ICurve.IGetPCurveParams
  - ICurve.ILineParams
  - ICurve.Identity
  - ICurve.IsBcurve
  - ICurve.IsCircle
  - ICurve.IsEllipse
  - ICurve.IsLine
  - ICurve.LineParams
  - ICurve.MakeBsplineCurve2
  - IEdge.GetCurveParams3
  - IEdge.IGetCurveParams2
  - IModeler.CreatePCurve
  - IModeler.ICreatePCurve
keywords:
  - curve
  - see
  - also
  - icurve
  - spline
  - points
  - splines
  - splineparamdata
  - isplineparamdata
  - getbcurveparams5
  - params5
  - want
  - cubic
  - boolean
  - rational
  - force
  - non
  - periodic
  - closed
  - param
  - data
  - bcurve
  - vb
  - net
  - vba
  - edit
---

# ICurve.GetBCurveParams5

Gets a data object containing the parameters of a Bézier curve.

## Signature

```csharp
SplineParamData GetBCurveParams5( 
   System.Boolean
WantCubicIn
,
   System.Boolean
WantNRational
,
   System.Boolean
ForceNonPeriodic
,
   System.Boolean
IsClosed
)
```
## Parameters

- `WantCubicIn` (System.Boolean): True to return cubic parameters, false to not
- `WantNRational` (System.Boolean): True to return non-rational parameters; false to return rational parameters
- `ForceNonPeriodic` (System.Boolean): True to convert the curve from periodic to nonperiodic, false to not (see Remarks )
- `IsClosed` (System.Boolean): True for a closed curve, false for an open curve (see Remarks )

## Return Value

An ISplineParamData object (see Remarks )

## Remarks

To control the accuracy of the curve data, see
IModeler::SetToleranceValue
.
If a
Bézier
curve is closed (IsClosed = true) and periodic (ForceNonPeriodic = false), the seam at the juncture of the beginning and end of the curve is continuous and smooth. The data returned in this form contains a single knot at the juncture.
If a Bézier curve is closed (IsClosed = true) and non-periodic (ForceNonPeriodic = true), the seam at the juncture is continuous, contains a cusp, and is not smooth. The data returned in this form contains multiple knots at each end of the curve.
Obsolete versions of this method automatically treated closed Bézier curves as periodic. The cusp at the juncture of a closed non-periodic curve (e.g., a tear drop) was lost using these methods. This method provides more flexibility for specifying precisely which form of the curve to get to prevent unintentional data loss.
This method returns the parameterization data of the Bézier curve in an ISplineParamData object instead of an array. Call the methods and properties of
ISplineParamData
to obtain the control points, knot points, dimension, order, and periodicity of the curve.

## Examples

- Get BCurve Spline Points (C#) (Get_BCurve_Spline_Points_Example_CSharp.htm)
- Get BCurve Spline Points (VB.NET) (Get_BCurve_Spline_Points_Example_VBNET.htm)
- Get BCurve Spline Points (VBA) (Get_BCurve_Spline_Points_Example_VB.htm)
- Edit Spline (VBA) (Edit_Spline_Example_VB.htm)

## See Also

- `ICoEdge.GetCurveParams`
- `ICoEdge.IGetCurveParams`
- `ICurve.CircleParams`
- `ICurve.ConvertArcToBcurve`
- `ICurve.ConvertLineToBcurve`
- `ICurve.GetEllipseParams`
- `ICurve.GetPCurveParams2`
- `ICurve.ICircleParams`
- `ICurve.IGetBCurveParamsSize3`
- `ICurve.IGetEllipseParams`
- `ICurve.IGetPCurveParams`
- `ICurve.ILineParams`
- `ICurve.Identity`
- `ICurve.IsBcurve`
- `ICurve.IsCircle`
- `ICurve.IsEllipse`
- `ICurve.IsLine`
- `ICurve.LineParams`
- `ICurve.MakeBsplineCurve2`
- `IEdge.GetCurveParams3`
- `IEdge.IGetCurveParams2`
- `IModeler.CreatePCurve`
- `IModeler.ICreatePCurve`