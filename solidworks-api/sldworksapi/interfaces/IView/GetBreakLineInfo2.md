---
type: method
interface: IView
member: GetBreakLineInfo2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.BreakLineGap
  - IView.GetBreakLineCount2
  - IView.GetBreakLines
  - IView.IGetBreakLineInfo2
  - IView.IGetBreakLines
  - IView.InsertBreak
  - IView.IsBroken
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - break
  - lines
  - view
  - ibreakline
  - information
  - getbreaklineinfo2
  - line
  - info2
  - object
  - data
  - vba
  - vb
  - net
---

# IView.GetBreakLineInfo2

Gets information for all of the break lines in this view.

## Signature

```csharp
System.Object GetBreakLineInfo2()
```
## Parameters

None.

## Return Value

Array of data for all break lines in the view (see Remarks )

## Remarks

The return value is a one-dimensional array consisting of the following data:
[
breaklineStyle, color, lineType, lineStyleIndex, lineWeight, layerId,
layerOverride, numLines, numArcs, numSplines, [
break line data]
]
where:
breaklineStyle
Break line style as defined in
swBreakLineStyle_e
color
COLORREF returned as an integer; 0 or -1 for default color
lineType
Line type as defined in
swLineTypes_e
; lineType is a combination of a lineStyle and lineWeight
lineStyleIndex
Line style as defined in
swLineStyles_e
lineWeight
Line width as defined in
swLineWeights_e
layerId
An integer value indicating which layer holds this entity;
ILayer
can be obtained by passing this integer value to
ILayerMgr::GetLayerById
and
ILayerMgr::IGetLayerId
layerOverride
An integer with bit flags set to determine which properties, if any, have been overridden with respect to the Layer default properties. If the bit value is set, then the specific property or properties have been overridden. Valid bit values as defined in
swLayerOverride_e
:
color = 0x1
style = 0x2
width = 0x4
Therefore, if LayerOverride is returned as 3, then the color and style are specifically set for this item and may not match the default values associated with this item's layer.
numLines
Number of line segments if a straight or zig zag break
numArcs
Number of arc lines if a curve break
numSplines
Number of spline lines if a jagged break
If the break line style is swBreakLineStyle_e...
Then [
break line data
] is packed with...
swBreakLine_Straight
12 doubles (2 lines * 1 segment * 2 points * 3 coordinates)
swBreakLine_ZigZag
60 doubles (2 lines * 5 segments * 2 points * 3 coordinates)
swBreakLine_SmallZigZag
60 doubles (2 lines * 5 segments * 2 points * 3 coordinates)
swBreakLine_Curve
for each arc line in the break:
arc direction (1 double)
start point (3 doubles)
end point (3 doubles)
center point (3 doubles)
swBreakLine_Jagged
for each spline line in the break:
n
(1 integer)
3*
n
doubles (
n
points * 3 coordinates)
where:
n
is the number of spline points generated based on the jagged cut shape intensity selected by the user in the Break View Property Manager

## Examples

- Get Break Line Data (VBA) (Get_Break_Line_Data_Example_VB.htm)
- Get Break Line Data (VB.NET) (Get_Break_Line_Data_Example_VBNET.htm)
- Get Break Line Data (C#) (Get_Break_Line_Data_Example_CSharp.htm)

## See Also

- `IView.BreakLineGap`
- `IView.GetBreakLineCount2`
- `IView.GetBreakLines`
- `IView.IGetBreakLineInfo2`
- `IView.IGetBreakLines`
- `IView.InsertBreak`
- `IView.IsBroken`