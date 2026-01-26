---
type: method
interface: IParagraphs
member: SetFormatting
returns: System.Boolean
parameters:
  -
    name: Paragraphspacing
    type: System.Double
    description: Paragraph spacing
  -
    name: LineSpacing
    type: System.Double
    description: Line spacing
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IParagraphs.GetFormatting
keywords:
  - setformatting
  - iparagraphs
  - paragraphs
  - formatting
  - paragraphspacing
  - double
  - line
  - spacing
  - boolean
---

# IParagraphs.SetFormatting

Sets the formatting of the current paragraph.

## Signature

```csharp
System.Boolean SetFormatting( 
   System.Double
Paragraphspacing
,
   System.Double
LineSpacing
)
```
## Parameters

- `Paragraphspacing` (System.Double): Paragraph spacing
- `LineSpacing` (System.Double): Line spacing

## Return Value

True if successful, false if not

## Remarks

Before calling this method, set the current paragraph using
IParagraphs::CurrentParagraph
.
After calling this method, call
IParagraphs::UpdateParagraph
to update the model.

## Examples

- IParagraphs (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IParagraphs)

## See Also

- `IParagraphs.GetFormatting`