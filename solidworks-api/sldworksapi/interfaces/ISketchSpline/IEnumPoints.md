---
type: method
interface: ISketchSpline
member: IEnumPoints
returns: EnumSketchPoints
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.DeletePoint
  - ISketchSpline.GetPointCount
  - ISketchSpline.GetPoints2
  - ISketchSpline.InsertPoint
  - ISketchSpline.ShowInflectionPoints
  - ISplineHandle.SplinePointNumber
keywords:
  - ienumpoints
  - isketchspline
  - sketch
  - spline
  - points
---

# ISketchSpline.IEnumPoints

Gets an enumeration of sketch points for the spline.

## Signature

```csharp
EnumSketchPoints IEnumPoints()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of enumeration of sketch points or NULL if the operation fails VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## See Also

- `ISketchSpline.DeletePoint`
- `ISketchSpline.GetPointCount`
- `ISketchSpline.GetPoints2`
- `ISketchSpline.InsertPoint`
- `ISketchSpline.ShowInflectionPoints`
- `ISplineHandle.SplinePointNumber`