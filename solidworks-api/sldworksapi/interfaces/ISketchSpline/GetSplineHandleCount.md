---
type: method
interface: ISketchSpline
member: GetSplineHandleCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.GetSplineHandles
  - ISketchSpline.ResetAllHandles
  - ISketchSpline.ShowSplineHandles
keywords:
  - getsplinehandlecount
  - isketchspline
  - sketch
  - spline
  - handle
  - count
  - int32
---

# ISketchSpline.GetSplineHandleCount

Gets the number of handles in this spline.

## Signature

```csharp
System.Int32 GetSplineHandleCount()
```
## Parameters

None.

## Return Value

Number of handles

## Remarks

Call this method before calling
ISketchSpline::IGetSplineHandles
to get the size of the array for that method.

## See Also

- `ISketchSpline.GetSplineHandles`
- `ISketchSpline.ResetAllHandles`
- `ISketchSpline.ShowSplineHandles`