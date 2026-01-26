---
type: method
interface: ISketchManager
member: CreateSplinesByEqnParams2
returns: System.Object
parameters:
  -
    name: ParamData
    type: SplineParamData
    description: ISplineParamData
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSplineParams4
  - ISketchManager.CreateSpline2
  - ISketchManager.CreateSplineByEqnParams
  - ISketchManager.CreateSplineParamData
  - ISketchManager.ICreateSpline2
  - ISketchManager.ICreateSplineByEqnParams
  - ISketchManager.ICreateSplinesByEqnParams
keywords:
  - sketch
  - entities
  - splines
  - curve
  - see
  - also
  - isketch
  - createsplinesbyeqnparams2
  - isketchmanager
  - manager
  - create
  - eqn
  - params2
  - param
  - data
  - spline
  - object
  - parameters
  - vb
  - net
  - vba
---

# ISketchManager.CreateSplinesByEqnParams2

Creates one or more spline segments using the B-curve parameters provided.

## Signature

```csharp
System.Object CreateSplinesByEqnParams2( 
   SplineParamData
ParamData
)
```
## Parameters

- `ParamData` (SplineParamData): ISplineParamData

## Return Value

Array of sketch segments of the newly created spline

## Examples

- Get Spline's Parameters (C#) (Get_Spline's_Parameters_Example_CSharp.htm)
- Get Spline's Parameters (VB.NET) (Get_Spline's_Parameters_Example_VBNET.htm)
- Get Spline's Parameters (VBA) (Get_Spline's_Parameters_Example_VB.htm)

## See Also

- `ISketch.GetSplineParams4`
- `ISketchManager.CreateSpline2`
- `ISketchManager.CreateSplineByEqnParams`
- `ISketchManager.CreateSplineParamData`
- `ISketchManager.ICreateSpline2`
- `ISketchManager.ICreateSplineByEqnParams`
- `ISketchManager.ICreateSplinesByEqnParams`