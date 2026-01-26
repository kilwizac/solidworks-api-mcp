---
type: method
interface: ISketchSpline
member: ModifyControlPoint
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 1-based index of the control point to modify
  -
    name: X
    type: System.Double
    description: X coordinate
  -
    name: Y
    type: System.Double
    description: Y coordinate
  -
    name: Z
    type: System.Double
    description: Z coordinate
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.ModifyKnot
  - ISplineParamData.SetControlPoints
keywords:
  - modifycontrolpoint
  - isketchspline
  - sketch
  - spline
  - modify
  - control
  - point
  - index
  - int32
  - double
  - boolean
  - edit
  - vba
---

# ISketchSpline.ModifyControlPoint

Specifies new coordinates for the specified control point of this sketch spline.

## Signature

```csharp
System.Boolean ModifyControlPoint( 
   System.Int32
Index
,
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

- `Index` (System.Int32): 1-based index of the control point to modify
- `X` (System.Double): X coordinate
- `Y` (System.Double): Y coordinate
- `Z` (System.Double): Z coordinate

## Return Value

True if control point successfully modified, false if not

## Remarks

Before calling this method, call
ISplineParamData::GetControlPoints
and
ISplineParamData::ControlPointsCount
to help specify Index and the new coordinates.
After calling this method, you must call
IModelDoc2::ForceRebuild3
to update the sketch.

## Examples

- Edit Spline (VBA) (Edit_Spline_Example_VB.htm)

## See Also

- `ISketchSpline.ModifyKnot`
- `ISplineParamData.SetControlPoints`