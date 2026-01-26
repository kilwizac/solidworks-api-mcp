---
type: method
interface: IModelDocExtension
member: GetMaterial
returns: RenderMaterial
parameters:
  -
    name: ID
    type: System.Int32
    description: Appearance Id
  -
    name: Configuration
    type: System.String
    description: Name of the configuration where the appearance is applied
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
  - IModelDocExtension.GetRenderMaterials
  - IModelDocExtension.GetRenderMaterialsCount
  - IModelDocExtension.IGetRenderMaterials
  - IModelDocExtension.UpdateRenderMaterialsInSceneGraph
  - IRenderMaterial
keywords:
  - appearances
  - material
  - render
  - getmaterial
  - imodeldocextension
  - model
  - doc
  - extension
  - id
  - int32
  - configuration
  - string
---

# IModelDocExtension.GetMaterial

Gets the appearance for the specified appearance ID in the specified configuration in this model document

## Signature

```csharp
RenderMaterial GetMaterial( 
   System.Int32
ID
,
   System.String
Configuration
)
```
## Parameters

- `ID` (System.Int32): Appearance Id
- `Configuration` (System.String): Name of the configuration where the appearance is applied

## Return Value

Appearance

## See Also

- `IModelDocExtension.AddDefaultRenderMaterial`
- `IModelDocExtension.AddRenderMaterial`
- `IModelDocExtension.CreateRenderMaterial`
- `IModelDocExtension.DeleteRenderMaterial`
- `IModelDocExtension.GetRenderMaterials`
- `IModelDocExtension.GetRenderMaterialsCount`
- `IModelDocExtension.IGetRenderMaterials`
- `IModelDocExtension.UpdateRenderMaterialsInSceneGraph`
- `IRenderMaterial`