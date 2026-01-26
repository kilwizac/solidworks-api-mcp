---
type: method
interface: INote
member: IGetFontInfo
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetFontInfo
  - INote.GetTextFontAtIndex
  - INote.HasMultipleFonts
keywords:
  - fonts
  - notes
  - note
  - see
  - also
  - inote
  - properties
  - igetfontinfo
  - font
  - info
  - double
---

# INote.IGetFontInfo

Gets with the note's font information.

## Signature

```csharp
System.Double IGetFontInfo()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Currently this method returns only a line type index. See
swLineTypes_e
for line type index information.

## See Also

- `INote.GetFontInfo`
- `INote.GetTextFontAtIndex`
- `INote.HasMultipleFonts`