---
type: method
interface: ISketch
member: GetSplineParams4
returns: SplineParamData
parameters:
  -
    name: ForceNonPeriodic
    type: System.Boolean
    description: True to attempt to convert a non-periodic spline to a periodic one, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSplineCount
  - ISketch.GetSplineInterpolateCount
  - ISketch.GetSplineParamsCount3
  - ISketch.GetSplines
  - ISketch.GetSplinesInterpolate
  - ISketch.IGetSplines
  - ISketch.IGetSplinesInterpolate
keywords:
  - getsplineparams4
  - isketch
  - sketch
  - spline
  - params4
  - force
  - non
  - periodic
  - boolean
  - param
  - data
  - parameters
  - vb
  - net
  - vba
---

# ISketch.GetSplineParams4

Obsolete. Superseded by ISketch::GetSplineParams5.

## Signature

```csharp
SplineParamData GetSplineParams4( 
   System.Boolean
ForceNonPeriodic
)
```
## Parameters

- `ForceNonPeriodic` (System.Boolean): True to attempt to convert a non-periodic spline to a periodic one, false to not

## Return Value

ISplineParamData

## Examples

- Get Spline's Parameters (C#) (Get_Spline's_Parameters_Example_CSharp.htm)
- Get Spline's Parameters (VB.NET) (Get_Spline's_Parameters_Example_VBNET.htm)
- Get Spline's Parameters (VBA) (Get_Spline's_Parameters_Example_VB.htm)

## See Also

- `ISketch.GetSplineCount`
- `ISketch.GetSplineInterpolateCount`
- `ISketch.GetSplineParamsCount3`
- `ISketch.GetSplines`
- `ISketch.GetSplinesInterpolate`
- `ISketch.IGetSplines`
- `ISketch.IGetSplinesInterpolate`