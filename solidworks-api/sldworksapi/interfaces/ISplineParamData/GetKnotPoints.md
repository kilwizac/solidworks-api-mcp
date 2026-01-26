---
type: method
interface: ISplineParamData
member: GetKnotPoints
returns: System.Boolean
parameters:
  -
    name: KnotPoints
    type: System.Object
    description: Array of double values between 0 and 1, inclusive ( see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISplineParamData.IGetKnotPoints
  - ISplineParamData.SetKnotPoints
keywords:
  - getknotpoints
  - isplineparamdata
  - spline
  - param
  - data
  - knot
  - points
  - object
  - boolean
  - bcurve
  - vb
  - net
  - vba
  - parameterization
  - parameters
---

# ISplineParamData.GetKnotPoints

Gets the knot vector for the spline.

## Signature

```csharp
System.Boolean GetKnotPoints( 
   out System.Object
KnotPoints
)
```
## Parameters

- `KnotPoints` (System.Object): Array of double values between 0 and 1, inclusive ( see Remarks )

## Return Value

True if successful, false if not

## Remarks

Before calling this method, call
ISplineParamData::KnotPointsCount
to get the size of the KnotPoints array.
Together with
control points
, knots determine the shape and smoothness of a spline. The knot vector divides the parametric space into intervals or knot spans. These intervals may be uniform or non-uniform. Each interval governs a different control point.

## Examples

- Get BCurve Spline Points (C#) (Get_BCurve_Spline_Points_Example_CSharp.htm)
- Get BCurve Spline Points (VB.NET) (Get_BCurve_Spline_Points_Example_VBNET.htm)
- Get BCurve Spline Points (VBA) (Get_BCurve_Spline_Points_Example_VB.htm)
- Get P-Spline Parameterization Data (C#) (Get_P-Spline_Parameterization_Data_Example_CSharp.htm)
- Get P-Spline Parameterization Data (VB.NET) (Get_P-Spline_Parameterization_Data_Example_VBNET.htm)
- Get P-Spline Parameterization Data (VBA) (Get_P-Spline_Parameterization_Data_Example_VB.htm)
- Get Spline's Parameters (C#) (Get_Spline's_Parameters_Example_CSharp.htm)
- Get Spline's Parameters (VB.NET) (Get_Spline's_Parameters_Example_VBNET.htm)
- Get Spline's Parameters (VBA) (Get_Spline's_Parameters_Example_VB.htm)

## See Also

- `ISplineParamData.IGetKnotPoints`
- `ISplineParamData.SetKnotPoints`