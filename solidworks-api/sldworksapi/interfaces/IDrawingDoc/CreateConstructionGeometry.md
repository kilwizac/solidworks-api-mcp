---
type: method
interface: IDrawingDoc
member: CreateConstructionGeometry
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
  - ISketchManager.CreateConstructionGeometry
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - construction
  - geometry
  - createconstructiongeometry
  - drawing
  - doc
  - create
  - void
---

# IDrawingDoc.CreateConstructionGeometry

Sets the selected sketch segments to be construction geometry instead of sketch geometry.

## Signature

```csharp
void CreateConstructionGeometry()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method ignores construction geometry when it generates the solid body.

## See Also

- `ISketchManager.CreateConstructionGeometry`