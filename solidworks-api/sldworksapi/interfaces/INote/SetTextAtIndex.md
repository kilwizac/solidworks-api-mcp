---
type: method
interface: INote
member: SetTextAtIndex
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index position of the text within the compound note; an invalid index value causes false to be returned
  -
    name: Txt
    type: System.String
    description: Text to replace the current note text
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - INote.AddText
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
  - INote.SetTextJustification
  - INote.SetTextJustificationAtIndex
  - INote.SetTextOffsetAtIndex
  - INote.SetTextPoint
  - INote.TextRightToLeft
keywords:
  - settextatindex
  - inote
  - note
  - text
  - index
  - int32
  - txt
  - string
  - boolean
---

# INote.SetTextAtIndex

Obsolete for documents created in SOLIDWORKS 2016 and later. Sets the text value at the specified index within the compound note.

## Signature

```csharp
System.Boolean SetTextAtIndex( 
   System.Int32
Index
,
   System.String
Txt
)
```
## Parameters

- `Index` (System.Int32): Index position of the text within the compound note; an invalid index value causes false to be returned
- `Txt` (System.String): Text to replace the current note text

## Return Value

True if the text change is made successfully, false if not

## Remarks

Because a compound note can have multiple pieces of text, many of the compound note methods require you to specify the index value of the desired text. For example, the first piece of text added to the compound note using
INote::AddText
has an index number of 1, the second text added has an index number of 2, and so on.
After completing any note changes, you must perform an
IModelDoc2::EditRebuild3
.
If you use this method on a standard note (not a compound note), then the index value should be set to 1. Use
INote::SetText
for modifying text in a standard note.

## See Also

- `INote.AddText`
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
- `INote.SetTextJustification`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.TextRightToLeft`