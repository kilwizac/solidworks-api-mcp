---
type: property
interface: ISwScene
member: FloorDepth
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
  - floordepth
  - iswscene
  - sw
  - depth
  - double
readonly: null
---

# ISwScene.FloorDepth

Gets or sets the depth of the scene floor.

## Signature

```csharp
System.Double FloorDepth {get; set;}
```
## Parameters

None.

## Return Value

Depth of the scene floor

## Remarks

The setting of this property is valid only if
ISwScene::FloorAutoSize
is false.