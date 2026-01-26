---
type: method
interface: IModelDoc2
member: SketchMirror
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related: []
keywords:
  - mirror
  - sketch
  - entities
  - tools
  - sketchmirror
  - imodeldoc2
  - model
  - doc2
  - void
---

# IModelDoc2.SketchMirror

Creates new entities that are mirror images of the selected entities.

## Signature

```csharp
void SketchMirror()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

If the entity to mirror is:
a sketch segment, then use a selection mark of 1
a centerline, then use a selection mark of 2