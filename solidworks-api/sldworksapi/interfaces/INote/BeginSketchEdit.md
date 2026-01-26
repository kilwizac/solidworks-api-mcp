---
type: method
interface: INote
member: BeginSketchEdit
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
  - INote.EndSketchEdit
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
  - beginsketchedit
  - inote
  - note
  - begin
  - sketch
  - edit
  - void
  - create
  - compound
  - vba
---

# INote.BeginSketchEdit

Obsolete for documents created in SOLIDWORKS 2016 and later. Activates the sketch of the compound note.

## Signature

```csharp
void BeginSketchEdit()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Subsequent calls for creation of sketch segment geometry (for example,
IModelDoc2::CreateLine2
or
IModelDoc2::ICreateLine2
,
IModelDoc2::CreateArc2
or
IModelDoc2::ICreateArc2
, and so on) place the geometry into the sketch of the compound note.
To extract information about existing compound note sketch geometry, use
INote::GetSketch
or
INote::IGetSketch
.
Because a compound note can have multiple pieces of text, many of the compound note methods require you to specify the index value of the desired text. For example, the first piece of text added to the compound note using
INote::AddText
has an index number of 1, the second text added has an index number of 2, and so on.

## Examples

- Create Compound Note (VBA) (Create_Compound_Note_Example_VB.htm)

## See Also

- `INote.AddText`
- `INote.EndSketchEdit`
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