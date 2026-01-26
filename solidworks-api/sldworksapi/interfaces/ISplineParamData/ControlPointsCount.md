---
type: property
interface: ISplineParamData
member: ControlPointsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISplineParamData.GetControlPoints
  - ISplineParamData.IGetControlPoints
keywords:
  - controlpointscount
  - isplineparamdata
  - spline
  - param
  - data
  - control
  - points
  - count
  - int32
  - bcurve
  - vb
  - net
  - vba
  - parameters
readonly: null
---

# ISplineParamData.ControlPointsCount

Gets and sets the number of control points in the spline.

## Signature

```csharp
System.Int32 ControlPointsCount {get; set;}
```
## Parameters

None.

## Return Value

Number of control points

## Remarks

The number of control points must be greater than or equal to the
order
of the spline.

## Examples

- Get BCurve Spline Points (C#) (Get_BCurve_Spline_Points_Example_CSharp.htm)
- Get BCurve Spline Points (VB.NET) (Get_BCurve_Spline_Points_Example_VBNET.htm)
- Get BCurve Spline Points (VBA) (Get_BCurve_Spline_Points_Example_VB.htm)
- Get Spline's Parameters (C#) (Get_Spline's_Parameters_Example_CSharp.htm)
- Get Spline's Parameters (VB.NET) (Get_Spline's_Parameters_Example_VBNET.htm)
- Get Spline's Parameters (VBA) (Get_Spline's_Parameters_Example_VB.htm)

## See Also

- `ISplineParamData.GetControlPoints`
- `ISplineParamData.IGetControlPoints`