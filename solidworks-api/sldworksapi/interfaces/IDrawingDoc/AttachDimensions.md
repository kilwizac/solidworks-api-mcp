---
type: method
interface: IDrawingDoc
member: AttachDimensions
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - drawings
  - ui
related:
  - IDrawingDoc.Dimensions
  - IDrawingDoc.InsertBaseDim
  - IDrawingDoc.InsertModelAnnotations3
  - IDrawingDoc.InsertModelDimensions
keywords:
  - attach
  - dimensions
  - attachdimensions
  - idrawingdoc
  - drawing
  - doc
  - void
---

# IDrawingDoc.AttachDimensions

Attaches unattached dimensions.

## Signature

```csharp
void AttachDimensions()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method tries to reattach dimensions, for example, in an imported DXF file.

## See Also

- `IDrawingDoc.Dimensions`
- `IDrawingDoc.InsertBaseDim`
- `IDrawingDoc.InsertModelAnnotations3`
- `IDrawingDoc.InsertModelDimensions`