---
type: property
interface: ISplineParamData
member: KnotPointsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISplineParamData.GetKnotPoints
  - ISplineParamData.IGetKnotPoints
keywords:
  - knotpointscount
  - isplineparamdata
  - spline
  - param
  - data
  - knot
  - points
  - count
  - int32
  - bcurve
  - vb
  - net
  - vba
  - parameterization
  - parameters
readonly: true
---

# ISplineParamData.KnotPointsCount

Gets the number of knots in the spline.

## Signature

```csharp
System.Int32 KnotPointsCount {get;}
```
## Parameters

None.

## Return Value

Number of knots.

## Remarks

The number of knots depends on the periodicity of the spline:
If...
Then this method returns...
periodic
=1
control points count
+ 1
periodic
=0
control points count
+
order

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

- `ISplineParamData.GetKnotPoints`
- `ISplineParamData.IGetKnotPoints`