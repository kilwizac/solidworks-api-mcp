---
type: method
interface: IView
member: GetSectionLines
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
  - IView.GetSectionLineCount2
  - IView.GetSectionLineInfo2
  - IView.GetSectionLineStrings
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
  - getsectionlines
  - object
  - vba
---

# IView.GetSectionLines

Gets the section lines in the view.

## Signature

```csharp
System.Object GetSectionLines()
```
## Parameters

None.

## Return Value

Array of section lines

## Remarks

This method returns the section lines regardless if the view is visible. If the view is hidden, the section lines are still returned.

## Examples

- Get Section View (VBA) (Get_Section_View_Data_Example_VB.htm)

## See Also

- `IView.EnumSectionLines`
- `IView.GetSection`
- `IView.GetSectionLineCount2`
- `IView.GetSectionLineInfo2`
- `IView.GetSectionLineStrings`
- `IView.IGetSection`
- `IView.IGetSectionLineInfo2`
- `IView.IGetSectionLineStrings`
- `IView.IGetSectionLines`