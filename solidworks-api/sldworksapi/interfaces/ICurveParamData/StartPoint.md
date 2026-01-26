---
type: property
interface: ICurveParamData
member: StartPoint
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - startpoint
  - icurveparamdata
  - curve
  - param
  - data
  - start
  - point
  - object
  - edge
  - parameterization
  - vb
  - net
  - vba
readonly: true
---

# ICurveParamData.StartPoint

Gets the x, y, and z coordinates for the start point of the curve.

## Signature

```csharp
System.Object StartPoint {get;}
```
## Parameters

None.

## Return Value

Array of three doubles

## Remarks

If
ICurveParamData::Sense
returns false, then the curve and edge are in opposite directions. In that case, start point corresponds to the end of the edge, and
ICurveParamData::EndPoint
corresponds to the start of the edge.

## Examples

- Get Edge Curve Parameterization (C#) (Get_Edge_Curve_Parameterization_Example_CSharp.htm)
- Get Edge Curve Parameterization (VB.NET) (Get_Edge_Curve_Parameterization_Example_VBNET.htm)
- Get Edge Curve Parameterization (VBA) (Get_Edge_Curve_Parameterization_Example_VB.htm)