---
type: method
interface: IParagraphs
member: GetFormatting
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
  - IParagraphs.SetFormatting
keywords:
  - getformatting
  - iparagraphs
  - paragraphs
  - formatting
  - paragraphspacing
  - double
  - line
  - spacing
  - boolean
---

# IParagraphs.GetFormatting

Gets the formatting of the current paragraph.

## Signature

```csharp
System.Boolean GetFormatting( 
   out System.Double
Paragraphspacing
,
   out System.Double
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

## See Also

- `IParagraphs.SetFormatting`