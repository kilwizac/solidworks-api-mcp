---
type: property
interface: ISwScene
member: BackgroundBottomGradientColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - scene
  - background
  - properties
  - backgroundbottomgradientcolor
  - iswscene
  - sw
  - bottom
  - gradient
  - color
  - int32
readonly: null
---

# ISwScene.BackgroundBottomGradientColor

Gets or sets the bottom color of the graduated range of background colors of this scene.

## Signature

```csharp
System.Int32 BackgroundBottomGradientColor {get; set;}
```
## Parameters

None.

## Return Value

RGB color

## Remarks

This property is valid only if
ISwScene::BackgroundType
is
swSceneBackgroundType_e
.swBackgroundType_Graduated.
Set the top color of the graduated range of background colors with
ISwScene::BackgroundTopGradientColor
.

## Examples

- ISwScene (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwScene)