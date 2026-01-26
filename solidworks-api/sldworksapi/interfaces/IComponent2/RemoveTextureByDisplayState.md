---
type: method
interface: IComponent2
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
  - assemblies
related:
  - IComponent2.GetTexture
  - IComponent2.RemoveTexture
  - IComponent2.SetTexture
  - IComponent2.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
keywords:
  - removetexturebydisplaystate
  - icomponent2
  - component2
  - remove
  - texture
  - display
  - state
  - name
  - string
  - boolean
  - apply
  - component
  - vb
  - net
  - vba
---

# IComponent2.RemoveTextureByDisplayState

Removes the texture applied to this component in the specified display state.

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

True if the texture is removed from the component, false if not

## Examples

- Apply and Remove Texture To and From Component By Display State (C#) (Apply_and_Remove_Texture_By_Component_Display_State_Example_CSharp.htm)
- Apply and Remove Texture To and From Component By Display State (VB.NET) (Apply_and_Remove_Texture_By_Component_Display_State_Example_VBNET.htm)
- Apply and Remove Texture To and From Component By Display State (VBA) (Apply_and_Remove_Texture_By_Component_Display_State_Example_VB.htm)

## See Also

- `IComponent2.GetTexture`
- `IComponent2.RemoveTexture`
- `IComponent2.SetTexture`
- `IComponent2.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`