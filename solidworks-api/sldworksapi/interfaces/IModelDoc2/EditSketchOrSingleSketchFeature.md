---
type: method
interface: IModelDoc2
member: EditSketchOrSingleSketchFeature
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - sketches
  - ui
related:
  - IModelDoc2.EditSketch
keywords:
  - edit
  - sketch
  - features
  - sketches
  - see
  - also
  - isketch
  - editsketchorsinglesketchfeature
  - imodeldoc2
  - model
  - doc2
  - single
  - feature
  - void
---

# IModelDoc2.EditSketchOrSingleSketchFeature

Edits a selected sketch or feature sketch.

## Signature

```csharp
void EditSketchOrSingleSketchFeature()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method is valid when one of the following is pre-selected:
Sketch
Body feature that is created from one sketch
Surface feature that is created from one sketch
Sketch picture
Pen sketch
Any item that supports
Context menu RMB > Edit Sketch

## See Also

- `IModelDoc2.EditSketch`