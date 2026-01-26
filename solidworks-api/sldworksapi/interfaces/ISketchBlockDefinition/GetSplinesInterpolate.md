---
type: method
interface: ISketchBlockDefinition
member: GetSplinesInterpolate
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetSplineCount
  - ISketchBlockDefinition.GetSplineInterpolateCount
  - ISketchBlockDefinition.GetSplineParams
  - ISketchBlockDefinition.GetSplineParamsCount
  - ISketchBlockDefinition.IGetSplineParams
  - ISketchBlockDefinition.IGetSplinesInterpolate
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - splines
  - getsplinesinterpolate
  - sketch
  - block
  - definition
  - interpolate
  - object
---

# ISketchBlockDefinition.GetSplinesInterpolate

Gets all of the parameers of the splines by interpolation instead of by tessellation as is done by ISketch::GetSplines2 and ISketch::IGetSplines2.

## Signature

```csharp
System.Object GetSplinesInterpolate()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is an array of doubles formatted as:
[
[NumSplinePoints, [x, y, z] ],
]
This complete set of data repeats itself for each spline found in the sketch block definition. For each spline, the array returned contains the number of spline points in the spline, and the X,Y,Z value for each of those points.
The
[x,y,z]
parameter is an array of NumSplinePoints. For example, if your sketch block definition has two splines and each spline has three points, then the data would be in the following format:
[
3, x1_1, y1_1, z1_1, x2_1, y2_1, z2_1, x3_1, y3_1, z3_1, 3, x1_2, y1_2, z1_2, x2_2, y2_2, z2_2, x3_2, y3_2, z3_2
]
The
[x,y,z]
points for each spline are the same points used to generate the spline.

## See Also

- `ISketchBlockDefinition.GetSplineCount`
- `ISketchBlockDefinition.GetSplineInterpolateCount`
- `ISketchBlockDefinition.GetSplineParams`
- `ISketchBlockDefinition.GetSplineParamsCount`
- `ISketchBlockDefinition.IGetSplineParams`
- `ISketchBlockDefinition.IGetSplinesInterpolate`