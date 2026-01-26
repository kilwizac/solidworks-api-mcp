---
type: method
interface: INote
member: GetExtent
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.AddText
  - INote.BeginSketchEdit
  - INote.EndSketchEdit
  - INote.GetCompoundTextAtIndex
  - INote.GetCompoundTextCount
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
  - compound
  - notes
  - note
  - see
  - also
  - inote
  - getextent
  - extent
  - object
---

# INote.GetExtent

Gets the extents of a note in sheet space.

## Signature

```csharp
System.Object GetExtent()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

This method is not valid for invisible documents.
The data returned is an array of 6 doubles that describe the lower-left and upper-right box extents of the note. The values (X,Y,Z) are in sheet space. In other words, the X,Y,Z values are in relation to the origin of the drawing document, which is in the lower-left hand corner of the drawing.

## See Also

- `INote.AddText`
- `INote.BeginSketchEdit`
- `INote.EndSketchEdit`
- `INote.GetCompoundTextAtIndex`
- `INote.GetCompoundTextCount`
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