---
type: method
interface: ISketchSpline
member: ModifyKnot
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 1-based index of the interior knot to modify (see Remarks )
  -
    name: DKnot
    type: System.Double
    description: Knot value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.ModifyControlPoint
  - ISplineParamData.SetKnotPoints
keywords:
  - modifyknot
  - isketchspline
  - sketch
  - spline
  - modify
  - knot
  - index
  - int32
  - double
  - boolean
  - edit
  - vba
---

# ISketchSpline.ModifyKnot

Modifies the specified interior knot of this sketch spline.

## Signature

```csharp
System.Boolean ModifyKnot( 
   System.Int32
Index
,
   System.Double
DKnot
)
```
## Parameters

- `Index` (System.Int32): 1-based index of the interior knot to modify (see Remarks )
- `DKnot` (System.Double): Knot value

## Return Value

True if knot successfully modifed, false if not

## Remarks

Interior knots occur after the first set of 0s and before the last set of 1s in the knot array. If the knot array is [ 0 0 0 0 0.279240779943874 0.55 0.720759220056126 1 1 1 1 ], then the interior knots are 0.279240779943874, 0.55, and 0.720759220056126.
Before calling this method, call
ISplineParamData::GetKnotPoints
and
ISplineParamData::KnotPointsCount
to help specify Index and the new knot value.
After calling this method, you must call
IModelDoc2::ForceRebuild3
to update the sketch.

## Examples

- Edit Spline (VBA) (Edit_Spline_Example_VB.htm)

## See Also

- `ISketchSpline.ModifyControlPoint`
- `ISplineParamData.SetKnotPoints`