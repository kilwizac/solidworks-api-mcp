---
type: method
interface: IDrSection
member: IGetTextInfo
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.GetTextInfo
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - text
  - igettextinfo
  - dr
  - info
  - double
---

# IDrSection.IGetTextInfo

Gets the location of the section line text.

## Signature

```csharp
System.Double IGetTextInfo()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of 3 doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The section line in a drawing view usually has a piece of text near each end of the line, typically the section view label (
IDrSection::GetLabel
). The array returned by this method consists of 6 doubles, the (X, Y, Z) origin of one text followed by the (X, Y, Z) origin of the other text. The origin is the upper-left corner of the text.
These values are the same as some of the information in the array returned by
IView::IGetSectionLineInfo2
. The text information in that array also contains the text height. This method returns an array that does not include that information, but you can get it using
IDrSection::IGetTextFormat
and
ITextFormat::CharHeight
.

## See Also

- `IDrSection.GetTextInfo`