---
type: method
interface: IModelDoc2
member: UnBlankRefGeom
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.BlankRefGeom
keywords:
  - reference
  - geometry
  - show
  - unblankrefgeom
  - imodeldoc2
  - model
  - doc2
  - un
  - blank
  - ref
  - geom
  - void
---

# IModelDoc2.UnBlankRefGeom

Shows the selected, hidden reference geometry in the graphics window.

## Signature

```csharp
void UnBlankRefGeom()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

If you select a reference plane and call this method, then the plane will be visible in the graphics area. This method has the same effect as selecting an item and choosing
Show
on the shortcut menu.

## See Also

- `IModelDoc2.BlankRefGeom`