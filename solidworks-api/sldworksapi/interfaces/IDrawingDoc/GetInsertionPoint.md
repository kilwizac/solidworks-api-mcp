---
type: method
interface: IDrawingDoc
member: GetInsertionPoint
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.IGetInsertionPoint
keywords:
  - insertion
  - points
  - pick
  - getinsertionpoint
  - idrawingdoc
  - drawing
  - doc
  - point
  - object
---

# IDrawingDoc.GetInsertionPoint

Gets the current insertion (pick) point in a drawing.

## Signature

```csharp
System.Object GetInsertionPoint()
```
## Parameters

None.

## Return Value

Array of 3 doubles (x,y,z)

## Remarks

You might want to use
ISelectionMgr::GetSelectionPointInSketchSpace2
to handle multiple selections.

## See Also

- `IDrawingDoc.IGetInsertionPoint`