---
type: method
interface: IFace2
member: RemoveTexture
returns: System.Boolean
parameters:
  -
    name: Config_name
    type: System.String
    description: Name of the configuration
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetTexture
  - IFace2.RemoveTextureByDisplayState
  - IFace2.SetTexture
  - IFace2.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
keywords:
  - removetexture
  - iface2
  - face2
  - remove
  - texture
  - config
  - name
  - string
  - boolean
---

# IFace2.RemoveTexture

Obsolete. Superseded by IFace2::RemoveTexture2.

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

- `IFace2.GetTexture`
- `IFace2.RemoveTextureByDisplayState`
- `IFace2.SetTexture`
- `IFace2.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`