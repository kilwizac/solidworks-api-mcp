---
type: method
interface: IView
member: IGetBreakLineInfo
returns: System.Double
parameters:
  -
    name: ArraySize
    type: System.Int32
    description: Number of break lines
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.BreakLineGap
  - IView.GetBreakLineInfo
  - IView.GetBreakLines
  - IView.IGetBreakLines
  - IView.InsertBreak
  - IView.IsBroken
keywords:
  - igetbreaklineinfo
  - iview
  - view
  - break
  - line
  - info
  - array
  - size
  - int32
  - double
---

# IView.IGetBreakLineInfo

Obsolete. Superseded by IView::IGetBreakLineInfo2.

## Signature

```csharp
System.Double IGetBreakLineInfo( 
   System.Int32
ArraySize
)
```
## Parameters

- `ArraySize` (System.Int32): Number of break lines

## Return Value

Array of break line information (see Remarks )

## Remarks

Before calling this method, call
IView::GetBreakLineCount
to get the value for ArraySize.
The return value is the following array of doubles:
[
breaklineStyle, [ color, lineType, lineStyleIndex, lineWeight, layerId,
layerOverride, number of lines, number of arcs ], line data or arc data
]
breaklineStyle
Valid returns are found in
swBreakLineStyle_e
color
COLORREF returned as an integer. Return value could be 0 or -1 for default color
lineType
Valid returns are found in
swLineTypes_e
. A lineType is a combination of a lineStyle and lineWeight.
LineStyleIndex
Valid line styles can be found in
swLineStyles_e.
lineWeight
An integer value defining the line width. Valid width values can be found in
swLineWeights_e
.
layerId
An integer value indicating which layer holds this entity. The
ILayer
object can be obtained by passing this integer value to
ILayerMgr::GetLayerById
and
ILayerMgr::IGetLayerId
.
layerOverride
An integer with bit flags set to determine which properties, if any, have been overridden with respect to the Layer default properties. If the bit value is set, then the specific property or properties have been overridden. The bit indicators are:
color = 0x1
style = 0x2
width = 0x4
Therefore, if LayerOverride is returned as 3, then the color and style were specifically set for this item and may not match the default values associated with this item's layer.
Number of lines
Number of pairs of lines in the break line.
Number of arcs
Number of pairs of arcs in the break line.
Each break line is a pair of line segments:
For...
Then...
swBreakLineStraight
Each has 1 line for a total of 4 points:
LineStartPt[3]
Line1EngPt[3]
Line2StartPt[3]
Line2EndPt[3]
swBreakLineZigZag
Each has 5 lines
swBreakLine_SmallZigZag
Each has 5 lines
swBreakLine_Curve
Each has 2 arcs; data is packed as follows:
arcDirection
startPoint
EndPoint
CenterPoint

## See Also

- `IView.BreakLineGap`
- `IView.GetBreakLineInfo`
- `IView.GetBreakLines`
- `IView.IGetBreakLines`
- `IView.InsertBreak`
- `IView.IsBroken`