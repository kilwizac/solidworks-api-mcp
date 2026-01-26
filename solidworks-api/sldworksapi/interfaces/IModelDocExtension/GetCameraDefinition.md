---
type: method
interface: IModelDocExtension
member: GetCameraDefinition
returns: Camera
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetCameraById
  - IModelDocExtension.GetCameraCount
  - IModelDocExtension.InsertCamera
keywords:
  - camera
  - see
  - also
  - icamera
  - definition
  - getcameradefinition
  - imodeldocextension
  - model
  - doc
  - extension
---

# IModelDocExtension.GetCameraDefinition

Gets a camera, but does not add the newly created camera to the model.

## Signature

```csharp
Camera GetCameraDefinition()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

The model is unchanged.
You should find this method helpful when developing a renderer add-in.

## See Also

- `IModelDocExtension.GetCameraById`
- `IModelDocExtension.GetCameraCount`
- `IModelDocExtension.InsertCamera`