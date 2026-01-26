---
type: property
interface: ICurveParamData
member: UMinValue
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - uminvalue
  - icurveparamdata
  - curve
  - param
  - data
  - min
  - value
  - double
  - edge
  - parameterization
  - vb
  - net
  - vba
readonly: true
---

# ICurveParamData.UMinValue

Gets the minimum U parameter value.

## Signature

```csharp
System.Double UMinValue {get;}
```
## Parameters

None.

## Return Value

Minimum U parameter value

## Remarks

The minimum U parameter must always be smaller than the maximum U parameter.
If the curve and edge are in opposite directions (
ICurveParamData::Sense
returns false) and the minimum U parameter is larger than the maximum U parameter, then the parameters are in negative parameter space.
F
or example, if ICurveParamData::Sense is false, minimum U parameter is 10, and maximum U parameter is 5, then ICurveParamData::UMinValue = -10 and
ICurveParamData::UMaxValue
= -5.
To normalize the values in positive parameter space, swap the two U parameter values and then negate them, so that the values of the minimum U parameter is 5 and the maximum U parameter is 10.
If the curve is closed and the curve starts and ends at the same point, then ICurveParamData::UMinValue and ICurveParamData::UMaxValue are a period apart.

## Examples

- Get Edge Curve Parameterization (C#) (Get_Edge_Curve_Parameterization_Example_CSharp.htm)
- Get Edge Curve Parameterization (VB.NET) (Get_Edge_Curve_Parameterization_Example_VBNET.htm)
- Get Edge Curve Parameterization (VBA) (Get_Edge_Curve_Parameterization_Example_VB.htm)