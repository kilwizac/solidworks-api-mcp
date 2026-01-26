---
type: method
interface: INote
member: SetTextOffsetAtIndex
returns: void
parameters:
  -
    name: Index
    type: System.Int32
    description: Index number of the text to relocate.
  -
    name: X
    type: System.Double
    description: X location for the piece of text
  -
    name: Y
    type: System.Double
    description: Y location for the piece of text
  -
    name: Z
    type: System.Double
    description: Z location for the piece of text
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - INote.BeginSketchEdit
  - INote.EndSketchEdit
  - INote.GetCompoundTextAtIndex
  - INote.GetCompoundTextCount
  - INote.GetExtent
  - INote.GetExtentAtIndex
  - INote.GetText
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
  - INote.IGetExtent
  - INote.IGetExtentAtIndex
  - INote.IGetTextOffsetAtIndex
  - INote.IGetTextPoint2
  - INote.IGetTextPositionAtIndex
  - INote.PropertyLinkedText
  - INote.SetTextAtIndex
  - INote.SetTextJustification
  - INote.SetTextJustificationAtIndex
  - INote.SetTextPoint
  - INote.SetZeroLengthLeader
  - INote.TextRightToLeft
keywords:
  - settextoffsetatindex
  - inote
  - note
  - text
  - offset
  - index
  - int32
  - double
  - void
---

# INote.SetTextOffsetAtIndex

Obsolete for documents created in SOLIDWORKS 2016 and later. Relocates the offset (origin) of the specified piece of text in a compound note.

## Signature

```csharp
void SetTextOffsetAtIndex( 
   System.Int32
Index
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `Index` (System.Int32): Index number of the text to relocate.
- `X` (System.Double): X location for the piece of text
- `Y` (System.Double): Y location for the piece of text
- `Z` (System.Double): Z location for the piece of text

## Return Value

Unknown.

## Remarks

Because a compound note can have multiple pieces of text, many of the compound note methods require you to specify the index value of the desired text. For example, the first piece of text added to the compound note using
INote::AddText
has index number of 1, the second text added has an index number of 2, and so on.
This method does not support standard notes.

## See Also

- `INote.BeginSketchEdit`
- `INote.EndSketchEdit`
- `INote.GetCompoundTextAtIndex`
- `INote.GetCompoundTextCount`
- `INote.GetExtent`
- `INote.GetExtentAtIndex`
- `INote.GetText`
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
- `INote.IGetExtent`
- `INote.IGetExtentAtIndex`
- `INote.IGetTextOffsetAtIndex`
- `INote.IGetTextPoint2`
- `INote.IGetTextPositionAtIndex`
- `INote.PropertyLinkedText`
- `INote.SetTextAtIndex`
- `INote.SetTextJustification`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextPoint`
- `INote.SetZeroLengthLeader`
- `INote.TextRightToLeft`