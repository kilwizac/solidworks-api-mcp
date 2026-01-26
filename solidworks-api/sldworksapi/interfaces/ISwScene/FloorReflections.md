---
type: property
interface: ISwScene
member: FloorReflections
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
  - floorreflections
  - iswscene
  - sw
  - reflections
  - boolean
readonly: null
---

# ISwScene.FloorReflections

Gets or sets whether to show reflections of the model on the scene floor.

## Signature

```csharp
System.Boolean FloorReflections {get; set;}
```
## Parameters

None.

## Return Value

True to show reflections, false to not

## Remarks

This property is valid only if
ISwScene::FloorShadows
is set to true.

## Examples

- ISwScene (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwScene)