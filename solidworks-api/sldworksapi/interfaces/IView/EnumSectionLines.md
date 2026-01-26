---
type: method
interface: IView
member: EnumSectionLines
returns: EnumDrSections
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetSectionLineCount2
  - IView.GetSectionLineStrings
  - IView.GetSectionLines
keywords:
  - enumsectionlines
  - iview
  - view
  - section
  - lines
  - dr
  - sections
---

# IView.EnumSectionLines

Obsolete. Superseded by IView::EnumSectionLines2.

## Signature

```csharp
EnumDrSections EnumSectionLines()
```
## Parameters

None.

## Return Value

Section lines enumeration

## Remarks

This method returns the section lines regardless of whether the view is visible. If the view is hidden, then the section lines are still returned.

## See Also

- `IView.GetSectionLineCount2`
- `IView.GetSectionLineStrings`
- `IView.GetSectionLines`