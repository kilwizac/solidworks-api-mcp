---
type: property
interface: ISplineParamData
member: SegmentCount
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
  - segmentcount
  - isplineparamdata
  - spline
  - param
  - data
  - segment
  - count
  - int32
  - parameterization
  - vb
  - net
  - vba
readonly: true
---

# ISplineParamData.SegmentCount

Gets the number of segments in the spline.

## Signature

```csharp
System.Int32 SegmentCount {get;}
```
## Parameters

None.

## Return Value

Number of segments if a P-spline, -1 if not

## Remarks

This method works only with P-spline parameter data. Before calling this method, call
ICurve::GetPCurveParams2
to generate P-spline parameterization data object for the curve.

## Examples

- Get P-Spline Parameterization Data (C#) (Get_P-Spline_Parameterization_Data_Example_CSharp.htm)
- Get P-Spline Parameterization Data (VB.NET) (Get_P-Spline_Parameterization_Data_Example_VBNET.htm)
- Get P-Spline Parameterization Data (VBA) (Get_P-Spline_Parameterization_Data_Example_VB.htm)

## See Also

- `ISplineParamData.GetSegments`
- `ISplineParamData.IGetSegments`