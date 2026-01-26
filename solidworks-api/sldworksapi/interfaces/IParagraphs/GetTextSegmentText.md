---
type: method
interface: IParagraphs
member: GetTextSegmentText
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of text segment whose text to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IParagraphs.GetTextSegmentFormat
keywords:
  - gettextsegmenttext
  - iparagraphs
  - paragraphs
  - text
  - segment
  - index
  - int32
  - string
---

# IParagraphs.GetTextSegmentText

Gets the text of the specified text segment in the current paragraph.

## Signature

```csharp
System.String GetTextSegmentText( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of text segment whose text to get

## Return Value

Text of text segment

## Remarks

Paragraphs contain one or more text segments. Each text segment has a different format.
Before calling this method, set the current paragraph using
IParagraphs::CurrentParagraph
.
To populate Index, call
IParagraphs::GetTextSegmentCount
.

## Examples

- IParagraphs (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IParagraphs)

## See Also

- `IParagraphs.GetTextSegmentFormat`