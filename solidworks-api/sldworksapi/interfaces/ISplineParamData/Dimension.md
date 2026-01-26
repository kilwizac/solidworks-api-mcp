---
type: property
interface: ISplineParamData
member: Dimension
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - ISplineParamData.GetControlPoints
  - ISplineParamData.GetKnotPoints
  - ISplineParamData.IGetControlPoints
  - ISplineParamData.IGetKnotPoints
keywords:
  - dimension
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

# ISplineParamData.Dimension

Gets and sets the dimension of the spline.

## Signature

```csharp
System.Int32 Dimension {get; set;}
```
## Parameters

None.

## Return Value

1, if one-dimensional 2, if two-dimensional 3, if three-dimensional (non-rational) 4, if four-dimensional (rational)

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

- `ISplineParamData.GetControlPoints`
- `ISplineParamData.GetKnotPoints`
- `ISplineParamData.IGetControlPoints`
- `ISplineParamData.IGetKnotPoints`