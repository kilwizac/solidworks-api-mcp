---
type: method
interface: IModelDocExtension
member: UpdateRenderMaterialsInSceneGraph
returns: void
parameters:
  -
    name: AddToSG
    type: System.Boolean
    description: True to update the appearances in the graphics area, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.AddDefaultRenderMaterial
  - IModelDocExtension.AddRenderMaterial
  - IModelDocExtension.CreateRenderMaterial
  - IModelDocExtension.DeleteRenderMaterial
  - IModelDocExtension.GetMaterial
  - IModelDocExtension.GetRenderMaterials
  - IModelDocExtension.GetRenderMaterialsCount
  - IModelDocExtension.IGetRenderMaterials
  - IRenderMaterial
keywords:
  - material
  - render
  - appearances
  - update
  - updaterendermaterialsinscenegraph
  - imodeldocextension
  - model
  - doc
  - extension
  - materials
  - scene
  - graph
  - add
  - sg
  - boolean
  - void
---

# IModelDocExtension.UpdateRenderMaterialsInSceneGraph

Sets whether to update the appearances in the graphics area in the model.

## Signature

```csharp
void UpdateRenderMaterialsInSceneGraph( 
   System.Boolean
AddToSG
)
```
## Parameters

- `AddToSG` (System.Boolean): True to update the appearances in the graphics area, false to not

## Return Value

Unknown.

## See Also

- `IModelDocExtension.AddDefaultRenderMaterial`
- `IModelDocExtension.AddRenderMaterial`
- `IModelDocExtension.CreateRenderMaterial`
- `IModelDocExtension.DeleteRenderMaterial`
- `IModelDocExtension.GetMaterial`
- `IModelDocExtension.GetRenderMaterials`
- `IModelDocExtension.GetRenderMaterialsCount`
- `IModelDocExtension.IGetRenderMaterials`
- `IRenderMaterial`