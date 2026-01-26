---
type: method
interface: IView
member: GetSectionLineStrings
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
  - IView.GetSectionLineInfo2
  - IView.GetSectionLines
  - IView.IGetSection
  - IView.IGetSectionLineInfo2
  - IView.IGetSectionLineStrings
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
  - getsectionlinestrings
  - line
  - strings
  - object
---

# IView.GetSectionLineStrings

Gets an array of strings; each string represents the text label for a section line in this view.

## Signature

```csharp
System.Object GetSectionLineStrings()
```
## Parameters

None.

## Return Value

Array of strings with one string for each section line in the view

## Remarks

To determine the number of the strings returned, call
IView::GetSectionLineCount2
.

## See Also

- `IView.EnumSectionLines`
- `IView.GetSection`
- `IView.GetSectionLineInfo2`
- `IView.GetSectionLines`
- `IView.IGetSection`
- `IView.IGetSectionLineInfo2`
- `IView.IGetSectionLineStrings`
- `IView.IGetSectionLines`