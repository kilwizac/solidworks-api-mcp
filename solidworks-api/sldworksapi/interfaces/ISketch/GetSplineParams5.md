---
type: method
interface: ISketch
member: GetSplineParams5
returns: System.Object
parameters:
  -
    name: ForceNonPeriodic
    type: System.Boolean
    description: True to attempt to convert a non-periodic spline to a periodic one, false to not
  -
    name: Index
    type: System.Int32
    description: 0-based index indicating the spline whose parameterization data to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSplineCount
  - ISketch.GetSplineInterpolateCount
  - ISketch.GetSplineParamsCount
  - ISketch.GetSplines
  - ISketch.GetSplinesInterpolate
  - ISketch.IGetSplines
  - ISketch.IGetSplinesInterpolate
keywords:
  - parameters
  - see
  - also
  - iparameter
  - splines
  - sketch
  - isketch
  - entities
  - splineparamdata
  - isplineparamdata
  - getsplineparams5
  - spline
  - params5
  - force
  - non
  - periodic
  - boolean
  - index
  - int32
  - object
  - each
  - vb
  - net
  - vba
---

# ISketch.GetSplineParams5

Gets the parameterization data of the specified spline in this sketch.

## Signature

```csharp
System.Object GetSplineParams5( 
   System.Boolean
ForceNonPeriodic
,
   System.Int32
Index
)
```
## Parameters

- `ForceNonPeriodic` (System.Boolean): True to attempt to convert a non-periodic spline to a periodic one, false to not
- `Index` (System.Int32): 0-based index indicating the spline whose parameterization data to get

## Return Value

ISplineParamData

## Examples

- Get Each Spline's Parameters (C#) (Get_Each_Splines_Parameters_Example_CSharp.htm)
- Get Each Spline's Parameters (VB.NET) (Get_Each_Splines_Parameters_Example_VBNET.htm)
- Get Each Spline's Parameters (VBA) (Get_Each_Splines_Parameters_Example_VB.htm)

## See Also

- `ISketch.GetSplineCount`
- `ISketch.GetSplineInterpolateCount`
- `ISketch.GetSplineParamsCount`
- `ISketch.GetSplines`
- `ISketch.GetSplinesInterpolate`
- `ISketch.IGetSplines`
- `ISketch.IGetSplinesInterpolate`