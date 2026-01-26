---
type: method
interface: ISketchBlockDefinition
member: GetSplineCount
returns: System.Int32
parameters:
  -
    name: PointCount
    type: System.Int32
    description: Number of points (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetSplineInterpolateCount
  - ISketchBlockDefinition.GetSplineParams
  - ISketchBlockDefinition.GetSplineParamsCount
  - ISketchBlockDefinition.GetSplines2
  - ISketchBlockDefinition.GetSplinesInterpolate
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
  - getsplinecount
  - sketch
  - block
  - definition
  - spline
  - count
  - point
  - int32
---

# ISketchBlockDefinition.GetSplineCount

Gets the number of splines in this block definition.

## Signature

```csharp
System.Int32 GetSplineCount( 
   out System.Int32
PointCount
)
```
## Parameters

- `PointCount` (System.Int32): Number of points (see Remarks )

## Return Value

Number of splines in the block definition

## Remarks

Call this method before calling
ISketchBlockDefiniton::IGetSplines2
. PointCount is the value use to determine the size of the array for this method.

## See Also

- `ISketchBlockDefinition.GetSplineInterpolateCount`
- `ISketchBlockDefinition.GetSplineParams`
- `ISketchBlockDefinition.GetSplineParamsCount`
- `ISketchBlockDefinition.GetSplines2`
- `ISketchBlockDefinition.GetSplinesInterpolate`
- `ISketchBlockDefinition.IGetSplineParams`
- `ISketchBlockDefinition.IGetSplinesInterpolate`