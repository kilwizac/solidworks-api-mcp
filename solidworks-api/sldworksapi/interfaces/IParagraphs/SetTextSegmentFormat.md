---
type: method
interface: IParagraphs
member: SetTextSegmentFormat
returns: System.Boolean
parameters:
  -
    name: Segment
    type: System.Int32
    description: 0-based index of the text segment whose format to set
  -
    name: Format
    type: System.Object
    description: ITextFormat
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IParagraphs.GetTextSegmentFormat
keywords:
  - settextsegmentformat
  - iparagraphs
  - paragraphs
  - text
  - segment
  - format
  - int32
  - object
  - boolean
---

# IParagraphs.SetTextSegmentFormat

Sets the text format for the specified text segment in the current paragraph.

## Signature

```csharp
System.Boolean SetTextSegmentFormat( 
   System.Int32
Segment
,
   System.Object
Format
)
```
## Parameters

- `Segment` (System.Int32): 0-based index of the text segment whose format to set
- `Format` (System.Object): ITextFormat

## Return Value

True if successful, false if not

## Remarks

Paragraphs contain one or more text segments. Each text segment has a different format.
Before calling this method:
set the current paragraph using
IParagraphs::CurrentParagraph
.
call
IParagraphs::GetTextSegmentCount
to get the total number of text segments and a valid value for Segment.
After calling this method, call
IParagraphs::UpdateParagraph
to update the model.

## Examples

- IParagraphs (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IParagraphs)

## See Also

- `IParagraphs.GetTextSegmentFormat`