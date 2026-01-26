---
type: method
interface: IEdge
member: GetCurveParams3
returns: CurveParamData
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.GetCurveParams
  - ICurve.GetBCurveParams5
  - ICurve.GetPCurveParams2
  - IEdge.IsParamReversed
keywords:
  - curveparamdata
  - see
  - icurveparamdata
  - curve
  - also
  - icurve
  - parameterization
  - getcurveparams3
  - iedge
  - edge
  - params3
  - param
  - data
  - vb
  - net
  - vba
---

# IEdge.GetCurveParams3

Gets a data object containing the curve parameters for this edge.

## Signature

```csharp
CurveParamData GetCurveParams3()
```
## Parameters

None.

## Return Value

An ICurveParamData object

## Remarks

Before calling this method, you must call
IEdge::GetCurve
to
generate the underlying curve information.
You can use the data returned by this method to determine if a circular edge is a complete circle or an arc.

## Examples

- Get Edge Curve Parameterization (C#) (Get_Edge_Curve_Parameterization_Example_CSharp.htm)
- Get Edge Curve Parameterization (VB.NET) (Get_Edge_Curve_Parameterization_Example_VBNET.htm)
- Get Edge Curve Parameterization (VBA) (Get_Edge_Curve_Parameterization_Example_VB.htm)

## See Also

- `ICoEdge.GetCurveParams`
- `ICurve.GetBCurveParams5`
- `ICurve.GetPCurveParams2`
- `IEdge.IsParamReversed`