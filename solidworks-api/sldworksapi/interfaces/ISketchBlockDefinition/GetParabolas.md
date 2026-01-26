---
type: method
interface: ISketchBlockDefinition
member: GetParabolas
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetParabolaCount
  - ISketchBlockDefinition.IGetParabolas
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - parabolas
  - getparabolas
  - sketch
  - block
  - definition
  - object
---

# ISketchBlockDefinition.GetParabolas

Gets information about all of the parabolas in this block definition.

## Signature

```csharp
System.Object GetParabolas()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The return values are in an array of doubles:
[
Color
,
LineType
,
LineStyleIndex
,
LineWidth
,
LayerID
,
LayerOverride
,
StartPt[3]
,
EndPt[3]
,
FocusPt[3]
,
ApexPt[3]
]
where:
Color
= COLORREF returned as an integer. Return value could be 0 or -1 for default color.
LineType
= line type. Valid returns as defined in
swLineTypes_e
. A
LineType
is a combination of a line style and line weight.
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
= integer with bit flags set to determine which properties, if any, have been overridden with respect to the Layer default properties. If the bit value is set, then the specific property or properties have been overridden. The bit indicators are: color = 0x1, style = 0x2, and width = 0x4. Therefore, if
LayerOverride
was returned as 3, you know the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
StartPt[3]
= array of 3 doubles (X,Y,Z) describing the parabola start point.
EndPt[3]
= array of 3 doubles (X,Y,Z) describing the parabola end point.
FocusPt[3]
= array of 3 doubles (X,Y,Z) describing the parabola focus point.
ApexPt[3]
= array of 3 doubles (X,Y,Z) describing the parabola apex point.
This set of data repeats for each parabola in the sketch. The size of the array is (NumParabolas * 18).

## See Also

- `ISketchBlockDefinition.GetParabolaCount`
- `ISketchBlockDefinition.IGetParabolas`