---
type: method
interface: IDrSection
member: GetArrowInfo
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.IGetArrowInfo
keywords:
  - arrows
  - section
  - views
  - see
  - also
  - idrsection
  - getarrowinfo
  - dr
  - arrow
  - info
  - object
---

# IDrSection.GetArrowInfo

Gets the position of the arrows for the section line.

## Signature

```csharp
System.Object GetArrowInfo()
```
## Parameters

None.

## Return Value

Array of objects (see Remarks )

## Remarks

The section line in a drawing view has arrows at each end of the line. This method returns an array that consists of 12 doubles, the (X, Y, Z) of the start and end point of one arrow followed by the (X, Y, Z) of the start and end point of the other arrow.
These values are the same as some of the information in the array returned by
IView::GetSectionLineInfo2
. The arrow information in that array also contains the arrow width, height and style. That information is not included in the array returned by this method, but you can get it from the document preference settings because these values are controlled only at the document level, not on an individual section line basis.
See:
IModelDocExtension::GetUserPreferenceDouble
with swDetailingSectionArrowHeight, swDetailingSectionArrowWidth, or swDetailingSectionArrowLength
IModelDocExtension::GetUserPreferenceInteger
with swDetailingArrowStyleForDimensions

## See Also

- `IDrSection.IGetArrowInfo`