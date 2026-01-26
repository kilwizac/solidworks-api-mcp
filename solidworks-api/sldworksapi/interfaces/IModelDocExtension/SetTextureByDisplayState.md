---
type: method
interface: IModelDocExtension
member: SetTextureByDisplayState
returns: System.Boolean
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Name of display state
  -
    name: TextureIn
    type: Texture
    description: Texture
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.CreateTexture
  - IModelDocExtension.GetTexture
  - IModelDocExtension.RemoveTexture2
  - IModelDocExtension.RemoveTextureByDisplayState
  - IModelDocExtension.SetTexture
keywords:
  - settexturebydisplaystate
  - imodeldocextension
  - model
  - doc
  - extension
  - texture
  - display
  - state
  - name
  - string
  - boolean
  - apply
  - remove
  - removed
  - vb
  - net
  - vba
---

# IModelDocExtension.SetTextureByDisplayState

Sets the texture applied to this model in the specified display state.

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

- `DisplayStateName` (System.String): Name of display state
- `TextureIn` (Texture): Texture

## Return Value

True if texture is set on the model, false if not

## Examples

- Apply and Remove Texture To and From Model by Display State (C#) (Apply_and_Remove_Texture_By_Model_Display_State_Example_CSharp.htm)
- Apply and Removed Texture To and From Model By Display State (VB.NET) (Apply_and_Remove_Texture_By_Model_Display_State_Example_VBNET.htm)
- Apply and Remove Texture To and From Model By Display State (VBA) (Apply_and_Remove_Texture_By_Model_Display_State_Example_VB.htm)

## See Also

- `IModelDocExtension.CreateTexture`
- `IModelDocExtension.GetTexture`
- `IModelDocExtension.RemoveTexture2`
- `IModelDocExtension.RemoveTextureByDisplayState`
- `IModelDocExtension.SetTexture`