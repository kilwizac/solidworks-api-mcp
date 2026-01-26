---
type: property
interface: ISplineParamData
member: Order
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISplineParamData.GetSegments
  - ISplineParamData.IGetSegments
keywords:
  - order
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

# ISplineParamData.Order

Gets and sets the number of nearby control points that influence any given point on the curve.

## Signature

```csharp
System.Int32 Order {get; set;}
```
## Parameters

None.

## Return Value

The degree of the spline polynomial + 1

## Remarks

A spline of order...
is represented by a ...
of degree...
2
linear polynomial
1
3
quadratic polynomial
2
4
cubic polynomial
3

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

- `ISplineParamData.GetSegments`
- `ISplineParamData.IGetSegments`