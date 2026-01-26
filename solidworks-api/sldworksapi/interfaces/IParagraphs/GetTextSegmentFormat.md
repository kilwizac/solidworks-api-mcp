---
type: method
interface: IParagraphs
member: GetTextSegmentFormat
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of text segment whose text format to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IParagraphs.GetTextSegmentText
  - IParagraphs.SetTextSegmentFormat
keywords:
  - gettextsegmentformat
  - iparagraphs
  - paragraphs
  - text
  - segment
  - format
  - index
  - int32
  - object
---

# IParagraphs.GetTextSegmentFormat

Gets the text format for the specified text segment in the current paragraph.

## Signature

```csharp
System.Object GetTextSegmentFormat( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of text segment whose text format to get

## Return Value

ITextFormat

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

- `IParagraphs.GetTextSegmentText`
- `IParagraphs.SetTextSegmentFormat`