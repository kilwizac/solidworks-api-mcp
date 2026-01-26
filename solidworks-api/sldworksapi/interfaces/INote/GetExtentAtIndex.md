---
type: method
interface: INote
member: GetExtentAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index number of the text
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
  - INote.GetHeightAtIndex
  - INote.GetSketch
  - INote.IGetExtent
  - INote.IGetLeaderAtIndex
  - INote.IGetSketch
  - INote.IsCompoundNote
  - INote.SetTextJustificationAtIndex
  - INote.SetTextOffsetAtIndex
  - INote.SetTextPoint
  - INote.SetZeroLengthLeader
keywords:
  - getextentatindex
  - inote
  - note
  - extent
  - index
  - int32
  - object
---

# INote.GetExtentAtIndex

Obsolete for documents created in SOLIDWORKS 2016 and later. Gets the extents of the specified piece of text within a compound note.

## Signature

```csharp
System.Object GetExtentAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index number of the text

## Return Value

Array of doubles (see Remarks )

## Remarks

This method is not valid for invisible documents.
The data returned is an array of 6 doubles that describe the lower-left and upper-right box extents of the text string. The values (X,Y,Z) are in sheet space. In other words, they are in relation to the origin of the drawing document which is in the lower-left corner of the drawing.
In a compound note, this method determines the text item's offset relative to note's text point.
Because a compound note can have multiple pieces of text, many of the compound note methods require you to specify the index value of the desired text. For example, the first piece of text added to the compound note using
INote::AddText
has an index number of 1, the second text added has an index number 2, and so on.
If you use this method on a standard note (not a compound note), then the index value should be set to 1.

## See Also

- `INote.AddText`
- `INote.BeginSketchEdit`
- `INote.EndSketchEdit`
- `INote.GetCompoundTextAtIndex`
- `INote.GetCompoundTextCount`
- `INote.GetExtent`
- `INote.GetHeightAtIndex`
- `INote.GetSketch`
- `INote.IGetExtent`
- `INote.IGetLeaderAtIndex`
- `INote.IGetSketch`
- `INote.IsCompoundNote`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.SetZeroLengthLeader`