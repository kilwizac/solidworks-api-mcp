---
type: method
interface: IBody2
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
  - documents
  - geometry
related:
  - IBody2.GetTexture
  - IBody2.RemoveTextureByDisplayState
  - IBody2.SetTexture
  - IBody2.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
keywords:
  - texture
  - see
  - also
  - itexture
  - bodies
  - ibody2
  - removetexture
  - body2
  - remove
  - config
  - name
  - string
  - boolean
---

# IBody2.RemoveTexture

Removes the texture applied to this body in the specified configuration.

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

- `IBody2.GetTexture`
- `IBody2.RemoveTextureByDisplayState`
- `IBody2.SetTexture`
- `IBody2.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`