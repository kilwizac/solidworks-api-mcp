---
type: property
interface: IBSurfParamData
member: UPeriodicity
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IBSurfParamData.VPeriodicity
keywords:
  - uperiodicity
  - ibsurfparamdata
  - ib
  - surf
  - param
  - data
  - periodicity
  - boolean
  - spline
  - surface
  - parameterization
  - vb
  - net
  - vba
readonly: true
---

# IBSurfParamData.UPeriodicity

Gets whether the surface is periodic in the U direction.

## Signature

```csharp
System.Boolean UPeriodicity {get;}
```
## Parameters

None.

## Return Value

True if surface is periodic in U direction, false if not

## Remarks

If a surface is periodic in one direction (that is, cylinder, cone, torus (apple and lemon shapes), spheres), then U is the periodic direction.

## Examples

- Get B-Spline Surface Parameterization Data (C#) (Get_B-Spline_Surface_Parameterization_Data_Example_CSharp.htm)
- Get B-Spline Surface Parameterization Data (VB.NET) (Get_B-Spline_Surface_Parameterization_Data_Example_VBNET.htm)
- Get B-Spline Surface Parameterization Data (VBA) (Get_B-Spline_Surface_Parameterization_Data_Example_VB.htm)

## See Also

- `IBSurfParamData.VPeriodicity`