---
type: property
interface: ISwScene
member: BackgroundTopGradientColor
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
  - properties
  - background
  - backgroundtopgradientcolor
  - iswscene
  - sw
  - top
  - gradient
  - color
  - int32
readonly: null
---

# ISwScene.BackgroundTopGradientColor

Gets or sets the background color of this scene.

## Signature

```csharp
System.Int32 BackgroundTopGradientColor {get; set;}
```
## Parameters

None.

## Return Value

RGB color

## Remarks

If
ISwScene::BackgroundType
is...
Then this property sets...
swSceneBackgroundType_e
.swBackgroundType_Plain
a single background color.
swSceneBackgroundType_e.swBackgroundType_Graduated
the top color in the graduated range of background colors; Use
ISwScene::BackgroundBottomGradientColor
to set the bottom color in the graduated range of background colors.

## Examples

- ISwScene (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwScene)