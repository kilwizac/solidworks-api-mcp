---
type: method
interface: IModelDocExtension
member: GetRenderMaterialsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.CreateRenderMaterial
  - IModelDocExtension.GetRenderMaterials
  - IModelDocExtension.UpdateRenderMaterialsInSceneGraph
keywords:
  - getrendermaterialscount
  - imodeldocextension
  - model
  - doc
  - extension
  - render
  - materials
  - count
  - int32
---

# IModelDocExtension.GetRenderMaterialsCount

Obsolete. Superseded by IModelDocExtension::GetRenderMaterialsCount2.

## Signature

```csharp
System.Int32 GetRenderMaterialsCount()
```
## Parameters

None.

## Return Value

Number of appearances applied to this model document

## Remarks

Call this method before calling
IModelDocExtension::IGetRenderMaterials
to get the size of the array for that method.

## See Also

- `IModelDocExtension.CreateRenderMaterial`
- `IModelDocExtension.GetRenderMaterials`
- `IModelDocExtension.UpdateRenderMaterialsInSceneGraph`