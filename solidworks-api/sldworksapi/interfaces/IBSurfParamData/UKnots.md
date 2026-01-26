---
type: property
interface: IBSurfParamData
member: UKnots
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IBSurfParamData.VKnots
keywords:
  - uknots
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

# IBSurfParamData.UKnots

Gets the knot vector in the U direction.

## Signature

```csharp
System.Object UKnots {get;}
```
## Parameters

None.

## Return Value

Array of knot doubles

## Remarks

Returned array contains (
control-point column count
+
U order
) knot values. If the surface is periodic in the U direction, then data is converted and returned in a non-periodic form with additional knots added to the surface ends.

## Examples

- Get B-Spline Surface Parameterization Data (C#) (Get_B-Spline_Surface_Parameterization_Data_Example_CSharp.htm)
- Get B-Spline Surface Parameterization Data (VB.NET) (Get_B-Spline_Surface_Parameterization_Data_Example_VBNET.htm)
- Get B-Spline Surface Parameterization Data (VBA) (Get_B-Spline_Surface_Parameterization_Data_Example_VB.htm)

## See Also

- `IBSurfParamData.VKnots`