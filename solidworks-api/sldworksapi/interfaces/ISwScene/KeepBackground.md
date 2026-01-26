---
type: property
interface: ISwScene
member: KeepBackground
returns: System.Boolean
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
  - keepbackground
  - iswscene
  - sw
  - keep
  - boolean
readonly: null
---

# ISwScene.KeepBackground

Gets or sets whether to retain the background when replacing the scene.

## Signature

```csharp
System.Boolean KeepBackground {get; set;}
```
## Parameters

None.

## Return Value

True to retain the background when replacing a scene, false to not

## Remarks

This property is valid only if
ISwScene::BackgroundType
is set to one of the following:
swSceneBackgroundType_e
.swBackgroundType_Image
swSceneBackgroundType_e.swBackgroundType_Graduated
swSceneBackgroundType_e.swBackgroundType_Plain

## Examples

- ISwScene (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwScene)