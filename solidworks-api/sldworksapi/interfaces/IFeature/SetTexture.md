---
type: method
interface: IFeature
member: SetTexture
returns: System.Boolean
parameters:
  -
    name: BAllConfig
    type: System.Boolean
    description: True to apply texture to this feature all configurations, false to apply texture to this feature in the configuration specified in config_name only
  -
    name: Config_name
    type: System.String
    description: Name of configuration
  -
    name: TextureIn
    type: Texture
    description: Pointer to the ITexture object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetTexture
  - IFeature.RemoveTexture
  - IFeature.RemoveTextureByDisplayState
  - IFeature.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
keywords:
  - texture
  - see
  - also
  - itexture
  - features
  - feature
  - ifeature
  - settexture
  - all
  - config
  - boolean
  - name
  - string
---

# IFeature.SetTexture

Applies texture to this feature in either all configurations or only the specified configuration.

## Signature

```csharp
System.Boolean SetTexture( 
   System.Boolean
BAllConfig
,
   System.String
Config_name
,
   Texture
TextureIn
)
```
## Parameters

- `BAllConfig` (System.Boolean): True to apply texture to this feature all configurations, false to apply texture to this feature in the configuration specified in config_name only
- `Config_name` (System.String): Name of configuration
- `TextureIn` (Texture): Pointer to the ITexture object

## Return Value

True if texture is applied, false if not

## See Also

- `IFeature.GetTexture`
- `IFeature.RemoveTexture`
- `IFeature.RemoveTextureByDisplayState`
- `IFeature.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`