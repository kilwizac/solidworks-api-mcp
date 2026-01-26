---
type: method
interface: INote
member: GetTextAtIndex
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: Index position of the text; index begins at 1
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.AddText
  - INote.GetText
  - INote.GetTextAngleAtIndex
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
  - INote.GetTextVerticalJustification
  - INote.IGetTextOffsetAtIndex
  - INote.IGetTextPoint2
  - INote.IGetTextPositionAtIndex
  - INote.PropertyLinkedText
  - INote.SetText
  - INote.SetTextAtIndex
  - INote.SetTextJustification
  - INote.SetTextJustificationAtIndex
  - INote.SetTextOffsetAtIndex
  - INote.SetTextPoint
  - INote.SetTextVerticalJustification
  - INote.TextRightToLeft
keywords:
  - text
  - notes
  - note
  - see
  - also
  - inote
  - gettextatindex
  - index
  - int32
  - string
  - change
  - vba
---

# INote.GetTextAtIndex

Gets the specified text in this note.

## Signature

```csharp
System.String GetTextAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index position of the text; index begins at 1

## Return Value

Text string

## Remarks

Before calling this method, call with
INote::GetTextCount
.

## Examples

- Change Note Text (VBA) (Change_Note_Text_Example_VB.htm)

## See Also

- `INote.AddText`
- `INote.GetText`
- `INote.GetTextAngleAtIndex`
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
- `INote.GetTextVerticalJustification`
- `INote.IGetTextOffsetAtIndex`
- `INote.IGetTextPoint2`
- `INote.IGetTextPositionAtIndex`
- `INote.PropertyLinkedText`
- `INote.SetText`
- `INote.SetTextAtIndex`
- `INote.SetTextJustification`
- `INote.SetTextJustificationAtIndex`
- `INote.SetTextOffsetAtIndex`
- `INote.SetTextPoint`
- `INote.SetTextVerticalJustification`
- `INote.TextRightToLeft`