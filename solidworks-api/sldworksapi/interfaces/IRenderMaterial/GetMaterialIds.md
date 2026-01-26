---
type: method
interface: IRenderMaterial
member: GetMaterialIds
returns: void
parameters:
  -
    name: PWMaterialId1
    type: System.Int32
    description: First material ID
  -
    name: PWMaterialId2
    type: System.Int32
    description: Second material ID
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelDocExtension.DeleteDisplayStateSpecificRenderMaterial
  - IModelDocExtension.IDeleteDisplayStateSpecificRenderMaterial
keywords:
  - material
  - ids
  - appearances
  - getmaterialids
  - irendermaterial
  - render
  - pw
  - id1
  - int32
  - id2
  - void
---

# IRenderMaterial.GetMaterialIds

Gets the material IDs of an appearance.

## Signature

```csharp
void GetMaterialIds( 
   out System.Int32
PWMaterialId1
,
   out System.Int32
PWMaterialId2
)
```
## Parameters

- `PWMaterialId1` (System.Int32): First material ID
- `PWMaterialId2` (System.Int32): Second material ID

## Return Value

Unknown.

## Examples

- IRenderMaterial (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRenderMaterial)

## See Also

- `IModelDocExtension.DeleteDisplayStateSpecificRenderMaterial`
- `IModelDocExtension.IDeleteDisplayStateSpecificRenderMaterial`