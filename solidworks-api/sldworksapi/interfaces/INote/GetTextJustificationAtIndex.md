---
type: method
interface: INote
member: GetTextJustificationAtIndex
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index position of the text
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - INote.AddText
  - INote.BeginSketchEdit
  - INote.EndSketchEdit
  - INote.GetCompoundTextAtIndex
  - INote.GetCompoundTextCount
  - INote.GetExtent
  - INote.GetExtentAtIndex
  - INote.GetHeightAtIndex
  - INote.GetSketch
  - INote.GetText
  - INote.GetTextAngleAtIndex
  - INote.GetTextAtIndex
  - INote.GetTextCount
  - INote.GetTextFontAtIndex
  - INote.GetTextHeightAtIndex
  - INote.GetTextInvertAtIndex
  - INote.GetTextJustification
  - INote.GetTextLineSpacingAtIndex
  - INote.GetTextOffsetAtIndex
  - INote.GetTextPoint2
  - INote.GetTextPositionAtIndex
  - INote.GetTextRefPositionAtIndex
  - INote.IGetExtent
  - INote.IGetExtentAtIndex
  - INote.IGetSketch
  - INote.IGetTextOffsetAtIndex
  - INote.IGetTextPoint2
  - INote.IGetTextPositionAtIndex
  - INote.IsCompoundNote
  - INote.PropertyLinkedText
  - INote.SetText
  - INote.SetTextAtIndex
  - INote.SetTextFormat
  - INote.SetTextFormatAtIndex
  - INote.SetTextJustification
  - INote.SetTextOffsetAtIndex
  - INote.SetTextPoint
  - INote.SetZeroLengthLeader
  - INote.TextRightToLeft
keywords:
  - gettextjustificationatindex
  - inote
  - note
  - text
  - justification
  - index
  - int32
---

# INote.GetTextJustificationAtIndex

Obsolete for documents created in SOLIDWORKS 2016 and later. Gets the text justification for the specified text item in a compound note.

## Signature

```csharp
System.Int32 GetTextJustificationAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index position of the text

## Return Value

Text justification as defined in swTextJustification_e

## Remarks

Before using this method, use
INote::GetCompoundTextCount
to get the number of text items.

## See Also

- `INote.AddText`
- `INote.BeginSketchEdit`
- `INote.EndSketchEdit`
- `INote.GetCompoundTextAtIndex`
- `INote.GetCompoundTextCount`
- `INote.GetExtent`
- `INote.GetExtentAtIndex`
- `INote.GetHeightAtIndex`
- `INote.GetSketch`
- `INote.GetText`
- `INote.GetTextAngleAtIndex`
- `INote.GetTextAtIndex`
- `INote.GetTextCount`
- `INote.GetTextFontAtIndex`
- `INote.GetTextHeightAtIndex`
- `INote.GetTextInvertAtIndex`
- `INote.GetTextJustification`
- `INote.GetTextLineSpacingAtIndex`
- `INote.GetTextOffsetAtIndex`
- `INote.GetTextPoint2`
- `INote.GetTextPositionAtIndex`
- `INote.GetTextRefPositionAtIndex`
- `INote.IGetExtent`
- `INote.IGetExtentAtIndex`
- `INote.IGetSketch`
- `INote.IGetTextOffsetAtIndex`
- `INote.IGetTextPoint2`
- `INote.IGetTextPositionAtIndex`
- `INote.IsCompoundNote`
- `INote.PropertyLinkedText`
- `INote.SetText`
- `INote.SetTextAtIndex`
- `INote.SetTextFormat`
- `INote.SetTextFormatAtIndex`
- `INote.SetTextJustification`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.SetZeroLengthLeader`
- `INote.TextRightToLeft`