---
type: method
interface: IFeature
member: GetTexture
returns: Texture
parameters:
  -
    name: Config_name
    type: System.String
    description: Name of the configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.RemoveTexture
  - IFeature.RemoveTextureByDisplayState
  - IFeature.SetTexture
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
  - gettexture
  - config
  - name
  - string
---

# IFeature.GetTexture

Gets the texture applied to this feature in the specified configuration.

## Signature

```csharp
Texture GetTexture( 
   System.String
Config_name
)
```
## Parameters

- `Config_name` (System.String): Name of the configuration

## Return Value

If texture is... Then retval is... Applied to this feature in Cofig_name Pointer to ITexture object Not present NULL

## See Also

- `IFeature.RemoveTexture`
- `IFeature.RemoveTextureByDisplayState`
- `IFeature.SetTexture`
- `IFeature.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`