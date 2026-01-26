---
type: method
interface: IDrawingDoc
member: MakeSectionLine
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.CreateSectionView
  - IDrawingDoc.CreateSectionViewAt4
  - IDrawingDoc.FlipSectionLine
  - IDrawingDoc.ICreateSectionViewAt4
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - lines
  - makesectionline
  - idrawingdoc
  - drawing
  - doc
  - make
  - line
  - void
---

# IDrawingDoc.MakeSectionLine

Makes a section line from a set of connected sketch lines.

## Signature

```csharp
void MakeSectionLine()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

You must create the sketch lines in the drawing view, not on the drawing sheet.

## See Also

- `IDrawingDoc.CreateSectionView`
- `IDrawingDoc.CreateSectionViewAt4`
- `IDrawingDoc.FlipSectionLine`
- `IDrawingDoc.ICreateSectionViewAt4`