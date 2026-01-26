---
type: method
interface: IBody2
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
  - documents
  - geometry
related:
  - IBody2.GetTexture
  - IBody2.RemoveTexture
  - IBody2.SetTexture
  - IBody2.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
keywords:
  - texture
  - see
  - also
  - itexture
  - bodies
  - display
  - states
  - ibody2
  - removetexturebydisplaystate
  - body2
  - remove
  - state
  - name
  - string
  - boolean
  - apply
  - body
  - vb
  - net
  - vba
---

# IBody2.RemoveTextureByDisplayState

Removes the texture applied to this body in the specified display state.

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

True if the texture is removed from the body, false if not

## Examples

- Apply and Remove Texture By Body Display State (C#) (Apply_and_Remove_Texture_By_Body_Display_State_Example_CSharp.htm)
- Apply and Remove Texture By Body Display State (VB.NET) (Apply_and_Remove_Texture_By_Body_Display_State_Example_VBNET.htm)
- Apply and Remove Texture By Body Display State (VBA) (Apply_and_Remove_Texture_By_Body_Display_State_Example_VB.htm)

## See Also

- `IBody2.GetTexture`
- `IBody2.RemoveTexture`
- `IBody2.SetTexture`
- `IBody2.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`