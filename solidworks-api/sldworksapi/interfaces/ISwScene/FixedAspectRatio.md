---
type: property
interface: ISwScene
member: FixedAspectRatio
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
  - properties
  - fixedaspectratio
  - iswscene
  - sw
  - fixed
  - aspect
  - ratio
  - boolean
readonly: null
---

# ISwScene.FixedAspectRatio

Gets or sets whether to fix the aspect ratio of the scene floor.

## Signature

```csharp
System.Boolean FixedAspectRatio {get; set;}
```
## Parameters

None.

## Return Value

True to fix the aspect ratio of the scene floor, false to allow the scene floor width and height to change independently

## Remarks

If this property is set to true, then you need only specify one of the following:
ISwScene::FloorDepth
ISwScene::FloorWidth
To change the
aspect ratio
, set this property to false and set both of the following:
ISwScene::FloorDepth
ISwScene::FloorWidth

## Examples

- ISwScene (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwScene)