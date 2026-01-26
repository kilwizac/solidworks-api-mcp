---
type: method
interface: IModelDocExtension
member: RemoveTexture2
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
  - core
  - ui
related:
  - IFace2.RemoveTexture2
  - IModelDocExtension.CreateTexture
  - IModelDocExtension.GetTexture
  - IModelDocExtension.RemoveTextureByDisplayState
  - IModelDocExtension.SetTexture
  - IModelDocExtension.SetTextureByDisplayState
keywords:
  - texture
  - see
  - also
  - itexture
  - remove
  - removetexture2
  - imodeldocextension
  - model
  - doc
  - extension
  - texture2
  - config
  - name
  - string
  - boolean
  - textures
  - assembly
  - components
  - vba
---

# IModelDocExtension.RemoveTexture2

Removes the texture from the specified configuration.

## Signature

```csharp
System.Boolean RemoveTexture2( 
   System.String
Config_name
)
```
## Parameters

- `Config_name` (System.String): Name of the configuration

## Return Value

True if the texture is removed, false if not

## Examples

- Remove Textures from Assembly Components (VBA) (Remove_Textures_from_Assembly_Components_Example_VB.htm)

## See Also

- `IFace2.RemoveTexture2`
- `IModelDocExtension.CreateTexture`
- `IModelDocExtension.GetTexture`
- `IModelDocExtension.RemoveTextureByDisplayState`
- `IModelDocExtension.SetTexture`
- `IModelDocExtension.SetTextureByDisplayState`