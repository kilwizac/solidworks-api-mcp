---
type: method
interface: IDrawingDoc
member: FlipSectionLine
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
  - IDrSection
  - IDrawingDoc.CreateSectionView
  - IDrawingDoc.CreateSectionViewAt4
keywords:
  - section
  - lines
  - flip
  - views
  - see
  - also
  - idrsection
  - line
  - properties
  - flipsectionline
  - idrawingdoc
  - drawing
  - doc
  - void
---

# IDrawingDoc.FlipSectionLine

Flips the cut direction of the selected section line.

## Signature

```csharp
void FlipSectionLine()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

SOLIDWORKS creates the corresponding section view, if one exists, on the next rebuild.

## See Also

- `IDrSection`
- `IDrawingDoc.CreateSectionView`
- `IDrawingDoc.CreateSectionViewAt4`