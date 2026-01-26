---
type: property
interface: ISwScene
member: FloorRotation
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - scene
  - floor
  - properties
  - floorrotation
  - iswscene
  - sw
  - rotation
  - double
readonly: null
---

# ISwScene.FloorRotation

Gets or sets the rotation of the scene floor relative to the environment of this scene.

## Signature

```csharp
System.Double FloorRotation {get; set;}
```
## Parameters

None.

## Return Value

0.0 <= Rotation in degrees <= 360.0

## Remarks

This property is valid only if
ISwScene::FloorAutoSize
is false.

## Examples

- ISwScene (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwScene)