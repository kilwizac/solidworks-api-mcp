---
type: method
interface: ISketchSpline
member: AddTangencyControl
returns: SplineHandle
parameters:
  -
    name: XPos
    type: System.Double
    description: x coordinate of the new handle
  -
    name: YPos
    type: System.Double
    description: y coordinate of the new handle
  -
    name: ZPos
    type: System.Double
    description: z coordinate of the new handle
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.AddCurvatureControl
  - ISketchSpline.GetSplineHandleCount
  - ISketchSpline.GetSplineHandles
  - ISketchSpline.IGetSplineHandles
  - ISketchSpline.ResetAllHandles
  - ISketchSpline.ShowSplineHandles
  - ISplineHandle.TangentDriving
  - ISplineHandle.TangentMagnitude
  - ISplineHandle.TangentPolarDirection
  - ISplineHandle.TangentRadialDirection
keywords:
  - addtangencycontrol
  - isketchspline
  - sketch
  - spline
  - add
  - tangency
  - control
  - pos
  - double
  - handle
  - curvature
  - controls
  - vba
---

# ISketchSpline.AddTangencyControl

Adds a new handle to help control the tangency of this spline.

## Signature

```csharp
SplineHandle AddTangencyControl( 
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

- `XPos` (System.Double): x coordinate of the new handle
- `YPos` (System.Double): y coordinate of the new handle
- `ZPos` (System.Double): z coordinate of the new handle

## Return Value

Spline handle

## Examples

- Set Spline Tangency and Curvature Controls (VBA) (Set_Spline_Tangency_and_Curvature_Controls_Example_VB.htm)

## See Also

- `ISketchSpline.AddCurvatureControl`
- `ISketchSpline.GetSplineHandleCount`
- `ISketchSpline.GetSplineHandles`
- `ISketchSpline.IGetSplineHandles`
- `ISketchSpline.ResetAllHandles`
- `ISketchSpline.ShowSplineHandles`
- `ISplineHandle.TangentDriving`
- `ISplineHandle.TangentMagnitude`
- `ISplineHandle.TangentPolarDirection`
- `ISplineHandle.TangentRadialDirection`