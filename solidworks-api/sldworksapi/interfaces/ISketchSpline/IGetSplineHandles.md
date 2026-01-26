---
type: method
interface: ISketchSpline
member: IGetSplineHandles
returns: SplineHandle
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of spline handles
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
  - igetsplinehandles
  - isketchspline
  - sketch
  - spline
  - handles
  - count
  - int32
  - handle
---

# ISketchSpline.IGetSplineHandles

Gets the handles of this spline.

## Signature

```csharp
SplineHandle IGetSplineHandles( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of spline handles

## Return Value

in-process, unmanaged C++: Pointer to an array of spline handles VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISketchSpline::GetSplineHandleCount
to get the value for Count.

## See Also

- `ISketchSpline.GetSplineHandles`
- `ISketchSpline.ResetAllHandles`
- `ISketchSpline.ShowSplineHandles`