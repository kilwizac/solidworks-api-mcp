---
type: method
interface: IDrSection
member: GetLineInfo
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.IGetLineInfo
  - IDrSection.IGetLineSegmentCount
  - IDrSection.SetLineInfo
  - IView.EnumSectionLines
  - IView.GetSectionLineInfo2
  - IView.GetSectionLines
  - IView.IGetSectionLineInfo2
keywords:
  - lines
  - section
  - views
  - see
  - also
  - idrsection
  - getlineinfo
  - dr
  - line
  - info
  - object
---

# IDrSection.GetLineInfo

Gets the vertices of the section line.

## Signature

```csharp
System.Object GetLineInfo()
```
## Parameters

None.

## Return Value

Array (see Remarks )

## Remarks

This method returns an array that consists of several coordinate pairs. The number of coordinate pairs is determined by the number of line segments in the section line.
These values are the same as some of the information in the array returned by the
IView::GetSectionLineInfo2
. The line segment information in that array also contains the line style. The array returned by this method does not contain that information because it is a document-level setting, and cannot be controlled per section line. Use
IModelDocExtension::GetUserPreferenceInteger
or
IModelDocExtension::SetUserPreferenceInteger
with swLineFontSectionLineStyle to get or set that value.

## See Also

- `IDrSection.IGetLineInfo`
- `IDrSection.IGetLineSegmentCount`
- `IDrSection.SetLineInfo`
- `IView.EnumSectionLines`
- `IView.GetSectionLineInfo2`
- `IView.GetSectionLines`
- `IView.IGetSectionLineInfo2`