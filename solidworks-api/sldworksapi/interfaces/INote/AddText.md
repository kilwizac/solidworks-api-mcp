---
type: method
interface: INote
member: AddText
returns: System.Boolean
parameters:
  -
    name: Txt
    type: System.String
    description: Text string for the note
  -
    name: X
    type: System.Double
    description: x location of note in meters
  -
    name: Y
    type: System.Double
    description: y location of note in meters
  -
    name: Z
    type: System.Double
    description: z location of note in meters
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
  - INote.GetSketch
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
  - addtext
  - inote
  - note
  - add
  - text
  - txt
  - string
  - double
  - boolean
  - create
  - compound
  - vba
---

# INote.AddText

Obsolete for documents created in SOLIDWORKS 2016 and later. Adds text to the selected compound note.

## Signature

```csharp
System.Boolean AddText( 
   System.String
Txt
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `Txt` (System.String): Text string for the note
- `X` (System.Double): x location of note in meters
- `Y` (System.Double): y location of note in meters
- `Z` (System.Double): z location of note in meters

## Return Value

True if successfully added, false if not

## Remarks

Because a compound note can have multiple pieces of text, many of the compound-note methods require you to specify the index value of the desired text. For example, the first piece of text added to the compound note using INote::AddText has an index number of 1, the second text added has and index number of 2, and so on.

## Examples

- Create Compound Note (VBA) (Create_Compound_Note_Example_VB.htm)

## See Also

- `INote.BeginSketchEdit`
- `INote.EndSketchEdit`
- `INote.GetCompoundTextAtIndex`
- `INote.GetCompoundTextCount`
- `INote.GetExtent`
- `INote.GetExtentAtIndex`
- `INote.GetHeightAtIndex`
- `INote.GetSketch`
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