---
type: method
interface: IModelDocExtension
member: CreateTexture
returns: Texture
parameters:
  -
    name: MatName
    type: System.String
    description: Name of the texture file
  -
    name: Scale
    type: System.Double
    description: Value by which to adjust the granularity of the texture ; value between 0.001 and 1000000.00
  -
    name: Angle
    type: System.Double
    description: Value by which to adjust the rotation of the texture; value between 0.0 and 360.0
  -
    name: Blend
    type: System.Boolean
    description: True to blend the part color with the texture color, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetTexture
  - IModelDocExtension.RemoveTexture2
  - IModelDocExtension.RemoveTextureByDisplayState
  - IModelDocExtension.SetTexture
  - IModelDocExtension.SetTextureByDisplayState
keywords:
  - texture
  - see
  - also
  - itexture
  - create
  - createtexture
  - imodeldocextension
  - model
  - doc
  - extension
  - mat
  - name
  - string
  - scale
  - double
  - angle
  - blend
  - boolean
  - apply
  - remove
  - display
  - state
  - vb
  - net
  - vba
  - change
  - face
  - specified
  - configuration
---

# IModelDocExtension.CreateTexture

Creates a texture.

## Signature

```csharp
Texture CreateTexture( 
   System.String
MatName
,
   System.Double
Scale
,
   System.Double
Angle
,
   System.Boolean
Blend
)
```
## Parameters

- `MatName` (System.String): Name of the texture file
- `Scale` (System.Double): Value by which to adjust the granularity of the texture ; value between 0.001 and 1000000.00
- `Angle` (System.Double): Value by which to adjust the rotation of the texture; value between 0.0 and 360.0
- `Blend` (System.Boolean): True to blend the part color with the texture color, false to not

## Return Value

ITexture

## Examples

- Apply and Remove Texture To and From Model By Display State (VB.NET) (Apply_and_Remove_Texture_By_Model_Display_State_Example_VBNET.htm)
- Apply and Remove Texture To and From Model By Display State (C#) (Apply_and_Remove_Texture_By_Model_Display_State_Example_CSharp.htm)
- Apply and Remove Texture To and From Model By Display State (VBA) (Apply_and_Remove_Texture_By_Model_Display_State_Example_VB.htm)
- Change Texture on Face in Specified Configuration (VBA) (Change_Texture_on_Face_in_Specified_Configuration_Example_VB.htm)
- Change Texture on Face in Specified Configuration (VB.NET) (Change_Texture_on_Face_in_Specified_Configuration_Example_VBNET.htm)
- Change Texture on Face in Specified Configuration (C#) (Change_Texture_on_Face_in_Specified_Configuration_Example_CSharp.htm)

## See Also

- `IModelDocExtension.GetTexture`
- `IModelDocExtension.RemoveTexture2`
- `IModelDocExtension.RemoveTextureByDisplayState`
- `IModelDocExtension.SetTexture`
- `IModelDocExtension.SetTextureByDisplayState`