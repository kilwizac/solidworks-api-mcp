---
type: property
interface: IModelView
member: Camera
returns: Camera
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.SetCameraByName
keywords:
  - camera
  - see
  - also
  - icamera
  - model
  - views
  - imodelview
  - view
  - turn
  - cameras
  - off
  - vba
readonly: null
---

# IModelView.Camera

Gets or sets the camera.

## Signature

```csharp
Camera Camera {get; set;}
```
## Parameters

None.

## Return Value

Camera

## Remarks

If the return value is Nothing or NULL, then the camera view for this model is turned off.

## Examples

- Turn Cameras On and Off (VBA) (Turn_Cameras_On_and_Off_Example_VB.htm)

## See Also

- `IModelView.SetCameraByName`