---
type: method
interface: IModelView
member: SetCameraByName
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Feature name of the camera to use to set the model view, if in camera view mode
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.Camera
keywords:
  - camera
  - see
  - also
  - icamera
  - model
  - views
  - setcamerabyname
  - imodelview
  - view
  - name
  - string
  - boolean
  - turn
  - cameras
  - off
  - vba
---

# IModelView.SetCameraByName

Sets the model view to that of the specified camera, if in camera view mode.

## Signature

```csharp
System.Boolean SetCameraByName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Feature name of the camera to use to set the model view, if in camera view mode

## Return Value

True if the camera is set, false if not

## Remarks

If you specify ...
Then...
A nonexistent camera when another camera view is active
Return value is false and the other camera view remains active
An empty string when another camera view is active
Return value is True and the camera view is turned off for this model view

## Examples

- Turn Cameras On and Off (VBA) (Turn_Cameras_On_and_Off_Example_VB.htm)

## See Also

- `IModelView.Camera`