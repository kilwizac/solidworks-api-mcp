---
type: method
interface: ISketchSpline
member: ResetAllHandles
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.GetSplineHandleCount
  - ISketchSpline.GetSplineHandles
  - ISketchSpline.IGetSplineHandles
  - ISketchSpline.ShowSplineHandles
keywords:
  - resetallhandles
  - isketchspline
  - sketch
  - spline
  - reset
  - all
  - handles
  - void
  - tangency
  - curvature
  - controls
  - vba
---

# ISketchSpline.ResetAllHandles

Resets all handles to their initial state.

## Signature

```csharp
void ResetAllHandles()
```
## Parameters

None.

## Return Value

Use SplineHandle::Reset to reset one handle to its initial state.

## Examples

- Set Spline Tangency and Curvature Controls (VBA) (Set_Spline_Tangency_and_Curvature_Controls_Example_VB.htm)

## See Also

- `ISketchSpline.GetSplineHandleCount`
- `ISketchSpline.GetSplineHandles`
- `ISketchSpline.IGetSplineHandles`
- `ISketchSpline.ShowSplineHandles`