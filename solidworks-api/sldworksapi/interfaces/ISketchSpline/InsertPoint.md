---
type: method
interface: ISketchSpline
member: InsertPoint
returns: System.Boolean
parameters:
  -
    name: X
    type: System.Double
    description: X coordinate on this spline
  -
    name: Y
    type: System.Double
    description: Y coordinate on this spline
  -
    name: Z
    type: System.Double
    description: Z coordinate on this spline
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.DeletePoint
  - ISketchSpline.GetPointCount
  - ISketchSpline.GetPoints2
  - ISketchSpline.IEnumPoints
  - ISketchSpline.ShowInflectionPoints
  - ISplineHandle.SplinePointNumber
keywords:
  - insertpoint
  - isketchspline
  - sketch
  - spline
  - insert
  - point
  - double
  - boolean
---

# ISketchSpline.InsertPoint

Inserts a point at the specified coordinates of this spline.

## Signature

```csharp
System.Boolean InsertPoint( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `X` (System.Double): X coordinate on this spline
- `Y` (System.Double): Y coordinate on this spline
- `Z` (System.Double): Z coordinate on this spline

## Return Value

True if a point is added to the spline, false if not

## Remarks

This method works only if X, Y, and Z specify a location on this spline. You cannot add a new point that is not on this spline.

## See Also

- `ISketchSpline.DeletePoint`
- `ISketchSpline.GetPointCount`
- `ISketchSpline.GetPoints2`
- `ISketchSpline.IEnumPoints`
- `ISketchSpline.ShowInflectionPoints`
- `ISplineHandle.SplinePointNumber`