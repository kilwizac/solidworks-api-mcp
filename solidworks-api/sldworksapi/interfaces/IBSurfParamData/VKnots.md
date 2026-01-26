---
type: property
interface: IBSurfParamData
member: VKnots
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IBSurfParamData.UKnots
keywords:
  - vknots
  - ibsurfparamdata
  - ib
  - surf
  - param
  - data
  - knots
  - object
  - spline
  - surface
  - parameterization
  - vb
  - net
  - vba
readonly: true
---

# IBSurfParamData.VKnots

Gets the knot vector in the V direction.

## Signature

```csharp
System.Object VKnots {get;}
```
## Parameters

None.

## Return Value

Array of knot doubles

## Remarks

Returned array contains (
control-point row count
+
V order
) knot values. If the surface is periodic in the V direction, then data is converted and returned in a non-periodic form with additional knots added to the surface ends.

## Examples

- Get B-Spline Surface Parameterization Data (C#) (Get_B-Spline_Surface_Parameterization_Data_Example_CSharp.htm)
- Get B-Spline Surface Parameterization Data (VB.NET) (Get_B-Spline_Surface_Parameterization_Data_Example_VBNET.htm)
- Get B-Spline Surface Parameterization Data (VBA) (Get_B-Spline_Surface_Parameterization_Data_Example_VB.htm)

## See Also

- `IBSurfParamData.UKnots`