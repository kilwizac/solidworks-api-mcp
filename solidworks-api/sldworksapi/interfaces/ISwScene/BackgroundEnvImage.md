---
type: property
interface: ISwScene
member: BackgroundEnvImage
returns: System.String
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
  - environment
  - properties
  - backgroundenvimage
  - iswscene
  - sw
  - env
  - image
  - string
readonly: null
---

# ISwScene.BackgroundEnvImage

Gets or sets the environment image of this scene.

## Signature

```csharp
System.String BackgroundEnvImage {get; set;}
```
## Parameters

None.

## Return Value

Fully qualified path to an environment image file

## Remarks

This property is valid only if
ISwScene::BackgroundType
is
swSceneBackgroundType_e
.swBackgroundType_UseEnvironment.

## Examples

- ISwScene (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwScene)