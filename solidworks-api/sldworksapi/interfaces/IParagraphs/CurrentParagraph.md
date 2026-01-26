---
type: property
interface: IParagraphs
member: CurrentParagraph
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - currentparagraph
  - iparagraphs
  - paragraphs
  - current
  - paragraph
  - int32
readonly: null
---

# IParagraphs.CurrentParagraph

Gets or sets the current paragraph.

## Signature

```csharp
System.Int32 CurrentParagraph {get; set;}
```
## Parameters

None.

## Return Value

0-based index of current paragraph

## Remarks

Before calling any of the methods of
IParagraphs
, you must call this method to set the current paragraph.
Use
IParagraphs::Count
to determine the index with which to set this property.

## Examples

- IParagraphs (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IParagraphs)