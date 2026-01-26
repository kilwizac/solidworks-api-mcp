---
type: property
interface: ISwScene
member: FlattenFloor
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
  - floor
  - properties
  - flattenfloor
  - iswscene
  - sw
  - flatten
  - boolean
readonly: null
---

# ISwScene.FlattenFloor

Get or sets whether to flatten the floor of a spherical environment to improve the look of models that naturally rest on flat floors.

## Signature

```csharp
System.Boolean FlattenFloor {get; set;}
```
## Parameters

None.

## Return Value

True to flatten the floor, false to not

## Remarks

This property is valid only if
ISwScene::BackgroundType
is
swSceneBackgroundType_e
.swBackgroundType_UseEnvironment.

## Examples

- ISwScene (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwScene)