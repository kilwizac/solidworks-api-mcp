---
type: method
interface: IFeature
member: RemoveTextureByDisplayState
returns: System.Boolean
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Display state name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetTexture
  - IFeature.RemoveTexture
  - IFeature.SetTexture
  - IFeature.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
keywords:
  - feature
  - see
  - also
  - ifeature
  - texture
  - itexture
  - features
  - removetexturebydisplaystate
  - remove
  - display
  - state
  - name
  - string
  - boolean
---

# IFeature.RemoveTextureByDisplayState

Removes texture from this feature in the specified display state.

## Signature

```csharp
System.Boolean RemoveTextureByDisplayState( 
   System.String
DisplayStateName
)
```
## Parameters

- `DisplayStateName` (System.String): Display state name

## Return Value

True to remove texture from the feature, false to not

## See Also

- `IFeature.GetTexture`
- `IFeature.RemoveTexture`
- `IFeature.SetTexture`
- `IFeature.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`