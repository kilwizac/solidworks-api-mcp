---
type: method
interface: IView
member: EnumSectionLines2
returns: EnumDrSections
parameters:
  -
    name: IgnoreSuppressed
    type: System.Boolean
    description: True to ignore suppressed section lines, false to include them
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetSectionLineCount2
  - IView.GetSectionLineStrings
  - IView.GetSectionLines
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - section
  - lines
  - view
  - enumsectionlines2
  - lines2
  - ignore
  - suppressed
  - boolean
  - dr
  - sections
---

# IView.EnumSectionLines2

Gets the section lines enumeration in the view.

## Signature

```csharp
EnumDrSections EnumSectionLines2( 
   System.Boolean
IgnoreSuppressed
)
```
## Parameters

- `IgnoreSuppressed` (System.Boolean): True to ignore suppressed section lines, false to include them

## Return Value

Section lines enumeration

## Remarks

This method returns section lines whether the view is visible or not. If the view is hidden, then the section lines are still returned.

## See Also

- `IView.GetSectionLineCount2`
- `IView.GetSectionLineStrings`
- `IView.GetSectionLines`