---
type: method
interface: IBody2
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
    description: Display state name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetTexture
  - IBody2.RemoveTexture
  - IBody2.RemoveTextureByDisplayState
  - IBody2.SetTexture
  - IModelDocExtension.CreateTexture
keywords:
  - display
  - states
  - texture
  - see
  - also
  - itexture
  - bodies
  - ibody2
  - settexturebydisplaystate
  - body2
  - state
  - name
  - string
  - boolean
  - apply
  - remove
  - body
  - vb
  - net
  - vba
---

# IBody2.SetTextureByDisplayState

Sets the texture applied to this body in the specified display state.

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
- `TextureIn` (Texture): Display state name

## Return Value

True if texture applied to body, false if not

## Examples

- Apply and Remove Texture By Body Display State (C#) (Apply_and_Remove_Texture_By_Body_Display_State_Example_CSharp.htm)
- Apply and Remove Texture By Body Display State (VB.NET) (Apply_and_Remove_Texture_By_Body_Display_State_Example_VBNET.htm)
- Apply and Remove Texture By Body Display State (VBA) (Apply_and_Remove_Texture_By_Body_Display_State_Example_VB.htm)

## See Also

- `IBody2.GetTexture`
- `IBody2.RemoveTexture`
- `IBody2.RemoveTextureByDisplayState`
- `IBody2.SetTexture`
- `IModelDocExtension.CreateTexture`