---
type: method
interface: INote
member: SetTextFormat
returns: System.Boolean
parameters:
  -
    name: TextFormatType
    type: System.Int32
    description: 
  -
    name: TextFormat
    type: System.Object
    description: v
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
  - INote.GetHeightAtIndex
  - INote.GetText
  - INote.GetTextAngleAtIndex
  - INote.GetTextAtIndex
  - INote.GetTextCount
  - INote.GetTextFontAtIndex
  - INote.GetTextHeightAtIndex
  - INote.GetTextInvertAtIndex
  - INote.GetTextJustificationAtIndex
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
  - INote.SetTextJustification
  - INote.SetTextJustificationAtIndex
  - INote.SetTextOffsetAtIndex
  - INote.SetTextPoint
  - INote.TextRightToLeft
keywords:
  - note
  - see
  - also
  - inote
  - compound
  - notes
  - text
  - settextformat
  - format
  - type
  - int32
  - object
  - boolean
---

# INote.SetTextFormat

Obsolete. Superseded by IAnnotation::SetTextFormat and IAnnotation::ISetTextFormat.

## Signature

```csharp
System.Boolean SetTextFormat( 
   System.Int32
TextFormatType
,
   System.Object
TextFormat
)
```
## Parameters

- `TextFormatType` (System.Int32): 
- `TextFormat` (System.Object): v

## Return Value

Unknown.

## See Also

- `INote.BeginSketchEdit`
- `INote.EndSketchEdit`
- `INote.GetCompoundTextAtIndex`
- `INote.GetCompoundTextCount`
- `INote.GetExtent`
- `INote.GetExtentAtIndex`
- `INote.GetHeightAtIndex`
- `INote.GetText`
- `INote.GetTextAngleAtIndex`
- `INote.GetTextAtIndex`
- `INote.GetTextCount`
- `INote.GetTextFontAtIndex`
- `INote.GetTextHeightAtIndex`
- `INote.GetTextInvertAtIndex`
- `INote.GetTextJustificationAtIndex`
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
- `INote.SetTextJustification`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.TextRightToLeft`