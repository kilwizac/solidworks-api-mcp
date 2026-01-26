---
type: method
interface: IView
member: GetSectionLineCount2
returns: System.Int32
parameters:
  -
    name: Size
    type: System.Int32
    description: Size, which includes an extra double per section line containing the layer ID for the section line
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
  - IView.GetSectionLineStrings
  - IView.IGetSection
  - IView.IGetSectionLineInfo2
  - IView.IGetSectionLineStrings
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - section
  - view
  - idrsection
  - getsectionlinecount2
  - line
  - count2
  - size
  - int32
---

# IView.GetSectionLineCount2

Gets the number of section lines in the view.

## Signature

```csharp
System.Int32 GetSectionLineCount2( 
   out System.Int32
Size
)
```
## Parameters

- `Size` (System.Int32): Size, which includes an extra double per section line containing the layer ID for the section line

## Return Value

Number of section lines in the view

## See Also

- `IView.EnumSectionLines`
- `IView.GetSection`
- `IView.GetSectionLineInfo2`
- `IView.GetSectionLineStrings`
- `IView.IGetSection`
- `IView.IGetSectionLineInfo2`
- `IView.IGetSectionLineStrings`