---
type: method
interface: ISplineParamData
member: IGetKnotPoints
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Size of KnotPoints array
  -
    name: KnotPoints
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of double values between 0 and 1, inclusive VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISplineParamData.GetKnotPoints
keywords:
  - igetknotpoints
  - isplineparamdata
  - spline
  - param
  - data
  - knot
  - points
  - count
  - int32
  - double
  - boolean
---

# ISplineParamData.IGetKnotPoints

Gets all of the knot points of the spline.

## Signature

```csharp
System.Boolean IGetKnotPoints( 
   System.Int32
Count
,
   out System.Double
KnotPoints
)
```
## Parameters

- `Count` (System.Int32): Size of KnotPoints array
- `KnotPoints` (System.Double): in-process, unmanaged C++: Pointer to an array of double values between 0 and 1, inclusive VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if successful, false if not

## Remarks

Before calling this method, call
ISplineParamData::KnotPointsCount
to populate the Count parameter.
Together with
control points
, knots determine the shape and smoothness of a spline. The knot vector divides the parametric space into intervals or knot spans. These intervals may be uniform or non-uniform. Each interval governs a different control point.

## See Also

- `ISplineParamData.GetKnotPoints`