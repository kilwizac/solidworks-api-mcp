---
type: property
interface: ISplineParamData
member: Periodic
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - periodic
  - isplineparamdata
  - spline
  - param
  - data
  - int32
  - bcurve
  - points
  - vb
  - net
  - vba
  - parameterization
  - parameters
readonly: null
---

# ISplineParamData.Periodic

Gets and sets the periodicity of the spline.

## Signature

```csharp
System.Int32 Periodic {get; set;}
```
## Parameters

None.

## Return Value

0 if an open spline, 1 if a closed spline

## Remarks

The
number of knots
in the spline depends on the periodicity of the spline:
If this method returns...
Then the number of knots is...
1
ControlPointsCount
+ 1
0
ControlPointsCount
+
Order

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