---
type: method
interface: IComponent2
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
  - assemblies
related:
  - IComponent2.GetModelTexture
  - IComponent2.RemoveTexture
  - IComponent2.RemoveTextureByDisplayState
  - IComponent2.SetTexture
  - IComponent2.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
keywords:
  - texture
  - see
  - also
  - itexture
  - components
  - icomponent2
  - gettexture
  - component2
  - config
  - name
  - string
---

# IComponent2.GetTexture

Gets the texture applied to this component in the specified configuration.

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

If texture is... Then retval is... Applied to this component in Config_name ITexture object Not present NULL

## See Also

- `IComponent2.GetModelTexture`
- `IComponent2.RemoveTexture`
- `IComponent2.RemoveTextureByDisplayState`
- `IComponent2.SetTexture`
- `IComponent2.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`