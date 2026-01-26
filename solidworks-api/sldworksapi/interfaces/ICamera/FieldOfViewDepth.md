---
type: property
interface: ICamera
member: FieldOfViewDepth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - ui
related:
  - ICamera.FieldOfViewAngle
  - ICamera.FieldOfViewHeight
  - ICamera.Perspective
keywords:
  - fieldofviewdepth
  - icamera
  - camera
  - field
  - view
  - depth
  - double
  - insert
  - vb
  - net
  - vba
readonly: null
---

# ICamera.FieldOfViewDepth

Gets the camera's depth of the field of view.

## Signature

```csharp
System.Double FieldOfViewDepth {get; set;}
```
## Parameters

None.

## Return Value

Camera's depth of the field of view

## Remarks

This property is only meaningful for a perspective camera.

## Examples

- Insert Camera (C#) (Insert_Camera_Example_CSharp.htm)
- Insert Camera (VB.NET) (Insert_Camera_Example_VBNET.htm)
- Insert Camera (VBA) (Insert_Camera_Example_VB.htm)

## See Also

- `ICamera.FieldOfViewAngle`
- `ICamera.FieldOfViewHeight`
- `ICamera.Perspective`