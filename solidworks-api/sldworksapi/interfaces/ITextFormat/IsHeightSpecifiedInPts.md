---
type: method
interface: ITextFormat
member: IsHeightSpecifiedInPts
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - isheightspecifiedinpts
  - itextformat
  - text
  - format
  - height
  - specified
  - pts
  - boolean
  - all
  - elements
  - sketch
  - vba
  - note
  - formatting
  - properties
  - arrow
  - projected
  - view
  - vb
  - net
---

# ITextFormat.IsHeightSpecifiedInPts

Gets whether the character height is in points or system units.

## Signature

```csharp
System.Boolean IsHeightSpecifiedInPts()
```
## Parameters

None.

## Return Value

True if the character height is in points, false if it is in system units

## Remarks

If the font height was set using...
Then this method returns...
ITextFormat::CharHeight
False
ITextFormat::CharHeightInPts
True

## Examples

- Get All Elements in Sketch (VBA) (Get_All_Elements_of_Sketch_Example_VB.htm)
- Get Note Text Formatting Properties (VBA) (Get_Note_Text_Formatting_Properties_Example_VB.htm)
- Get Arrow in Projected View (C#) (Get_Arrow_in_Projected_View_Example_CSharp.htm)
- Get Arrow in Projected View (VB.NET) (Get_Arrow_in_Projected_View_Example_VBNET.htm)
- Get Arrow in Projected View (VBA) (Get_Arrow_in_Projected_View_Example_VB.htm)