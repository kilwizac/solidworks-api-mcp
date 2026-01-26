---
type: method
interface: ISketchSpline
member: AddCurvatureControl
returns: SplineHandle
parameters:
  -
    name: XPos
    type: System.Double
    description: x coordinate for the pointer
  -
    name: YPos
    type: System.Double
    description: y coordinate for the pointer
  -
    name: ZPos
    type: System.Double
    description: z coordinate for the pointer
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.AddTangencyControl
  - ISketchSpline.GetSplineHandleCount
  - ISketchSpline.GetSplineHandles
  - ISketchSpline.IGetSplineHandles
  - ISketchSpline.ResetAllHandles
  - ISketchSpline.ShowCurvatureCombs
  - ISketchSpline.ShowSplineHandles
  - ISplineHandle.Curvature
  - ISplineHandle.CurvatureControlled
  - ISplineHandle.RadiusOfCurvature
keywords:
  - addcurvaturecontrol
  - isketchspline
  - sketch
  - spline
  - add
  - curvature
  - control
  - pos
  - double
  - handle
  - tangency
  - controls
  - vba
---

# ISketchSpline.AddCurvatureControl

Adds a curvature control pointer to this spline.

## Signature

```csharp
SplineHandle AddCurvatureControl( 
   System.Double
XPos
,
   System.Double
YPos
,
   System.Double
ZPos
)
```
## Parameters

- `XPos` (System.Double): x coordinate for the pointer
- `YPos` (System.Double): y coordinate for the pointer
- `ZPos` (System.Double): z coordinate for the pointer

## Return Value

Spline handle

## Examples

- Set Spline Tangency and Curvature Controls (VBA) (Set_Spline_Tangency_and_Curvature_Controls_Example_VB.htm)

## See Also

- `ISketchSpline.AddTangencyControl`
- `ISketchSpline.GetSplineHandleCount`
- `ISketchSpline.GetSplineHandles`
- `ISketchSpline.IGetSplineHandles`
- `ISketchSpline.ResetAllHandles`
- `ISketchSpline.ShowCurvatureCombs`
- `ISketchSpline.ShowSplineHandles`
- `ISplineHandle.Curvature`
- `ISplineHandle.CurvatureControlled`
- `ISplineHandle.RadiusOfCurvature`