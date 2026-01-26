---
type: method
interface: IView
member: GetDimensionInfo6
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetDimensionCount4
  - IView.GetDimensionDisplayInfo5
  - IView.GetDimensionDisplayInfoSize2
  - IView.GetDimensionDisplayString4
  - IView.GetDimensionIds4
  - IView.GetDimensionString4
  - IView.GetFirstDisplayDimension5
  - IView.IGetDimensionDisplayInfo5
  - IView.IGetDimensionDisplayString4
  - IView.IGetDimensionIds4
  - IView.IGetDimensionInfo6
  - IView.IGetDimensionString4
  - IView.ProjectedDimensions
keywords:
  - getdimensioninfo6
  - iview
  - view
  - dimension
  - info6
  - object
---

# IView.GetDimensionInfo6

Obsolete. Superseded by IView::GetDimensionInfo7.

## Signature

```csharp
System.Object GetDimensionInfo6()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The data returned is an array of doubles as follows:
[
dimensionCount
,
[
dimensionType, LineStyleIndex, LineWidth, Color, LayerID, LayerOverride, refPoint1a
[3]
, refPoint1b
[3]
, refPoint2a
[3]
, refPoint2b
[3]
, refPoint3
[3]
, textPoint
[3]
, textDirection
[3]
, dimNormal
[3]
, angularDimInfo
[9]
, precision, arrowLength, arrowHeadWidth, arrowHeadHeight, arrowHeadStyle, witnessGap, witnessExt, dimValue, textHeight, arrowsOut, isDiameter, RadialDimensionflags
]
]
where:
dimensionCount
= number of dimensions found in the drawing view
For each dimension, you have a repeating set of the following data:
dimensionType =
returns 0 = Linear, 1 = Angular, 2 = Radial, 3 = Ordinate
LineStyleIndex
= line style; valid line styles as defined in
swLineStyles_e
LineWidth
= integer value defining the line width; valid width values as defined in
swLineWeights_e
Color
= COLORREF returned as an integer; return value could be 0 or -1 for default color
LayerID
= integer value indicating which layer holds this entity; this integer value is the array index value into the layerList array; obtain the layerList array using
ILayerMgr::GetLayerList
or
ILayerMgr::IGetLayerList
; a value of 1 indicates that this item is not on a layer
LayerOverride
= integer with bit flags set to determine which properties, if any, have been overridden with respect to the
ILayer
default properties; if the bit value is set, then the specific property or properties have been overridden; the bit indicators are: color = 0x1, style = 0x2, and width = 0x4; therefore, if
LayerOverride
was returned as 3, you know the color and style have been specifically set for this item and may not match the default values associated with this item's layer
refPoint1a
[3]
= array of three doubles
refPoint1b
[3]
= array of three doubles
refPoint2a
[3]
= array of three doubles
refPoint2b
[3]
= array of three doubles
refPoint3
[3]
= array of three doubles
textPoint
[3]
= array of three doubles; this is the upper-left corner of the dimension bounding box
textDirection
[3]
= array of three doubles
dimNormal
[3]
= array of three doubles
angularDimInfo
[9]
This data is only returned for angular dimensions; the array of 9 values is as follows:
quadrant
= as defined in
swQuadant_e
directionLine1
[3] = array of three doubles
directionLine2
[3] = array of three doubles
isInteriorAngle
= BOOLEAN returned as a double; true if it is an interior angle
isFlipped
= BOOLEAN returned as a double; true if it is flipped
precision
= number of decimal places
arrowLength
= arrow length
arrowHeadWidth
= arrowhead width
arrowHeadHeight
= arrowhead height
arrowHeadStyle
= arrowhead style as defined in
swArrowStyle_e
witnessGap
= extension gap
witnessExt
= extension's extension
dimValue
= dimension value
textHeight
= dimension text height
arrowsOut
= BOOLEAN
returned as a double and is true if the arrows are outside
isDiameter
= BOOLEAN
returned as a double and is used by radial dimensions; if this value is true, then the
dimValue
returned is the diameter value, if false, then the
dimValue
returned is the radial value
RadialDimensionflags  =
bit code defining properties for radial dimensions or 0 if the dimension is not radial. This element contains a bitwise OR of the following values:
RADIAL_INSIDE - Specifies that the arrows of the radial dimension are displayed inside the arc/circle.
RADIAL_2ND_ARROW - Specifies that there should be two outside arrows displayed with the radial dimension.
RADIAL_SOLID_LEADER - Specifies that the leader line should be drawn in solid.
RADIAL_CALLOUT - Specifies that there should be text displayed with the dimension.
RADIAL_IS_RADIAL - Specifies that the leader line should remain radial.
RADIAL_IS_BENT - Specifies that the leader line should be bent at the end.
RADIAL_IS_LINEAR - Specifies that the leader line should be straight at the end.
RADIAL_DOC_2ND_ARROW - Specifies that there should be two outside document arrows displayed with the radial dimension.
RADIAL_HAS_SNAPPED_DIR - Specifies that the arrow should snap to the grid.
The maximum number of doubles contained in the array will be (1 +
dimensionCount
* 51).
This method does not support
hole callouts
.

## See Also

- `IView.GetDimensionCount4`
- `IView.GetDimensionDisplayInfo5`
- `IView.GetDimensionDisplayInfoSize2`
- `IView.GetDimensionDisplayString4`
- `IView.GetDimensionIds4`
- `IView.GetDimensionString4`
- `IView.GetFirstDisplayDimension5`
- `IView.IGetDimensionDisplayInfo5`
- `IView.IGetDimensionDisplayString4`
- `IView.IGetDimensionIds4`
- `IView.IGetDimensionInfo6`
- `IView.IGetDimensionString4`
- `IView.ProjectedDimensions`