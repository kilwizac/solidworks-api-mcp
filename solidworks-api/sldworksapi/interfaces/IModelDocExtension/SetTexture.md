---
type: method
interface: IModelDocExtension
member: SetTexture
returns: System.Boolean
parameters:
  -
    name: Config_name
    type: System.String
    description: Name of configuration
  -
    name: TextureIn
    type: Texture
    description: Texture
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.CreateTexture
  - IModelDocExtension.GetTexture
  - IModelDocExtension.RemoveTexture2
  - IModelDocExtension.RemoveTextureByDisplayState
  - IModelDocExtension.SetTextureByDisplayState
keywords:
  - texture
  - see
  - also
  - itexture
  - settexture
  - imodeldocextension
  - model
  - doc
  - extension
  - config
  - name
  - string
  - boolean
---

# IModelDocExtension.SetTexture

Applies texture to the specified configuration.

## Signature

```csharp
System.Boolean SetTexture( 
   System.String
Config_name
,
   Texture
TextureIn
)
```
## Parameters

- `Config_name` (System.String): Name of configuration
- `TextureIn` (Texture): Texture

## Return Value

True if texture is applied, false if not

## See Also

- `IModelDocExtension.CreateTexture`
- `IModelDocExtension.GetTexture`
- `IModelDocExtension.RemoveTexture2`
- `IModelDocExtension.RemoveTextureByDisplayState`
- `IModelDocExtension.SetTextureByDisplayState`