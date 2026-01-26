---
type: method
interface: IView
member: GetSectionLineInfo2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.EnumSectionLines
  - IView.GetSection
  - IView.GetSectionLines
  - IView.IGetSection
  - IView.IGetSectionLineInfo2
  - IView.IGetSectionLines
keywords:
  - section
  - lines
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - getsectionlineinfo2
  - line
  - info2
  - object
---

# IView.GetSectionLineInfo2

Gets all of the information about the section lines in the view.

## Signature

```csharp
System.Object GetSectionLineInfo2()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

This method gets all of the information on section lines in the view. Before using this method, you can use
IView::GetSectionLineCount2
to determine the size of the data being returned.
The return value is the following array of doubles:
[
numSectionLines
,
layer,
[
numSegments,
[
lineType, startPt[3], endPt[3]
]
,
arrowStart1
[3],
arrowEnd1
[3],
arrowWidth1
,
arrowHeight1
,
arrowStyle1
,
arrowStart2
[3],
arrowEnd2
[3],
arrowWidth2
,
arrowHeight2
,
arrowStyle2
,
textPt1
[3],
textPt2
[3],
textHeight
]
]
where:
numSectionLines
= number of section lines in this view. See also
IView::GetSectionLineCount2
.
layer
= layer information.
The following set of data repeats itself for each section line in the view. The number of times the information is given is numSectionLines:
numSegments
= number of line segments in this section line
The following three variables repeat themselves for each segment in the current section line. The number of times the information is given is numSegments:
lineType
= linetype for this line segment. See
swLineTypes_e
.
startPt[3]
= X,Y,Z start point for the current segment of this section line.
endPt[3]
= X,Y,Z end point for the current segment of this section line.
arrowStart1[3]
= X,Y,Z start point for arrow head 1 on this section line.
arrowEnd1[3]
= X,Y,Z end point for arrow head 1 on this section line.
arrowWidth1
= width of arrow 1 on this section line.
arrowHeight1
= height of arrow 1 on this section line.
arrowStyle1
= style of arrow 1 on this section line.
arrowStart2[3]
= X,Y,Z start point for arrow head 2 on this section line.
arrowEnd2[3]
= X,Y,Z end point for arrow head 2 on this section line.
arrowWidth2
= width of arrow 2 on this section line.
arrowHeight2
= height of arrow 2 on this section line.
arrowStyle2
= style of arrow 2 on this section line.
textPt1[3]
= X,Y,Z point for the text location near arrow 1.
textPt2[3]
= X,Y,Z point for the text location near arrow 2.
textHeight
= text height in meters.
To get the actual text value, use
IView::GetSectionLineStrings
or
IView::IGetSectionLineStrings
.
The number of line segments, line segment geometry, and line type returned depend on the drawing's display standard.

## See Also

- `IView.EnumSectionLines`
- `IView.GetSection`
- `IView.GetSectionLines`
- `IView.IGetSection`
- `IView.IGetSectionLineInfo2`
- `IView.IGetSectionLines`