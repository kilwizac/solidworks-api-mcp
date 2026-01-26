---
type: method
interface: INote
member: GetTextFontAtIndex
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired piece of text where the index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.AddText
  - INote.GetText
  - INote.GetTextAngleAtIndex
  - INote.GetTextAtIndex
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
  - INote.IGetTextFormat
  - INote.IGetTextOffsetAtIndex
  - INote.IGetTextPoint2
  - INote.IGetTextPositionAtIndex
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
  - gettextfontatindex
  - font
  - index
  - int32
  - string
---

# INote.GetTextFontAtIndex

Gets the font used by the specified text item in this note.

## Signature

```csharp
System.String GetTextFontAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired piece of text where the index begins at 0

## Return Value

Font name used by this note

## Remarks

Before using this method, use
INote::GetTextCount
. To set the specified text's font, use
IAnnotation::SetTextFormat
or
IAnnotation::ISetTextFormat
.

## See Also

- `INote.AddText`
- `INote.GetText`
- `INote.GetTextAngleAtIndex`
- `INote.GetTextAtIndex`
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
- `INote.IGetTextFormat`
- `INote.IGetTextOffsetAtIndex`
- `INote.IGetTextPoint2`
- `INote.IGetTextPositionAtIndex`
- `INote.PropertyLinkedText`
- `INote.SetText`
- `INote.SetTextAtIndex`
- `INote.SetTextJustification`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.SetTextVerticalJustification`
- `INote.TextRightToLeft`