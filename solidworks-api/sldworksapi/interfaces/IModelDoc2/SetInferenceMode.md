---
type: method
interface: IModelDoc2
member: SetInferenceMode
returns: void
parameters:
  -
    name: InferenceMode
    type: System.Boolean
    description: True to enable sketch inference mode, false to disable it
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetInferenceMode
keywords:
  - setinferencemode
  - imodeldoc2
  - model
  - doc2
  - inference
  - mode
  - boolean
  - void
---

# IModelDoc2.SetInferenceMode

Obsolete. Superseded by SketchManager::InferenceMode.

## Signature

```csharp
void SetInferenceMode( 
   System.Boolean
InferenceMode
)
```
## Parameters

- `InferenceMode` (System.Boolean): True to enable sketch inference mode, false to disable it

## Return Value

Unknown.

## Remarks

Setting inference mode to...
Allows...
True
Inferencing during sketch operations, subject to other settings that may disable inferencing such as
IModelDoc2::AutoInferToggle
,
IModelDoc2::SetAddToDB
, and
IDrawingDoc::StartDrawing
.
false
Faster sketching without inferencing, similar to
IModelDoc2::SetAddToDB
, except that using this method does not disable undo operations.

## See Also

- `IModelDoc2.GetInferenceMode`