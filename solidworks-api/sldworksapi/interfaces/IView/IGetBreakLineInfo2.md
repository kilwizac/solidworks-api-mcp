---
type: method
interface: IView
member: IGetBreakLineInfo2
returns: System.Double
parameters:
  -
    name: ArraySize
    type: System.Int32
    description: Number of break lines
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.BreakLineGap
  - IView.GetBreakLineInfo2
  - IView.GetBreakLines
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
  - igetbreaklineinfo2
  - line
  - info2
  - array
  - size
  - int32
  - double
---

# IView.IGetBreakLineInfo2

Gets information for all of the break lines in this view.

## Signature

```csharp
System.Double IGetBreakLineInfo2( 
   System.Int32
ArraySize
)
```
## Parameters

- `ArraySize` (System.Int32): Number of break lines

## Return Value

in-process, unmanaged C++: Pointer to an array of break line information (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IView::GetBreakLineCount2
to get the value for ArraySize.
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

## See Also

- `IView.BreakLineGap`
- `IView.GetBreakLineInfo2`
- `IView.GetBreakLines`
- `IView.IGetBreakLines`
- `IView.InsertBreak`
- `IView.IsBroken`