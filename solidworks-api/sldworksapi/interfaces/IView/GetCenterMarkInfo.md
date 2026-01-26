---
type: method
interface: IView
member: GetCenterMarkInfo
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - ICenterMark
  - IView.AutoInsertCenterMarks
  - IView.GetCenterMarks
  - IView.GetFirstCenterMark
  - IView.IGetCenterMarkInfo
  - IView.IGetCenterMarks
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - center
  - marks
  - view
  - feature
  - ifeature
  - getcentermarkinfo
  - mark
  - info
  - object
---

# IView.GetCenterMarkInfo

Gets information about each center mark that is a feature in the view.

## Signature

```csharp
System.Object GetCenterMarkInfo()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

Center marks are now annotations. Previously, center marks were features. This method is only valid for center marks that are features.
The return value is the following array of doubles:
[
numCenterMarks,
[
numCenterMarkLines
,
lineType1
,
plus1StartPt
[3],
plus1EndPt
[3],
lineType2
,
plus2StartPt
[3],
plus2EndPt
[3],
[
lineType, lineStartPt
[3],
lineEndPt
[3]
]
]
]
where:
numCenterMarks
= is the number of center marks in this view. See also
IView::GetCenterMarkCount2
.
The following set of data repeats itself for each center mark in the view. The number of times the information is given is
numCenterMarks
:
numCenterMarkLines
= number of centermark lines in the current center mark. Every center mark has at least two lines. These two lines represent the plus at the center of the circle.
lineType1
= line type associated with the first plus-sign line. See the
swLineTypes_e
enumeration.
plus1StartPt
[3]
= X,Y,Z start point of the first line in the plus sign.
plus1EndPt
[3]
= X,Y,Z end point of the first line in the plus sign.
lineType2
= line type associated with the second plus-sign line. See the
swLineTypes_e
enumeration.
plus2StartPt
[3]
= X,Y,Z start point of the second line in the plus sign.
plus2EndPt
[3]
= X,Y,Z end point of the second line in the plus sign.
This set of data also repeats itself for the remaining centermark lines in this particular center mark. The number of times this information is given is (
numCenterMarkLines
- 2)
:
LineType
= line type associated with the second plus-sign line. See the
swLineTypes_e
enumeration.
lineStartPt
[3] = X,Y,Z start point for this centermark line.
lineEndPt
[3] = X,Y,Z end point for this centermark line.

## See Also

- `ICenterMark`
- `IView.AutoInsertCenterMarks`
- `IView.GetCenterMarks`
- `IView.GetFirstCenterMark`
- `IView.IGetCenterMarkInfo`
- `IView.IGetCenterMarks`