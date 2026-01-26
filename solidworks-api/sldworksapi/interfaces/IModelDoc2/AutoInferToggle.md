---
type: method
interface: IModelDoc2
member: AutoInferToggle
returns: void
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetInferenceMode
  - IModelDoc2.SetInferenceMode
keywords:
  - autoinfertoggle
  - imodeldoc2
  - model
  - doc2
  - auto
  - infer
  - toggle
  - void
---

# IModelDoc2.AutoInferToggle

Obsolete. Superseded by ISketchManager::AutoInference.

## Signature

```csharp
void AutoInferToggle()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Inferencing mode can be seen when creating a sketch segment and you mouse moves past another sketch item. If inferencing is turned on, you see a dashed line from the current cursor position to the inferenced position on the existing sketch entity.

## See Also

- `IModelDoc2.GetInferenceMode`
- `IModelDoc2.SetInferenceMode`