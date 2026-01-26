---
type: method
interface: IDrawingDoc
member: StartDrawing
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related: []
keywords:
  - startdrawing
  - idrawingdoc
  - drawing
  - doc
  - start
  - void
---

# IDrawingDoc.StartDrawing

Provides faster creation of entities within a drawing.

## Signature

```csharp
void StartDrawing()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method automatically disables inferencing to provide faster geometry creation. Use this method and
IDrawingDoc::EndDrawing
to bound your entity creation statements.