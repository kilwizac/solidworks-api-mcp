---
type: method
interface: IParagraphs
member: UpdateParagraph
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - updateparagraph
  - iparagraphs
  - paragraphs
  - update
  - paragraph
  - boolean
---

# IParagraphs.UpdateParagraph

Updates the model with the changes made to the current paragraph.

## Signature

```csharp
System.Boolean UpdateParagraph()
```
## Parameters

None.

## Return Value

True if the model is updated with the paragraph changes, false if not

## Remarks

You must call this method to update the model after calling:
IParagraphs::SetBulletsAndNumbering
IParagraphs::SetFormatting
IParagraphs::SetIndentation
IParagraphs::SetTextSegmentFormat

## Examples

- IParagraphs (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IParagraphs)