---
type: method
interface: IModelDocExtension
member: GetTexture
returns: Texture
parameters:
  -
    name: Config_name
    type: System.String
    description: Name of configuration or NULL if texture is not present
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.CreateTexture
  - IModelDocExtension.RemoveTexture2
  - IModelDocExtension.RemoveTextureByDisplayState
  - IModelDocExtension.SetTexture
  - IModelDocExtension.SetTextureByDisplayState
keywords:
  - texture
  - see
  - also
  - itexture
  - gettexture
  - imodeldocextension
  - model
  - doc
  - extension
  - config
  - name
  - string
  - remove
  - textures
  - assembly
  - components
  - vba
---

# IModelDocExtension.GetTexture

Gets the texture applied to the specified configuration.

## Signature

```csharp
Texture GetTexture( 
   System.String
Config_name
)
```
## Parameters

- `Config_name` (System.String): Name of configuration or NULL if texture is not present

## Return Value

Texture

## Examples

- Remove Textures from Assembly Components (VBA) (Remove_Textures_from_Assembly_Components_Example_VB.htm)

## See Also

- `IModelDocExtension.CreateTexture`
- `IModelDocExtension.RemoveTexture2`
- `IModelDocExtension.RemoveTextureByDisplayState`
- `IModelDocExtension.SetTexture`
- `IModelDocExtension.SetTextureByDisplayState`