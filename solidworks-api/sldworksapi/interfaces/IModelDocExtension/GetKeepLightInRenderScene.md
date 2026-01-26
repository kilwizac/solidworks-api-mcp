---
type: method
interface: IModelDocExtension
member: GetKeepLightInRenderScene
returns: System.Boolean
parameters:
  -
    name: ID
    type: System.Int32
    description: Light ID
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.SetKeepLightInRenderScene
keywords:
  - lighting
  - photoview
  - 360
  - scenes
  - getkeeplightinrenderscene
  - imodeldocextension
  - model
  - doc
  - extension
  - keep
  - light
  - render
  - scene
  - id
  - int32
  - boolean
---

# IModelDocExtension.GetKeepLightInRenderScene

Gets whether a light is kept when the scene changes.

## Signature

```csharp
System.Boolean GetKeepLightInRenderScene( 
   System.Int32
ID
)
```
## Parameters

- `ID` (System.Int32): Light ID

## Return Value

True if the light is kept when the scene changes, false if the light is deleted when the scene changes

## See Also

- `IModelDocExtension.SetKeepLightInRenderScene`