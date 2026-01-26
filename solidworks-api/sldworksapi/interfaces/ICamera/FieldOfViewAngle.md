---
type: property
interface: ICamera
member: FieldOfViewAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - ui
related:
  - ICamera.FieldOfViewDepth
  - ICamera.FieldOfViewHeight
  - ICamera.Perspective
keywords:
  - fieldofviewangle
  - icamera
  - camera
  - field
  - view
  - angle
  - double
  - insert
  - vba
  - vb
  - net
readonly: null
---

# ICamera.FieldOfViewAngle

Gets the camera's horizontal angle of the field of view.

## Signature

```csharp
System.Double FieldOfViewAngle {get; set;}
```
## Parameters

None.

## Return Value

Camera's horizontal angle of the field of view in radians

## Remarks

This property is only meaningful for a perspective camera.

## Examples

- Insert Camera (VBA) (Insert_Camera_Example_VB.htm)
- Insert Camera (C#) (Insert_Camera_Example_CSharp.htm)
- Insert Camera (VB.NET) (Insert_Camera_Example_VBNET.htm)

## See Also

- `ICamera.FieldOfViewDepth`
- `ICamera.FieldOfViewHeight`
- `ICamera.Perspective`