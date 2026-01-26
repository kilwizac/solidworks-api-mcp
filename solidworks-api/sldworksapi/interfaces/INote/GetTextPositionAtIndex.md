---
type: method
interface: INote
member: GetTextPositionAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the piece of text where the index begins at 1
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
  - INote.GetTextRefPositionAtIndex
  - INote.GetTextVerticalJustification
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
  - gettextpositionatindex
  - position
  - index
  - int32
  - object
---

# INote.GetTextPositionAtIndex

Gets the text item's offset relative to the document origin.

## Signature

```csharp
System.Object GetTextPositionAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the piece of text where the index begins at 1

## Return Value

Array of doubles (see Remarks )

## Remarks

Before using this method, use
INote::GetTextCount
.
The return value is the following array of doubles :
[
textPtX, textPtY, textPtZ
]
where these text position values are in relation to the document.
The data returned from this method is in terms of document space.
If the document containing this note is...
Then the coordinates returned are based on the...
Drawing
Sheet origin
Part or assembly
Model origin

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
- `INote.GetTextRefPositionAtIndex`
- `INote.GetTextVerticalJustification`
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