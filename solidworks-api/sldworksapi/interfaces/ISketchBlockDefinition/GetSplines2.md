---
type: method
interface: ISketchBlockDefinition
member: GetSplines2
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
  - ISketchBlockDefinition.IGetSplines2
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - splines
  - getsplines2
  - sketch
  - block
  - definition
  - splines2
  - object
---

# ISketchBlockDefinition.GetSplines2

Gets the spline points by tessellation instead of by interpolation as is done by ISketchBlockDefinition::GetSplinesInterpolate and ISketchBlockDefinition::IGetSplinesInterpolate.

## Signature

```csharp
System.Object GetSplines2()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

Format of return values is an array of doubles with the format:
[ [
Color, LineType, LineStyleIndex, LineWidth, LayerID, LayerOverride, NumSplinePoints, [x,y,z]
]
]
where:
Color
= COLORREF returned as an integer. Return value could be 0 or -1 for default color.
LineType
= line type. Valid returns as defined in
swLineTypes_e
. A lineType is a combination of a lineStyle and lineWeight.
LineStyleIndex
= line style. Valid line styles as defined in
swLineStyles_e
.
LineWidth
= integer value defining the line width. Valid width values as defined in
swLineWeights_e
.
LayerID
= integer value indicating which layer holds this entity. Obtain the
ILayer
object by passing this integer value to
ILayerMgr::GetLayerById
or
ILayerMgr::IGetLayerById
.
LayerOverride
= integer with bit flags set to determine which properties, if any, have been overridden with respect to the Layer default properties.
If the bit value is set, then the specific property or properties have been overridden. The bit indicators are: color = 0x1, style = 0x2, and width = 0x4. Therefore, if LayerOverride was returned as 3, you know the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
This complete set of data repeats itself for each spline found in the sketch block definition. For each spline, the array returned contains the color, line type, number of spline points in the spline, and X,Y,Z value for each of those points. Therefore, the [x,y,z] parameter is an array of NumSplinePoints, which can vary in size from spline to spline.
The
[x,y,z]
points for each spline are not the same as the points used to generate the spline. This method tessellates the spline based on the display quality and place points along the spline appropriately.

## See Also

- `ISketchBlockDefinition.GetSplineCount`
- `ISketchBlockDefinition.GetSplineInterpolateCount`
- `ISketchBlockDefinition.GetSplineParams`
- `ISketchBlockDefinition.GetSplineParamsCount`
- `ISketchBlockDefinition.IGetSplineParams`
- `ISketchBlockDefinition.IGetSplines2`