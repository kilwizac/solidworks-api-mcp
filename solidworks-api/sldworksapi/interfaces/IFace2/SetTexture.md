---
type: method
interface: IFace2
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
    description: ITexture
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetTexture
  - IFace2.HasTextureCoordinates
  - IFace2.RemoveTexture
  - IFace2.RemoveTextureByDisplayState
  - IFace2.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
keywords:
  - texture
  - see
  - also
  - itexture
  - faces
  - face
  - iface2
  - settexture
  - face2
  - config
  - name
  - string
  - boolean
  - change
  - specified
  - configuration
  - vba
  - vb
  - net
---

# IFace2.SetTexture

Applies texture to this face in the specified configuration.

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
- `TextureIn` (Texture): ITexture

## Return Value

True if texture is applied, false if not

## Examples

- Change Texture on Face in Specified Configuration (VBA) (Change_Texture_on_Face_in_Specified_Configuration_Example_VB.htm)
- Change Texture on Face in Specified Configuration (VB.NET) (Change_Texture_on_Face_in_Specified_Configuration_Example_VBNET.htm)
- Change Texture on Face in Specified Configuration (C#) (Change_Texture_on_Face_in_Specified_Configuration_Example_CSharp.htm)

## See Also

- `IFace2.GetTexture`
- `IFace2.HasTextureCoordinates`
- `IFace2.RemoveTexture`
- `IFace2.RemoveTextureByDisplayState`
- `IFace2.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`