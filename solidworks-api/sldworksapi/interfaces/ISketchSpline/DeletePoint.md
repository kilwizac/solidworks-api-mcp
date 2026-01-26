---
type: method
interface: ISketchSpline
member: DeletePoint
returns: System.Boolean
parameters:
  -
    name: Point
    type: SketchPoint
    description: Sketch point to delete (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.GetPointCount
  - ISketchSpline.GetPoints2
  - ISketchSpline.IEnumPoints
  - ISketchSpline.IGetPoints
  - ISketchSpline.InsertPoint
  - ISketchSpline.ShowInflectionPoints
  - ISplineHandle.SplinePointNumber
keywords:
  - deletepoint
  - isketchspline
  - sketch
  - spline
  - delete
  - point
  - boolean
---

# ISketchSpline.DeletePoint

Deletes a point on this spline.

## Signature

```csharp
System.Boolean DeletePoint( 
   SketchPoint
Point
)
```
## Parameters

- `Point` (SketchPoint): Sketch point to delete (see Remarks )

## Return Value

True if the point is deleted, false if not

## Remarks

This method does not work if Point specifies the start or end point of this spline.

## See Also

- `ISketchSpline.GetPointCount`
- `ISketchSpline.GetPoints2`
- `ISketchSpline.IEnumPoints`
- `ISketchSpline.IGetPoints`
- `ISketchSpline.InsertPoint`
- `ISketchSpline.ShowInflectionPoints`
- `ISplineHandle.SplinePointNumber`