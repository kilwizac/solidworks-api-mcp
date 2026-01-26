---
type: method
interface: IModelDocExtension
member: CreateRenderMaterial
returns: RenderMaterial
parameters:
  -
    name: PathName
    type: System.String
    description: Fully qualified or relative path and filename of the appearance to add to the model
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetRenderMaterials
  - IModelDocExtension.GetRenderMaterialsCount
  - IModelDocExtension.IGetRenderMaterials
  - IModelDocExtension.UpdateRenderMaterialsInSceneGraph
  - IRenderMaterial
keywords:
  - appearances
  - create
  - material
  - render
  - createrendermaterial
  - imodeldocextension
  - model
  - doc
  - extension
  - path
  - name
  - string
  - add
  - delete
  - specific
  - display
  - states
  - vb
  - net
  - vba
---

# IModelDocExtension.CreateRenderMaterial

Creates an appearance for this model.

## Signature

```csharp
RenderMaterial CreateRenderMaterial( 
   System.String
PathName
)
```
## Parameters

- `PathName` (System.String): Fully qualified or relative path and filename of the appearance to add to the model

## Return Value

Appearance

## Examples

- Add and Delete Appearances from Specific Display States (C#) (Add_and_Delete_Materials_from_Specific_Display_States_Example_CSharp.htm)
- Add and Delete Appearances from Specific Display States (VB.NET) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VBNET.htm)
- Add and Delete Appearances from Specific Display States (VBA) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VB.htm)

## See Also

- `IModelDocExtension.GetRenderMaterials`
- `IModelDocExtension.GetRenderMaterialsCount`
- `IModelDocExtension.IGetRenderMaterials`
- `IModelDocExtension.UpdateRenderMaterialsInSceneGraph`
- `IRenderMaterial`