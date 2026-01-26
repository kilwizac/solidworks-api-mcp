---
type: method
interface: IDetailCircle
member: GetArrowInfo
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.IGetArrowInfo
keywords:
  - getarrowinfo
  - idetailcircle
  - detail
  - circle
  - arrow
  - info
  - object
---

# IDetailCircle.GetArrowInfo

Gets the position of the arrows for this detail circle.

## Signature

```csharp
System.Object GetArrowInfo()
```
## Parameters

None.

## Return Value

Array containing the arrow position information

## Remarks

The section line in a drawing view has arrows at each end of the line. This method returns an array that contains 12 doubles, the (X, Y, Z) of the start and end point of one arrow, followed by the (X, Y, Z) of the start and end point of the other arrow.
These values match some of the information in the array returned by
IView::GetSectionLineInfo2
and
IViewIGetSectionLineInfo2
; the arrow information near the middle of the array. The arrow information in that array also contains the arrow width, height, and style, which is not in the array returned by this method. To get this information using document preference settings, use
IModelDocExtension::GetUserPreferenceDouble
with swDetailingSectionArrowHeight, swDetailingSectionArrowWidth, or swDetailingSectionArrowLength, and
IModelDocExtension::GetUserPreferenceInteger
with swDetailingArrowStyleForDimensions.

## See Also

- `IDetailCircle.IGetArrowInfo`