---
type: method
interface: IModelDocExtension
member: SetKeepLightInRenderScene
returns: void
parameters:
  -
    name: ID
    type: System.Int32
    description: Light ID
  -
    name: Val
    type: System.Boolean
    description: True to keep a light when the scene changes, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetKeepLightInRenderScene
keywords:
  - lighting
  - photoview
  - 360
  - scenes
  - setkeeplightinrenderscene
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
  - val
  - boolean
  - void
---

# IModelDocExtension.SetKeepLightInRenderScene

Sets whether to keep a light when the scene changes.

## Signature

```csharp
void SetKeepLightInRenderScene( 
   System.Int32
ID
,
   System.Boolean
Val
)
```
## Parameters

- `ID` (System.Int32): Light ID
- `Val` (System.Boolean): True to keep a light when the scene changes, false to not

## Return Value

Unknown.

## See Also

- `IModelDocExtension.GetKeepLightInRenderScene`