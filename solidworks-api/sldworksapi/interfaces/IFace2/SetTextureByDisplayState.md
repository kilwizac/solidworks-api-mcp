---
type: method
interface: IFace2
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
  - documents
  - geometry
related:
  - IFace2.GetTexture
  - IFace2.HasTextureCoordinates
  - IFace2.RemoveTexture
  - IFace2.RemoveTextureByDisplayState
  - IFace2.SetTexture
  - IModelDocExtension.CreateTexture
keywords:
  - texture
  - see
  - also
  - itexture
  - faces
  - face
  - iface2
  - display
  - states
  - settexturebydisplaystate
  - face2
  - state
  - name
  - string
  - boolean
  - apply
  - remove
  - vb
  - net
  - vba
---

# IFace2.SetTextureByDisplayState

Applies texture to this face in the specified display state.

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

True if texture applied to face, false if not

## Examples

- Apply and Remove Texture By Display State (C#) (Apply_and_Remove_Texture_By_Display_State_Example_CSharp.htm)
- Apply and Remove Texture By Display State (VB.NET) (Apply_and_Remove_Texture_By_Display_State_Example_VBNET.htm)
- Apply and Remove Texture By Display State (VBA) (Apply_and_Remove_Texture_By_Display_State_Example_VB.htm)

## See Also

- `IFace2.GetTexture`
- `IFace2.HasTextureCoordinates`
- `IFace2.RemoveTexture`
- `IFace2.RemoveTextureByDisplayState`
- `IFace2.SetTexture`
- `IModelDocExtension.CreateTexture`