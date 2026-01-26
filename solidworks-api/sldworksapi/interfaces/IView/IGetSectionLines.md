---
type: method
interface: IView
member: IGetSectionLines
returns: DrSection
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
  - IView.GetSectionLineStrings
  - IView.IGetSection
  - IView.IGetSectionLineInfo2
  - IView.IGetSectionLineStrings
keywords:
  - section
  - lines
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - igetsectionlines
  - dr
---

# IView.IGetSectionLines

Gets the section lines in the view.

## Signature

```csharp
DrSection IGetSectionLines()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of section lines VB.NET, C#, or C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method returns the section lines regardless if the view is visible. If the view is hidden, then section lines are still returned.

## See Also

- `IView.EnumSectionLines`
- `IView.GetSection`
- `IView.GetSectionLineCount2`
- `IView.GetSectionLineInfo2`
- `IView.GetSectionLineStrings`
- `IView.IGetSection`
- `IView.IGetSectionLineInfo2`
- `IView.IGetSectionLineStrings`