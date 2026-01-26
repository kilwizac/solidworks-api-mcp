---
type: method
interface: IModelDocExtension
member: GetCameraById
returns: Camera
parameters:
  -
    name: CameraId
    type: System.Int32
    description: Camera ID (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetCameraDefinition
  - IModelDocExtension.InsertCamera
keywords:
  - camera
  - see
  - also
  - icamera
  - id
  - getcamerabyid
  - imodeldocextension
  - model
  - doc
  - extension
  - int32
  - turn
  - cameras
  - off
  - vba
---

# IModelDocExtension.GetCameraById

Gets a camera using the specified camera ID.

## Signature

```csharp
Camera GetCameraById( 
   System.Int32
CameraId
)
```
## Parameters

- `CameraId` (System.Int32): Camera ID (see Remarks )

## Return Value

Camera

## Remarks

A valid ID is 0 <= ID <= (
IModelDocExtension::GetCameraCount
-1).
CameraId is reassigned if there are multiple cameras and one of those cameras is deleted. For example:
If...
And Camera2 is deleted, then...
CameraId = 1 for Camera1
CameraId = 1 for Camera1
CameraId = 2 for Camera2
Deleted
CameraId = 3 for Camera3
CameraId = 2 for Camera3

## Examples

- Turn Cameras On and Off (VBA) (Turn_Cameras_On_and_Off_Example_VB.htm)

## See Also

- `IModelDocExtension.GetCameraDefinition`
- `IModelDocExtension.InsertCamera`