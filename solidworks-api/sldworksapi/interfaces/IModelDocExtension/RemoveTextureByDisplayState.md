---
type: method
interface: IModelDocExtension
member: RemoveTextureByDisplayState
returns: System.Boolean
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Name of display state
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
  - IModelDocExtension.SetTexture
  - IModelDocExtension.SetTextureByDisplayState
keywords:
  - removetexturebydisplaystate
  - imodeldocextension
  - model
  - doc
  - extension
  - remove
  - texture
  - display
  - state
  - name
  - string
  - boolean
  - apply
  - vb
  - net
  - vba
---

# IModelDocExtension.RemoveTextureByDisplayState

Removes the texture applied to this model in the specified display state.

## Signature

```csharp
System.Boolean RemoveTextureByDisplayState( 
   System.String
DisplayStateName
)
```
## Parameters

- `DisplayStateName` (System.String): Name of display state

## Return Value

True if texture removed from model, false if not

## Examples

- Apply and Remove Texture To and From Model By Display State (C#) (Apply_and_Remove_Texture_By_Model_Display_State_Example_CSharp.htm)
- Apply and Remove Texture To and From Model By Display State (VB.NET) (Apply_and_Remove_Texture_By_Model_Display_State_Example_VBNET.htm)
- Apply and Remove Texture To and From Model By Display State (VBA) (Apply_and_Remove_Texture_By_Model_Display_State_Example_VB.htm)

## See Also

- `IModelDocExtension.CreateTexture`
- `IModelDocExtension.GetTexture`
- `IModelDocExtension.RemoveTexture2`
- `IModelDocExtension.SetTexture`
- `IModelDocExtension.SetTextureByDisplayState`