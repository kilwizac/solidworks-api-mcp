---
type: method
interface: IFeature
member: RemoveTexture
returns: System.Boolean
parameters:
  -
    name: BAllConfig
    type: System.Boolean
    description: True to remove texture from this feature in all configurations, false to remove texture from this feature in the configuration specified in Config_name only
  -
    name: Config_name
    type: System.String
    description: Name of configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetTexture
  - IFeature.RemoveTextureByDisplayState
  - IFeature.SetTexture
  - IFeature.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
keywords:
  - feature
  - see
  - also
  - ifeature
  - texture
  - itexture
  - features
  - display
  - states
  - removetexture
  - remove
  - all
  - config
  - boolean
  - name
  - string
---

# IFeature.RemoveTexture

Removes texture from this feature in either all of the configurations or only the specified configuration.

## Signature

```csharp
System.Boolean RemoveTexture( 
   System.Boolean
BAllConfig
,
   System.String
Config_name
)
```
## Parameters

- `BAllConfig` (System.Boolean): True to remove texture from this feature in all configurations, false to remove texture from this feature in the configuration specified in Config_name only
- `Config_name` (System.String): Name of configuration

## Return Value

True if texture is removed, false if not

## See Also

- `IFeature.GetTexture`
- `IFeature.RemoveTextureByDisplayState`
- `IFeature.SetTexture`
- `IFeature.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`