---
type: method
interface: INote
member: GetCompoundTextCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - INote.AddText
  - INote.BeginSketchEdit
  - INote.EndSketchEdit
  - INote.GetExtent
  - INote.GetExtentAtIndex
  - INote.GetHeightAtIndex
  - INote.GetSketch
  - INote.GetTextJustificationAtIndex
  - INote.GetTextOffsetAtIndex
  - INote.IGetExtent
  - INote.IGetExtentAtIndex
  - INote.IGetSketch
  - INote.IsCompoundNote
  - INote.SetTextJustificationAtIndex
  - INote.SetTextOffsetAtIndex
  - INote.SetTextPoint
  - INote.SetZeroLengthLeader
keywords:
  - getcompoundtextcount
  - inote
  - note
  - compound
  - text
  - count
  - int32
---

# INote.GetCompoundTextCount

Obsolete for documents created in SOLIDWORKS 2016 and later. Gets the number of text items in a compound note.

## Signature

```csharp
System.Int32 GetCompoundTextCount()
```
## Parameters

None.

## Return Value

Number of text items in a compound note

## Remarks

Use this method before using any of the following methods:
INote::GetCompoundTextAtIndex
INote::GetTextOffsetAtIndex
and
INote::IGetTextOffsetAtIndex
INote::GetTextJustificationAtIndex

## See Also

- `INote.AddText`
- `INote.BeginSketchEdit`
- `INote.EndSketchEdit`
- `INote.GetExtent`
- `INote.GetExtentAtIndex`
- `INote.GetHeightAtIndex`
- `INote.GetSketch`
- `INote.GetTextJustificationAtIndex`
- `INote.GetTextOffsetAtIndex`
- `INote.IGetExtent`
- `INote.IGetExtentAtIndex`
- `INote.IGetSketch`
- `INote.IsCompoundNote`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.SetZeroLengthLeader`