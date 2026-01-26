---
type: method
interface: INote
member: GetCompoundTextAtIndex
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the text item in the compound note; index is 1-based
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
  - INote.GetHeight
  - INote.GetSketch
  - INote.GetTextJustificationAtIndex
  - INote.GetTextOffsetAtIndex
  - INote.IGetExtent
  - INote.IGetExtentAtIndex
  - INote.IGetSketch
  - INote.IGetTextOffsetAtIndex
  - INote.IsCompoundNote
  - INote.SetTextJustificationAtIndex
  - INote.SetTextOffsetAtIndex
  - INote.SetTextPoint
  - INote.SetZeroLengthLeader
keywords:
  - getcompoundtextatindex
  - inote
  - note
  - compound
  - text
  - index
  - int32
  - string
---

# INote.GetCompoundTextAtIndex

Obsolete for documents created in SOLIDWORKS 2016 and later. Gets the text item corresponding to the specified index from a compound note.

## Signature

```csharp
System.String GetCompoundTextAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text item in the compound note; index is 1-based

## Return Value

Text corresponding to specified index

## Remarks

Before calling this method, call
INote::GetCompoundTextCount
to get the number of text items.

## See Also

- `INote.AddText`
- `INote.BeginSketchEdit`
- `INote.EndSketchEdit`
- `INote.GetExtent`
- `INote.GetExtentAtIndex`
- `INote.GetHeight`
- `INote.GetSketch`
- `INote.GetTextJustificationAtIndex`
- `INote.GetTextOffsetAtIndex`
- `INote.IGetExtent`
- `INote.IGetExtentAtIndex`
- `INote.IGetSketch`
- `INote.IGetTextOffsetAtIndex`
- `INote.IsCompoundNote`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.SetZeroLengthLeader`