---
type: method
interface: IComponent2
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
    description: Pointer to the ITexture object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetTexture
  - IComponent2.RemoveTexture
  - IComponent2.RemoveTextureByDisplayState
  - IComponent2.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
keywords:
  - texture
  - see
  - also
  - itexture
  - components
  - icomponent2
  - settexture
  - component2
  - config
  - name
  - string
  - boolean
---

# IComponent2.SetTexture

Applies texture to this component in the specified configuration.

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
- `TextureIn` (Texture): Pointer to the ITexture object

## Return Value

True if texture is applied, false if not

## See Also

- `IComponent2.GetTexture`
- `IComponent2.RemoveTexture`
- `IComponent2.RemoveTextureByDisplayState`
- `IComponent2.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`