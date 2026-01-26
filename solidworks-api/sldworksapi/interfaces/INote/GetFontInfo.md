---
type: method
interface: INote
member: GetFontInfo
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetTextFontAtIndex
  - INote.HasMultipleFonts
  - INote.IGetFontInfo
keywords:
  - fonts
  - notes
  - note
  - see
  - also
  - inote
  - properties
  - getfontinfo
  - font
  - info
  - object
---

# INote.GetFontInfo

Gets with the note's font information.

## Signature

```csharp
System.Object GetFontInfo()
```
## Parameters

None.

## Return Value

Array of doubles containing the font information (see Remarks )

## Remarks

Currently this method returns only a line type index. See
swLineTypes_e
for line type index information.

## See Also

- `INote.GetTextFontAtIndex`
- `INote.HasMultipleFonts`
- `INote.IGetFontInfo`