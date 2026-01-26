---
type: method
interface: INote
member: SetTextVerticalJustification
returns: void
parameters:
  -
    name: Justification
    type: System.Int32
    description: Vertical justification as defined in swTextAlignmentVertical_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetText
  - INote.GetTextAngleAtIndex
  - INote.GetTextCount
  - INote.GetTextFontAtIndex
  - INote.GetTextHeightAtIndex
  - INote.GetTextInvertAtIndex
  - INote.GetTextJustification
  - INote.GetTextLineSpacingAtIndex
  - INote.GetTextPoint2
  - INote.GetTextPositionAtIndex
  - INote.GetTextRefPositionAtIndex
  - INote.GetTextVerticalJustification
  - INote.PropertyLinkedText
  - INote.SetText
  - INote.SetTextJustification
  - INote.SetTextPoint
  - INote.TextRightToLeft
keywords:
  - text
  - notes
  - note
  - see
  - also
  - inote
  - settextverticaljustification
  - vertical
  - justification
  - int32
  - void
  - anchor
  - vb
  - net
  - vba
---

# INote.SetTextVerticalJustification

Sets the vertical justification of a standard note.

## Signature

```csharp
void SetTextVerticalJustification( 
   System.Int32
Justification
)
```
## Parameters

- `Justification` (System.Int32): Vertical justification as defined in swTextAlignmentVertical_e

## Return Value

Unknown.

## Examples

- Anchor a Note (C#) (Anchor_a_Note_Example_CSharp.htm)
- Anchor a Note (VB.NET) (Anchor_a_Note_Example_VBNET.htm)
- Anchor a Note (VBA) (Anchor_a_Note_Example_VB.htm)

## See Also

- `INote.GetText`
- `INote.GetTextAngleAtIndex`
- `INote.GetTextCount`
- `INote.GetTextFontAtIndex`
- `INote.GetTextHeightAtIndex`
- `INote.GetTextInvertAtIndex`
- `INote.GetTextJustification`
- `INote.GetTextLineSpacingAtIndex`
- `INote.GetTextPoint2`
- `INote.GetTextPositionAtIndex`
- `INote.GetTextRefPositionAtIndex`
- `INote.GetTextVerticalJustification`
- `INote.PropertyLinkedText`
- `INote.SetText`
- `INote.SetTextJustification`
- `INote.SetTextPoint`
- `INote.TextRightToLeft`