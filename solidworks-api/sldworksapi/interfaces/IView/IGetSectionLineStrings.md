---
type: method
interface: IView
member: IGetSectionLineStrings
returns: System.String
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
  - IView.GetSectionLineCount2
  - IView.GetSectionLineInfo2
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
  - igetsectionlinestrings
  - line
  - strings
  - string
---

# IView.IGetSectionLineStrings

Gets an array of strings; each string represents the text label for a section line in this view.

## Signature

```csharp
System.String IGetSectionLineStrings()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of strings with one string for each section line in the view VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

To determine the number of the strings returned, call
IView::GetSectionLineCount2
.

## See Also

- `IView.EnumSectionLines`
- `IView.GetSection`
- `IView.GetSectionLineCount2`
- `IView.GetSectionLineInfo2`
- `IView.GetSectionLines`
- `IView.IGetSection`
- `IView.IGetSectionLineInfo2`
- `IView.IGetSectionLines`