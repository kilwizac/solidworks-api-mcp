---
type: method
interface: INote
member: IGetSketch
returns: Sketch
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
  - sketches
related:
  - INote.AddText
  - INote.BeginSketchEdit
  - INote.EndSketchEdit
  - INote.GetCompoundTextAtIndex
  - INote.GetCompoundTextCount
  - INote.GetExtent
  - INote.GetExtentAtIndex
  - INote.GetHeightAtIndex
  - INote.GetTextJustificationAtIndex
  - INote.GetTextOffsetAtIndex
  - INote.IGetExtent
  - INote.IGetExtentAtIndex
  - INote.IGetTextOffsetAtIndex
  - INote.IsCompoundNote
  - INote.SetTextJustificationAtIndex
  - INote.SetTextOffsetAtIndex
  - INote.SetTextPoint
  - INote.SetZeroLengthLeader
keywords:
  - igetsketch
  - inote
  - note
  - sketch
---

# INote.IGetSketch

Obsolete for documents created in SOLIDWORKS 2016 and later. Gets the sketch for the current compound note.

## Signature

```csharp
Sketch IGetSketch()
```
## Parameters

None.

## Return Value

Sketch for this compound note

## Remarks

If the current note is not a compound note, then a NULL value is returned.
For adding or modifying actual sketch geometry in a compound note, use
INote::BeginSketchEdit
, which activates the sketch of the compound note for modification.

## See Also

- `INote.AddText`
- `INote.BeginSketchEdit`
- `INote.EndSketchEdit`
- `INote.GetCompoundTextAtIndex`
- `INote.GetCompoundTextCount`
- `INote.GetExtent`
- `INote.GetExtentAtIndex`
- `INote.GetHeightAtIndex`
- `INote.GetTextJustificationAtIndex`
- `INote.GetTextOffsetAtIndex`
- `INote.IGetExtent`
- `INote.IGetExtentAtIndex`
- `INote.IGetTextOffsetAtIndex`
- `INote.IsCompoundNote`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.SetZeroLengthLeader`