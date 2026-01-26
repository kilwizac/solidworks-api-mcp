---
type: method
interface: IDrawingDoc
member: EndDrawing
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
  - enddrawing
  - idrawingdoc
  - drawing
  - doc
  - end
  - void
---

# IDrawingDoc.EndDrawing

Provides faster creation of entities in a drawing when used with IDrawingDoc::StartDrawing.

## Signature

```csharp
void EndDrawing()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Use
IDrawingDoc::StartDrawing
and this method to bound your entity creation statements.