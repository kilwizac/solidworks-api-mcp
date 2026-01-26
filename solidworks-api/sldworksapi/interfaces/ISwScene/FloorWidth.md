---
type: property
interface: ISwScene
member: FloorWidth
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
  - floorwidth
  - iswscene
  - sw
  - width
  - double
readonly: null
---

# ISwScene.FloorWidth

Gets or sets the width of the scene floor.

## Signature

```csharp
System.Double FloorWidth {get; set;}
```
## Parameters

None.

## Return Value

Width of the scene floor

## Remarks

The setting of this property is valid only if
ISwScene::FloorAutoSize
is false.