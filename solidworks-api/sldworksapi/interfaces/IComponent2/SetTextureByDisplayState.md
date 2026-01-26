---
type: method
interface: IComponent2
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
  - assemblies
related:
  - IComponent2.GetTexture
  - IComponent2.RemoveTexture
  - IComponent2.RemoveTextureByDisplayState
  - IComponent2.SetTexture
  - IModelDocExtension.CreateTexture
keywords:
  - settexturebydisplaystate
  - icomponent2
  - component2
  - texture
  - display
  - state
  - name
  - string
  - boolean
  - apply
  - remove
  - component
  - vb
  - net
  - vba
---

# IComponent2.SetTextureByDisplayState

Sets the texture applied to this component in the specified display state.

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

True if texture is applied to the component, false if not

## Examples

- Apply and Remove Texture To and From Component By Display State (C#) (Apply_and_Remove_Texture_By_Component_Display_State_Example_CSharp.htm)
- Apply and Remove Texture To and From Component By Display State (VB.NET) (Apply_and_Remove_Texture_By_Component_Display_State_Example_VBNET.htm)
- Apply and Remove Texture To and From Component By Display State (VBA) (Apply_and_Remove_Texture_By_Component_Display_State_Example_VB.htm)

## See Also

- `IComponent2.GetTexture`
- `IComponent2.RemoveTexture`
- `IComponent2.RemoveTextureByDisplayState`
- `IComponent2.SetTexture`
- `IModelDocExtension.CreateTexture`