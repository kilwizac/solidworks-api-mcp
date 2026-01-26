---
type: method
interface: IBody2
member: SetTexture
returns: System.Boolean
parameters:
  -
    name: Config_name
    type: System.String
    description: Name of the configuration
  -
    name: TextureIn
    type: Texture
    description: Pointer to the ITexture object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetTexture
  - IBody2.RemoveTexture
  - IBody2.RemoveTextureByDisplayState
  - IBody2.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
keywords:
  - texture
  - see
  - also
  - itexture
  - bodies
  - ibody2
  - settexture
  - body2
  - config
  - name
  - string
  - boolean
  - removetexture
  - removetexturebydisplaystate
  - settexturebydisplaystate
---

# IBody2.SetTexture

Applies texture to this body in the specified configuration.

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

- `Config_name` (System.String): Name of the configuration
- `TextureIn` (Texture): Pointer to the ITexture object

## Return Value

True if texture is applied, false if not

## Examples

- RemoveTexture Method (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBody2~RemoveTexture)
- RemoveTextureByDisplayState Method (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBody2~RemoveTextureByDisplayState)
- IBody2::SetTextureByDisplayState Method (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBody2~SetTextureByDisplayState)

## See Also

- `IBody2.GetTexture`
- `IBody2.RemoveTexture`
- `IBody2.RemoveTextureByDisplayState`
- `IBody2.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`