---
type: method
interface: IModelDoc2
member: AddLightToScene
returns: System.Int32
parameters:
  -
    name: LpszNewValue
    type: System.String
    description: Name to use for the light
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - lighting
  - scenes
  - scene
  - addlighttoscene
  - imodeldoc2
  - model
  - doc2
  - add
  - light
  - lpsz
  - new
  - value
  - string
  - int32
---

# IModelDoc2.AddLightToScene

Adds a light source to a scene.

## Signature

```csharp
System.Int32 AddLightToScene( 
   System.String
LpszNewValue
)
```
## Parameters

- `LpszNewValue` (System.String): Name to use for the light

## Return Value

ID of the light