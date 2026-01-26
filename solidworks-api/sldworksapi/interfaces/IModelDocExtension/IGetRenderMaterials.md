---
type: method
interface: IModelDocExtension
member: IGetRenderMaterials
returns: RenderMaterial
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of appearance
docset: sldworksapi
deprecated: true
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
  - IModelDocExtension.UpdateRenderMaterialsInSceneGraph
  - IRenderMaterial
keywords:
  - appearances
  - material
  - render
  - igetrendermaterials
  - imodeldocextension
  - model
  - doc
  - extension
  - materials
  - count
  - int32
---

# IModelDocExtension.IGetRenderMaterials

Obsolete. Superseded by IModelDocExtension::GetRenderMaterials2.

## Signature

```csharp
RenderMaterial IGetRenderMaterials( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of appearance

## Return Value

unmanaged C++: Pointer to an array of appearances VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IModelDocExtension::GetRenderMaterialsCount
to get the value of Count.

## See Also

- `IModelDocExtension.AddDefaultRenderMaterial`
- `IModelDocExtension.AddRenderMaterial`
- `IModelDocExtension.CreateRenderMaterial`
- `IModelDocExtension.DeleteRenderMaterial`
- `IModelDocExtension.GetMaterial`
- `IModelDocExtension.GetRenderMaterials`
- `IModelDocExtension.UpdateRenderMaterialsInSceneGraph`
- `IRenderMaterial`