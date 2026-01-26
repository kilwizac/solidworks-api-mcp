---
type: method
interface: INote
member: GetTextRefPositionAtIndex
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired piece of text where the index begins at 1
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
  - INote.GetTextFontAtIndex
  - INote.GetTextHeightAtIndex
  - INote.GetTextInvertAtIndex
  - INote.GetTextJustification
  - INote.GetTextJustificationAtIndex
  - INote.GetTextLineSpacingAtIndex
  - INote.GetTextOffsetAtIndex
  - INote.GetTextPoint2
  - INote.GetTextPositionAtIndex
  - INote.GetTextVerticalJustification
  - INote.IGetTextOffsetAtIndex
  - INote.IGetTextPoint2
  - INote.IGetTextPositionAtIndex
  - INote.PropertyLinkedText
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
  - gettextrefpositionatindex
  - ref
  - position
  - index
  - int32
---

# INote.GetTextRefPositionAtIndex

Gets the specified text item's reference position in this note; for example, the upper left, lower left, or center.

## Signature

```csharp
System.Int32 GetTextRefPositionAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired piece of text where the index begins at 1

## Return Value

Reference position of the specified text item as defined in swTextPosition_e

## Remarks

Before using this method, use
INote::GetTextCount
.

## See Also

- `INote.AddText`
- `INote.GetText`
- `INote.GetTextAngleAtIndex`
- `INote.GetTextAtIndex`
- `INote.GetTextFontAtIndex`
- `INote.GetTextHeightAtIndex`
- `INote.GetTextInvertAtIndex`
- `INote.GetTextJustification`
- `INote.GetTextJustificationAtIndex`
- `INote.GetTextLineSpacingAtIndex`
- `INote.GetTextOffsetAtIndex`
- `INote.GetTextPoint2`
- `INote.GetTextPositionAtIndex`
- `INote.GetTextVerticalJustification`
- `INote.IGetTextOffsetAtIndex`
- `INote.IGetTextPoint2`
- `INote.IGetTextPositionAtIndex`
- `INote.PropertyLinkedText`
- `INote.SetTextAtIndex`
- `INote.SetTextJustification`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.SetTextVerticalJustification`
- `INote.TextRightToLeft`