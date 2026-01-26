---
type: method
interface: IComponent2
member: RemoveTexture
returns: System.Boolean
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
  - IComponent2.GetTexture
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
  - removetexture
  - component2
  - remove
  - config
  - name
  - string
  - boolean
---

# IComponent2.RemoveTexture

Removes the texture from this component in the specified configuration.

## Signature

```csharp
System.Boolean RemoveTexture( 
   System.String
Config_name
)
```
## Parameters

- `Config_name` (System.String): Name of the configuration

## Return Value

True if texture is removed, false if not

## See Also

- `IComponent2.GetTexture`
- `IComponent2.RemoveTextureByDisplayState`
- `IComponent2.SetTexture`
- `IComponent2.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`