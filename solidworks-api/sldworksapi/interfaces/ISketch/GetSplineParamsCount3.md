---
type: method
interface: ISketch
member: GetSplineParamsCount3
returns: System.Int32
parameters:
  -
    name: ForceNonPeriodic
    type: System.Boolean
    description: True to attempt to convert all non-periodic splines to periodic, false to not
  -
    name: Size
    type: System.Int32
    description: Size of array required for a call to ISketch::IGetSplineParams3
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSplineCount
  - ISketch.GetSplineInterpolateCount
  - ISketch.GetSplineParams3
  - ISketch.GetSplines
  - ISketch.GetSplinesInterpolate
  - ISketch.IGetSplines
  - ISketch.IGetSplinesInterpolate
keywords:
  - splines
  - parameters
  - sketch
  - see
  - also
  - isketch
  - iparameter
  - getsplineparamscount3
  - spline
  - params
  - count3
  - force
  - non
  - periodic
  - boolean
  - size
  - int32
  - vb
  - net
  - vba
---

# ISketch.GetSplineParamsCount3

Gets the number of splines in the sketch and the size of array required to hold the data for them.

## Signature

```csharp
System.Int32 GetSplineParamsCount3( 
   System.Boolean
ForceNonPeriodic
,
   out System.Int32
Size
)
```
## Parameters

- `ForceNonPeriodic` (System.Boolean): True to attempt to convert all non-periodic splines to periodic, false to not
- `Size` (System.Int32): Size of array required for a call to ISketch::IGetSplineParams3

## Return Value

Number of splines

## Examples

- Get Spline's Parameters (C#) (Get_Spline's_Parameters_Example_CSharp.htm)
- Get Spline's Parameters (VB.NET) (Get_Spline's_Parameters_Example_VBNET.htm)
- Get Spline's Parameters (VBA) (Get_Spline's_Parameters_Example_VB.htm)

## See Also

- `ISketch.GetSplineCount`
- `ISketch.GetSplineInterpolateCount`
- `ISketch.GetSplineParams3`
- `ISketch.GetSplines`
- `ISketch.GetSplinesInterpolate`
- `ISketch.IGetSplines`
- `ISketch.IGetSplinesInterpolate`