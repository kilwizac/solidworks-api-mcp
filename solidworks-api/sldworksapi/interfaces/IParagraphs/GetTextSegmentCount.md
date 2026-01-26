---
type: method
interface: IParagraphs
member: GetTextSegmentCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IParagraphs.GetTextSegmentFormat
  - IParagraphs.GetTextSegmentText
  - IParagraphs.SetTextSegmentFormat
keywords:
  - gettextsegmentcount
  - iparagraphs
  - paragraphs
  - text
  - segment
  - count
  - int32
---

# IParagraphs.GetTextSegmentCount

Gets the number of text segments in the current paragraph.

## Signature

```csharp
System.Int32 GetTextSegmentCount()
```
## Parameters

None.

## Return Value

Number of text segments

## Remarks

Paragraphs contain one or more text segments. Each text segment has a different format.
Before calling this method, set the current paragraph using
IParagraphs::CurrentParagraph
.

## Examples

- IParagraphs (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IParagraphs)

## See Also

- `IParagraphs.GetTextSegmentFormat`
- `IParagraphs.GetTextSegmentText`
- `IParagraphs.SetTextSegmentFormat`