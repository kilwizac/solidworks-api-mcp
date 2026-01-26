---
type: method
interface: IFace2
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
  - IFace2.GetTexture
  - IFace2.RemoveTexture
  - IFace2.SetTexture
  - IFace2.SetTextureByDisplayState
  - IModelDocExtension.CreateTexture
keywords:
  - face
  - see
  - also
  - iface2
  - texture
  - itexture
  - faces
  - display
  - states
  - removetexturebydisplaystate
  - face2
  - remove
  - state
  - name
  - string
  - boolean
  - apply
  - vb
  - net
  - vba
---

# IFace2.RemoveTextureByDisplayState

Removes the texture applied to this face in the specified display state.

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

True if the texture is removed, false if not

## Examples

- Apply and Remove Texture By Display State (C#) (Apply_and_Remove_Texture_By_Display_State_Example_CSharp.htm)
- Apply and Remove Texture By Display State (VB.NET) (Apply_and_Remove_Texture_By_Display_State_Example_VBNET.htm)
- Apply and Remove Texture By Display State (VBA) (Apply_and_Remove_Texture_By_Display_State_Example_VB.htm)

## See Also

- `IFace2.GetTexture`
- `IFace2.RemoveTexture`
- `IFace2.SetTexture`
- `IFace2.SetTextureByDisplayState`
- `IModelDocExtension.CreateTexture`