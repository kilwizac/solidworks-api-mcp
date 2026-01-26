---
type: method
interface: INote
member: SetHyperlinkText
returns: System.Boolean
parameters:
  -
    name: Text
    type: System.String
    description: Text for hyperlink
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetHyperlinkText
keywords:
  - note
  - see
  - also
  - inote
  - hyperlinks
  - sethyperlinktext
  - hyperlink
  - text
  - string
  - boolean
---

# INote.SetHyperlinkText

Sets the hyperlink in a note.

## Signature

```csharp
System.Boolean SetHyperlinkText( 
   System.String
Text
)
```
## Parameters

- `Text` (System.String): Text for hyperlink

## Return Value

True if the hyperlink is successfully set, false if not

## Remarks

You can retrieve the hyperlink text using
INote::GetHyperlinkText
.
The input text can be a URL address or the name of a document on the local network or on your local system. You must specify the full address for a URL address, starting with the
http://
. You can specify a file name on your local network or system either as a full pathname or pathname relative to the current document, for example,
D:\parts\drawing1.slddrw
, or
drawing1.slddrw
.
To remove the hyperlink from a note, use this method and specify non-hyperlinked text.

## See Also

- `INote.GetHyperlinkText`