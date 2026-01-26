---
type: method
interface: ISketchBlockDefinition
member: GetSplineParamsCount
returns: System.Int32
parameters:
  -
    name: ArraySize
    type: System.Int32
    description: Size of the array needed to hold the spline parameters data
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetSplineCount
  - ISketchBlockDefinition.GetSplineInterpolateCount
  - ISketchBlockDefinition.GetSplineParams
  - ISketchBlockDefinition.GetSplines2
  - ISketchBlockDefinition.GetSplinesInterpolate
  - ISketchBlockDefinition.IGetSplineParams
  - ISketchBlockDefinition.IGetSplines2
  - ISketchBlockDefinition.IGetSplinesInterpolate
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - splines
  - parameters
  - iparameter
  - getsplineparamscount
  - sketch
  - block
  - definition
  - spline
  - params
  - count
  - array
  - size
  - int32
---

# ISketchBlockDefinition.GetSplineParamsCount

Gets the number of splines in the sketch block definition and the size of array required to hold the data for the parameters of these splines.

## Signature

```csharp
System.Int32 GetSplineParamsCount( 
   out System.Int32
ArraySize
)
```
## Parameters

- `ArraySize` (System.Int32): Size of the array needed to hold the spline parameters data

## Return Value

Number of splines in this sketch block definition

## Remarks

The ArraySize value is intended to be used as the input ArraySize argument to
ISketchBlockDefinition::IGetSplineParams
.

## See Also

- `ISketchBlockDefinition.GetSplineCount`
- `ISketchBlockDefinition.GetSplineInterpolateCount`
- `ISketchBlockDefinition.GetSplineParams`
- `ISketchBlockDefinition.GetSplines2`
- `ISketchBlockDefinition.GetSplinesInterpolate`
- `ISketchBlockDefinition.IGetSplineParams`
- `ISketchBlockDefinition.IGetSplines2`
- `ISketchBlockDefinition.IGetSplinesInterpolate`