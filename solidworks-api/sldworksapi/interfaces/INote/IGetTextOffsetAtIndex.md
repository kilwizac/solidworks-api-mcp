---
type: method
interface: INote
member: IGetTextOffsetAtIndex
returns: System.Double
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
  - INote.IGetExtentAtIndex
  - INote.IGetTextPoint2
  - INote.IGetTextPositionAtIndex
  - INote.IsCompoundNote
  - INote.PropertyLinkedText
  - INote.SetTextAtIndex
  - INote.SetTextJustification
  - INote.SetTextJustificationAtIndex
  - INote.SetTextOffsetAtIndex
  - INote.SetTextPoint
  - INote.TextRightToLeft
keywords:
  - igettextoffsetatindex
  - inote
  - note
  - text
  - offset
  - index
  - int32
  - double
---

# INote.IGetTextOffsetAtIndex

Obsolete for documents created in SOLIDWORKS 2016 and later. Gets whether the text item's offset relative to note's text point in a compound note.

## Signature

```csharp
System.Double IGetTextOffsetAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index position of the text

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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
- `INote.IGetExtentAtIndex`
- `INote.IGetTextPoint2`
- `INote.IGetTextPositionAtIndex`
- `INote.IsCompoundNote`
- `INote.PropertyLinkedText`
- `INote.SetTextAtIndex`
- `INote.SetTextJustification`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.TextRightToLeft`