---
type: method
interface: IBody2
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
  - documents
  - geometry
related:
  - IBody2.RemoveTexture
  - IBody2.RemoveTextureByDisplayState
  - IBody2.SetTexture
  - IBody2.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
keywords:
  - texture
  - see
  - also
  - itexture
  - components
  - bodies
  - ibody2
  - gettexture
  - body2
  - config
  - name
  - string
---

# IBody2.GetTexture

Gets the texture applied to this body in the specified configuration.

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

If texture is... Then retval is... Applied to this body in Config_name Pointer to ITexture object Not present NULL

## See Also

- `IBody2.RemoveTexture`
- `IBody2.RemoveTextureByDisplayState`
- `IBody2.SetTexture`
- `IBody2.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`