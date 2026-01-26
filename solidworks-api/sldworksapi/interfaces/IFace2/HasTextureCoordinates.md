---
type: method
interface: IFace2
member: HasTextureCoordinates
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetSurface
  - IFace2.GetTessTextures
  - IFace2.GetTexture
  - IFace2.RemoveTexture2
  - IFace2.RemoveTextureByDisplayState
  - IFace2.SetTexture
  - IFace2.SetTextureByDisplayState
keywords:
  - hastexturecoordinates
  - iface2
  - face2
  - has
  - texture
  - coordinates
  - boolean
---

# IFace2.HasTextureCoordinates

Gets whether this face has texture coordinates.

## Signature

```csharp
System.Boolean HasTextureCoordinates()
```
## Parameters

None.

## Return Value

True if texture coordinates exist, false if not

## Remarks

Call this method before calling
IFace2::GetTessTriStripTextures
.
Texture coordinates are generated only when mapping type is set to surface.

## See Also

- `IFace2.GetSurface`
- `IFace2.GetTessTextures`
- `IFace2.GetTexture`
- `IFace2.RemoveTexture2`
- `IFace2.RemoveTextureByDisplayState`
- `IFace2.SetTexture`
- `IFace2.SetTextureByDisplayState`