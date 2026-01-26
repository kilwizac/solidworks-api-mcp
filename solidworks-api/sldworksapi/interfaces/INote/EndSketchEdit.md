---
type: method
interface: INote
member: EndSketchEdit
returns: void
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
  - INote.GetCompoundTextAtIndex
  - INote.GetCompoundTextCount
  - INote.GetExtent
  - INote.GetExtentAtIndex
  - INote.GetHeightAtIndex
  - INote.GetTextAtIndex
  - INote.GetTextJustificationAtIndex
  - INote.GetTextOffsetAtIndex
  - INote.IGetExtent
  - INote.IGetExtentAtIndex
  - INote.IGetSketch
  - INote.IGetTextOffsetAtIndex
  - INote.IsCompoundNote
  - INote.SetTextAtIndex
  - INote.SetTextJustificationAtIndex
  - INote.SetTextOffsetAtIndex
  - INote.SetTextPoint
  - INote.SetZeroLengthLeader
keywords:
  - endsketchedit
  - inote
  - note
  - end
  - sketch
  - edit
  - void
  - create
  - compound
  - vba
---

# INote.EndSketchEdit

Obsolete for documents created in SOLIDWORKS 2016 and later. Finishes accessing this compound note's sketch.

## Signature

```csharp
void EndSketchEdit()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Because a compound note can have multiple pieces of text, many of the compound note methods require you to specify the index value of the desired text. For example, the first piece of text added to the compound note using
INote::AddText
has an index number of 1, the second text added has an index number of 2, and so on.

## Examples

- Create Compound Note (VBA) (Create_Compound_Note_Example_VB.htm)

## See Also

- `INote.AddText`
- `INote.BeginSketchEdit`
- `INote.GetCompoundTextAtIndex`
- `INote.GetCompoundTextCount`
- `INote.GetExtent`
- `INote.GetExtentAtIndex`
- `INote.GetHeightAtIndex`
- `INote.GetTextAtIndex`
- `INote.GetTextJustificationAtIndex`
- `INote.GetTextOffsetAtIndex`
- `INote.IGetExtent`
- `INote.IGetExtentAtIndex`
- `INote.IGetSketch`
- `INote.IGetTextOffsetAtIndex`
- `INote.IsCompoundNote`
- `INote.SetTextAtIndex`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.SetZeroLengthLeader`