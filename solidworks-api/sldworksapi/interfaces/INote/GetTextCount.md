---
type: method
interface: INote
member: GetTextCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.AddText
  - INote.GetText
  - INote.GetTextJustification
  - INote.GetTextJustificationAtIndex
  - INote.GetTextOffsetAtIndex
  - INote.GetTextPoint2
  - INote.GetTextVerticalJustification
  - INote.IGetTextOffsetAtIndex
  - INote.IGetTextPoint2
  - INote.PropertyLinkedText
  - INote.SetText
  - INote.SetTextAtIndex
  - INote.SetTextJustification
  - INote.SetTextJustificationAtIndex
  - INote.SetTextOffsetAtIndex
  - INote.SetTextPoint
  - INote.SetTextVerticalJustification
  - INote.TextRightToLeft
keywords:
  - text
  - notes
  - note
  - see
  - also
  - inote
  - gettextcount
  - count
  - int32
  - change
  - vba
---

# INote.GetTextCount

Gets the number of text items in this note.

## Signature

```csharp
System.Int32 GetTextCount()
```
## Parameters

None.

## Return Value

Number of text items

## Remarks

After calling this method, call any of the following methods:
INote::GetTextAtIndex
INote::GetTextHeightAtIndex
INote::GetTextPositionAtIndex
or
INote::IGetTextPositionAtIndex
INote::GetTextAngleAtIndex
INote::GetTextRefPositionAtIndex
INote::GetTextInvertAtIndex
INote::GetTextFontAtIndex
INote::GetTextLineSpacingAtIndex

## Examples

- Change Note Text (VBA) (Change_Note_Text_Example_VB.htm)

## See Also

- `INote.AddText`
- `INote.GetText`
- `INote.GetTextJustification`
- `INote.GetTextJustificationAtIndex`
- `INote.GetTextOffsetAtIndex`
- `INote.GetTextPoint2`
- `INote.GetTextVerticalJustification`
- `INote.IGetTextOffsetAtIndex`
- `INote.IGetTextPoint2`
- `INote.PropertyLinkedText`
- `INote.SetText`
- `INote.SetTextAtIndex`
- `INote.SetTextJustification`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.SetTextVerticalJustification`
- `INote.TextRightToLeft`