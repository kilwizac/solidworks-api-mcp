---
type: method
interface: ISwScene
member: OffsetToGeometry
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - offsettogeometry
  - iswscene
  - sw
  - scene
  - offset
  - geometry
  - boolean
---

# ISwScene.OffsetToGeometry

Resets the floor offset.

## Signature

```csharp
System.Boolean OffsetToGeometry()
```
## Parameters

None.

## Return Value

True if successful, false if not

## Remarks

Calling this method invalidates previous calls to
ISwScene::FloorOffset
and
ISwScene::FloorOffsetDirection
.