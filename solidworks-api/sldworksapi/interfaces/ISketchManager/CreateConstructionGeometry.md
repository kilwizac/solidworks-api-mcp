---
type: method
interface: ISketchManager
member: CreateConstructionGeometry
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - construction
  - geometry
  - sketch
  - see
  - also
  - isketch
  - createconstructiongeometry
  - isketchmanager
  - manager
  - create
  - void
---

# ISketchManager.CreateConstructionGeometry

Sets selected sketch segments to be construction geometry instead of sketch geometry.

## Signature

```csharp
void CreateConstructionGeometry()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method supports all document types, unlike
IDrawingDoc::CreateConstructionGeometry
, which only supports drawing documents. Both methods perform the same functionality.