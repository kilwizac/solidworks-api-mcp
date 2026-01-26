---
type: method
interface: INote
member: SetTextJustificationAtIndex
returns: void
parameters:
  -
    name: Index
    type: System.Int32
    description: 1-based index value for the text within the note
  -
    name: Justification
    type: System.Int32
    description: Text justification as defined in swTextJustification_e
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
  - INote.GetSketch
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
  - INote.IGetTextOffsetAtIndex
  - INote.IGetTextPoint2
  - INote.IGetTextPositionAtIndex
  - INote.PropertyLinkedText
  - INote.SetText
  - INote.SetTextAtIndex
  - INote.SetTextJustification
  - INote.SetTextOffsetAtIndex
  - INote.SetTextPoint
  - INote.TextRightToLeft
keywords:
  - settextjustificationatindex
  - inote
  - note
  - text
  - justification
  - index
  - int32
  - void
---

# INote.SetTextJustificationAtIndex

Obsolete for documents created in SOLIDWORKS 2016 and later. Sets the text justification for the specified text item in a compound note.

## Signature

```csharp
void SetTextJustificationAtIndex( 
   System.Int32
Index
,
   System.Int32
Justification
)
```
## Parameters

- `Index` (System.Int32): 1-based index value for the text within the note
- `Justification` (System.Int32): Text justification as defined in swTextJustification_e

## Return Value

Because a compound note can have multiple pieces of text, many of the compound note methods require you to specify the index value of the desired text. For example, the first piece of text added to the compound note using INote::AddText has an index number of 1, the second text added has an index number of 2, and so on. If you use this method on a standard note (not a compound note), then the index value must be set to 1. To see the changes made to the text, the graphics window must be redrawn. See IModelDoc2::GraphicsRedraw2 .

## See Also

- `INote.BeginSketchEdit`
- `INote.EndSketchEdit`
- `INote.GetCompoundTextAtIndex`
- `INote.GetCompoundTextCount`
- `INote.GetExtent`
- `INote.GetExtentAtIndex`
- `INote.GetSketch`
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
- `INote.IGetTextOffsetAtIndex`
- `INote.IGetTextPoint2`
- `INote.IGetTextPositionAtIndex`
- `INote.PropertyLinkedText`
- `INote.SetText`
- `INote.SetTextAtIndex`
- `INote.SetTextJustification`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.TextRightToLeft`