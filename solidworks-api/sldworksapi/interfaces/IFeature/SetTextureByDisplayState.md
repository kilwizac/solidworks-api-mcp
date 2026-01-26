---
type: method
interface: IFeature
member: SetTextureByDisplayState
returns: System.Boolean
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Display state name
  -
    name: TextureIn
    type: Texture
    description: Texture
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetTexture
  - IFeature.RemoveTexture
  - IFeature.RemoveTextureByDisplayState
  - IFeature.SetTexture
  - IModelDocExtension.CreateTexture
keywords:
  - feature
  - see
  - also
  - ifeature
  - texture
  - itexture
  - features
  - display
  - states
  - settexturebydisplaystate
  - state
  - name
  - string
  - boolean
---

# IFeature.SetTextureByDisplayState

Applies texture to this feature in the specified display state.

## Signature

```csharp
System.Boolean SetTextureByDisplayState( 
   System.String
DisplayStateName
,
   Texture
TextureIn
)
```
## Parameters

- `DisplayStateName` (System.String): Display state name
- `TextureIn` (Texture): Texture

## Return Value

True if the texture is applied to the feature, false if not

## See Also

- `IFeature.GetTexture`
- `IFeature.RemoveTexture`
- `IFeature.RemoveTextureByDisplayState`
- `IFeature.SetTexture`
- `IModelDocExtension.CreateTexture`