---
type: property
interface: ISwScene
member: AspectRatio
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
  - aspectratio
  - iswscene
  - sw
  - aspect
  - ratio
  - double
readonly: true
---

# ISwScene.AspectRatio

Gets the aspect ratio of the scene floor.

## Signature

```csharp
System.Double AspectRatio {get;}
```
## Parameters

None.

## Return Value

Aspect ratio

## Remarks

To change the aspect ratio, set
ISwScene::FixedAspectRatio
to false and specify:
ISwScene::FloorDepth
ISwScene::FloorWidth