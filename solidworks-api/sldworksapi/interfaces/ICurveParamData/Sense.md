---
type: property
interface: ICurveParamData
member: Sense
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurveParamData.UMaxValue
  - ICurveParamData.UMinValue
keywords:
  - sense
  - icurveparamdata
  - curve
  - param
  - data
  - boolean
  - edge
  - parameterization
  - vb
  - net
  - vba
readonly: true
---

# ICurveParamData.Sense

Gets whether the curve and edge are in the same direction.

## Signature

```csharp
System.Boolean Sense {get;}
```
## Parameters

None.

## Return Value

True if curve and edge are in the same direction, false if not

## Remarks

If this method returns False, then the curve and edge are in opposite directions. In that case,
ICurveParamData::StartPoint
corresponds to the end of the edge,
ICurveParamData::EndPoint
corresponds to the start of the edge.

## Examples

- Get Edge Curve Parameterization (C#) (Get_Edge_Curve_Parameterization_Example_CSharp.htm)
- Get Edge Curve Parameterization (VB.NET) (Get_Edge_Curve_Parameterization_Example_VBNET.htm)
- Get Edge Curve Parameterization (VBA) (Get_Edge_Curve_Parameterization_Example_VB.htm)

## See Also

- `ICurveParamData.UMaxValue`
- `ICurveParamData.UMinValue`