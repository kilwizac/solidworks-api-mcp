---
type: property
interface: ISwScene
member: BackgroundBrightness
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - backgroundbrightness
  - iswscene
  - sw
  - scene
  - background
  - brightness
  - double
readonly: null
---

# ISwScene.BackgroundBrightness

Gets or sets the brightness of the background.

## Signature

```csharp
System.Double BackgroundBrightness {get; set;}
```
## Parameters

None.

## Return Value

Brightness

## Remarks

This property is valid only when:
a ray-trace rendering engine is activated
ISwScene::BackgroundType
is not
swSceneBackgroundType_e
.swBackgroundType_None