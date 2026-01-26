---
type: method
interface: IFace2
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
  - IBody2.SetTexture
  - IFace2.HasTextureCoordinates
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
  - gettexture
  - face2
  - config
  - name
  - string
  - change
  - specified
  - configuration
  - vba
  - vb
  - net
---

# IFace2.GetTexture

Gets the texture applied to this face in the specified configuration.

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

If texture is... Then retval is... Applied to this face in Config_name Pointer to ITexture object Not present Null

## Examples

- Change Texture on Face in Specified Configuration (VBA) (Change_Texture_on_Face_in_Specified_Configuration_Example_VB.htm)
- Change Texture on Face in Specified Configuration (VB.NET) (Change_Texture_on_Face_in_Specified_Configuration_Example_VBNET.htm)
- Change Texture on Face in Specified Configuration (C#) (Change_Texture_on_Face_in_Specified_Configuration_Example_CSharp.htm)

## See Also

- `IBody2.RemoveTexture`
- `IBody2.SetTexture`
- `IFace2.HasTextureCoordinates`
- `IFace2.RemoveTextureByDisplayState`
- `IFace2.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`