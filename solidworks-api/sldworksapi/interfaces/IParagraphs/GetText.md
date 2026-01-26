---
type: method
interface: IParagraphs
member: GetText
returns: System.String
parameters:
  -
    name: ShowWordWrap
    type: System.Boolean
    description: True to show word wrap, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - gettext
  - iparagraphs
  - paragraphs
  - text
  - show
  - word
  - wrap
  - boolean
  - string
---

# IParagraphs.GetText

Gets the text of the current paragraph.

## Signature

```csharp
System.String GetText( 
   System.Boolean
ShowWordWrap
)
```
## Parameters

- `ShowWordWrap` (System.Boolean): True to show word wrap, false to not

## Return Value

Text of the current paragraph

## Remarks

Before calling this method, set the current paragraph using
IParagraphs::CurrentParagraph
.

## Examples

- IParagraphs (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IParagraphs)