---
type: method
interface: INote
member: GetHyperlinkText
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.SetHyperlinkText
keywords:
  - note
  - see
  - also
  - inote
  - hyperlinks
  - gethyperlinktext
  - hyperlink
  - text
  - string
  - remove
  - drawing
  - vba
---

# INote.GetHyperlinkText

Gets the hyperlink in a note.

## Signature

```csharp
System.String GetHyperlinkText()
```
## Parameters

None.

## Return Value

Hyperlink text

## Remarks

You can create an embedded hyperlink on a note by using
INote::SetHyperlinkText
or by using the hyperlink button on the note creation dialog.
This command first looks for an embedded hyperlink on the note and returns the text used to take the user to that document, which can be on the internet (a URL address is returned) or on your local network or hard drive (a pathname is returned). If the pathname was specified as a relative pathname, then the full pathname is returned.
If an embedded hyperlink does not exist, the note's text is searched for a hyperlink explicitly entered as part of the note text. This could be a URL address (a text string beginning with
http://
) or a file address (a text string beginning with
file://
).
If no hyperlink is found, either embedded or explicitly entered within the note text, an empty string is returned.

## Examples

- Remove Hyperlink From Note in Drawing (VBA) (Remove_Hyperlink_from_Note_in_Drawing_Example_VB.htm)

## See Also

- `INote.SetHyperlinkText`