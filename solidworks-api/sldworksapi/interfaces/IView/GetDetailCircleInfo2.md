---
type: method
interface: IView
member: GetDetailCircleInfo2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDetail
  - IView.GetDetailCircles
  - IView.IGetDetail
  - IView.IGetDetailCircleInfo2
  - IView.IGetDetailCircles
keywords:
  - detail
  - circles
  - see
  - idetailcircle
  - view
  - also
  - iview
  - drawing
  - views
  - getdetailcircleinfo2
  - circle
  - info2
  - object
  - information
  - vba
---

# IView.GetDetailCircleInfo2

Gets all of the information about each detail circle in the view.

## Signature

```csharp
System.Object GetDetailCircleInfo2()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles:
[
numDetailCircles
,
[
layer
,
centerPt[3], startPt[3], endPt[3], lineType, textPt[3], textHeight, numArrows
, [
arrowTip[3], arrowComponent[3], arrowWidth, arrowHeight, arrowStyle
] ] ]
where:
numDetailCircles
= the number of detail circles in this view. See also
IView::GetDetailCircleCount2
.
The following set of data repeats itself for each detail circle in the view. The number of times the following information is given is
numDetailCircles
:
layer =
integer value indicating which layer holds this entity. Obtain the
ILayer
object by passing this integer value to
ILayerMgr::GetLayerById
or
ILayerMgr::IGetLayerById
.
centerPt[3]
= X,Y,Z center point for this detail circle
startPt[3]
= X,Y,Z start point for this detail circle
endPt[3]
= X,Y,Z end point for this detail circle
lineType
= line type for this detail circle as defined in
swLineTypes_e
textPt[3]
= X,Y,Z point for the text location.
textHeight
= text height in meters
numArrows
= number of arrows for this detail circle.
The following set of data repeats itself for each arrow in the current detail circle. The number of times the following information is given is
numArrows
:
arrowTip[3]
= X,Y,Z start point for this arrow head
arrowComponent[3]
= X,Y,Z component for this arrow head
arrowWidth
= width of this arrow head
arrowHeight
= height of this arrow head
arrowStyle
= style of this arrow head as defined in
swArrowStyle_e
To get the actual text value, see
IView::GetDetailCircleStrings
or
IView::IGetDetailCircleStrings
.
The number of line segments, line segment geometry, and line type returned depend on the drawing's display standard.

## Examples

- Get Detail Circle Information (VBA) (Get_Detail_Circle_Information_Example_VB.htm)

## See Also

- `IView.GetDetail`
- `IView.GetDetailCircles`
- `IView.IGetDetail`
- `IView.IGetDetailCircleInfo2`
- `IView.IGetDetailCircles`