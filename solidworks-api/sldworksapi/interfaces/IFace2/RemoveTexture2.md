---
type: method
interface: IFace2
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
  - documents
  - geometry
related:
  - IFace2.GetTexture
  - IFace2.HasTextureCoordinates
  - IFace2.RemoveTextureByDisplayState
  - IFace2.SetTexture
  - IFace2.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
  - IModelDocExtension.RemoveTexture2
keywords:
  - face
  - see
  - also
  - iface2
  - texture
  - itexture
  - faces
  - removetexture2
  - face2
  - remove
  - texture2
  - config
  - name
  - string
  - boolean
  - apply
  - vba
  - vb
  - net
---

# IFace2.RemoveTexture2

Removes the texture applied to this face in the specified configuration.

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

True if texture is removed, false if not

## Examples

- Apply and Remove Texture (VBA) (Apply_and_Remove_Texture_By_Configuration_Example_VB.htm)
- Apply and Remove Texture (VB.NET) (Apply_and_Remove_Texture_By_Configuration_Example_VBNET.htm)
- Apply and Remove Texture (C#) (Apply_and_Remove_Texture_By_Configuration_Example_CSharp.htm)

## See Also

- `IFace2.GetTexture`
- `IFace2.HasTextureCoordinates`
- `IFace2.RemoveTextureByDisplayState`
- `IFace2.SetTexture`
- `IFace2.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`
- `IModelDocExtension.RemoveTexture2`