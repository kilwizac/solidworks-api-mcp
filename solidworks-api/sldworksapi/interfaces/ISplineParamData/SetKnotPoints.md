---
type: method
interface: ISplineParamData
member: SetKnotPoints
returns: System.Boolean
parameters:
  -
    name: KnotPoints
    type: System.Object
    description: Array of doubles between 0 and 1, inclusive
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISketchSpline.ModifyKnot
  - ISplineParamData.GetKnotPoints
  - ISplineParamData.IGetKnotPoints
  - ISplineParamData.KnotPointsCount
keywords:
  - setknotpoints
  - isplineparamdata
  - spline
  - param
  - data
  - knot
  - points
  - object
  - boolean
  - parameters
  - vb
  - net
  - vba
---

# ISplineParamData.SetKnotPoints

Sets the knot vector for a spline.

## Signature

```csharp
System.Boolean SetKnotPoints( 
   System.Object
KnotPoints
)
```
## Parameters

- `KnotPoints` (System.Object): Array of doubles between 0 and 1, inclusive

## Return Value

True if successful, false if not

## Remarks

Together with
control points
knots determine the shape and smoothness of a spline. The knot vector divides the parametric space into intervals or knot spans. These intervals may be uniform or non-uniform. Each interval governs a different control point.

## Examples

- Get Spline's Parameters (C#) (Get_Spline's_Parameters_Example_CSharp.htm)
- Get Spline's Parameters (VB.NET) (Get_Spline's_Parameters_Example_VBNET.htm)
- Get Spline's Parameters (VBA) (Get_Spline's_Parameters_Example_VB.htm)

## See Also

- `ISketchSpline.ModifyKnot`
- `ISplineParamData.GetKnotPoints`
- `ISplineParamData.IGetKnotPoints`
- `ISplineParamData.KnotPointsCount`