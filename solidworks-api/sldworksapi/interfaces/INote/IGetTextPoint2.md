---
type: method
interface: INote
member: IGetTextPoint2
returns: MathPoint
parameters: []
docset: sldworksapi
deprecated: false
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
  - INote.GetTextVerticalJustification
  - INote.IGetTextOffsetAtIndex
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
  - note
  - see
  - also
  - inote
  - origin
  - text
  - notes
  - igettextpoint2
  - point2
  - math
  - point
---

# INote.IGetTextPoint2

Gets the note's text reference point (i.e., note origin).

## Signature

```csharp
MathPoint IGetTextPoint2()
```
## Parameters

None.

## Return Value

Math point

## Remarks

This is the upper-left corner of the bounding rectangle. It also works when zooming the view in and out.
Format of retval is the following array of 3 doubles:
return value
[0] = x coordinate of text reference point
return value
[1] = y coordinate of text reference point
return value
[2] = z coordinate of text reference point

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
- `INote.GetTextVerticalJustification`
- `INote.IGetTextOffsetAtIndex`
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