---
type: method
interface: ISketchBlockDefinition
member: GetSplineInterpolateCount
returns: System.Int32
parameters:
  -
    name: ArraySize
    type: System.Int32
    description: Size of the array needed to hold the spline interpolation data information
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetSplineCount
  - ISketchBlockDefinition.GetSplineParams
  - ISketchBlockDefinition.GetSplineParamsCount
  - ISketchBlockDefinition.GetSplines2
  - ISketchBlockDefinition.GetSplinesInterpolate
  - ISketchBlockDefinition.IGetSplineParams
  - ISketchBlockDefinition.IGetSplines2
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - splines
  - getsplineinterpolatecount
  - sketch
  - block
  - definition
  - spline
  - interpolate
  - count
  - array
  - size
  - int32
---

# ISketchBlockDefinition.GetSplineInterpolateCount

Gets the number of splines in the sketch block definition and the size of array required to hold the data for the interpolation of these splines.

## Signature

```csharp
System.Int32 GetSplineInterpolateCount( 
   out System.Int32
ArraySize
)
```
## Parameters

- `ArraySize` (System.Int32): Size of the array needed to hold the spline interpolation data information

## Return Value

Number of splines in this sketch block definition

## Remarks

The ArraySize value is intended to be used as the input ArraySize argument to
ISketchBlockDefinition::IGetSplinesInterpolate
.

## See Also

- `ISketchBlockDefinition.GetSplineCount`
- `ISketchBlockDefinition.GetSplineParams`
- `ISketchBlockDefinition.GetSplineParamsCount`
- `ISketchBlockDefinition.GetSplines2`
- `ISketchBlockDefinition.GetSplinesInterpolate`
- `ISketchBlockDefinition.IGetSplineParams`
- `ISketchBlockDefinition.IGetSplines2`