---
type: property
interface: INote
member: PropertyLinkedText
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.AddText
  - INote.GetTextAngleAtIndex
  - INote.GetTextAtIndex
  - INote.GetTextCount
  - INote.GetTextFontAtIndex
  - INote.GetTextHeightAtIndex
  - INote.GetTextInvertAtIndex
  - INote.GetTextJustification
  - INote.GetTextJustificationAtIndex
  - INote.GetTextLineSpacingAtIndex
  - INote.GetTextOffsetAtIndex
  - INote.GetTextPoint2
  - INote.GetTextPositionAtIndex
  - INote.GetTextRefPositionAtIndex
  - INote.GetTextVerticalJustification
  - INote.IGetTextOffsetAtIndex
  - INote.IGetTextPoint2
  - INote.IGetTextPositionAtIndex
  - INote.SetText
  - INote.SetTextAtIndex
  - INote.SetTextJustification
  - INote.SetTextJustificationAtIndex
  - INote.SetTextOffsetAtIndex
  - INote.SetTextPoint
  - INote.SetTextVerticalJustification
  - INote.TextRightToLeft
keywords:
  - note
  - see
  - also
  - inote
  - text
  - notes
  - propertylinkedtext
  - linked
  - string
readonly: null
---

# INote.PropertyLinkedText

Gets or sets the text for the note using the values of the properties linked to the note.

## Signature

```csharp
System.String PropertyLinkedText {get; set;}
```
## Parameters

None.

## Return Value

Text of note

## Remarks

The string returned by this property is the unresolved string of the note. If the note has linked text, then the source of the link is returned rather than the value of the link.
For example:
For links to...
This property....
Returns...
Custom properties
INote::PropertyLinkedText
Date: ($PRPVIEW:"SW-Long Date")
INote::GetText
Date: (Monday, December 16, 2016)
Dimensions
INote::PropertyLinkedText
Value: ("RD1@Drawing View1")
INote::GetText
Value: (70)
NOTE:
For notes without links, INote::PropertyLinkedText and INote::GetText behave the same.

## See Also

- `INote.AddText`
- `INote.GetTextAngleAtIndex`
- `INote.GetTextAtIndex`
- `INote.GetTextCount`
- `INote.GetTextFontAtIndex`
- `INote.GetTextHeightAtIndex`
- `INote.GetTextInvertAtIndex`
- `INote.GetTextJustification`
- `INote.GetTextJustificationAtIndex`
- `INote.GetTextLineSpacingAtIndex`
- `INote.GetTextOffsetAtIndex`
- `INote.GetTextPoint2`
- `INote.GetTextPositionAtIndex`
- `INote.GetTextRefPositionAtIndex`
- `INote.GetTextVerticalJustification`
- `INote.IGetTextOffsetAtIndex`
- `INote.IGetTextPoint2`
- `INote.IGetTextPositionAtIndex`
- `INote.SetText`
- `INote.SetTextAtIndex`
- `INote.SetTextJustification`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.SetTextVerticalJustification`
- `INote.TextRightToLeft`