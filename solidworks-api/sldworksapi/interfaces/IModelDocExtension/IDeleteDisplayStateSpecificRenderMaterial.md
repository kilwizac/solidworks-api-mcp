---
type: method
interface: IModelDocExtension
member: IDeleteDisplayStateSpecificRenderMaterial
returns: System.Boolean
parameters:
  -
    name: IdCount
    type: System.Int32
    description: Number of material IDs
  -
    name: PWMaterialId1
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of the first IDs of the material to delete VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: PWMaterialId2
    type: System.Int32
    description: VBA, VB.NET, C#, and C++/CLI: Not supported
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.AddDisplayStateSpecificRenderMaterial
  - IModelDocExtension.DeleteDisplayStateSpecificRenderMaterial
  - IModelDocExtension.IAddDisplayStateSpecificRenderMaterial
  - IRenderMaterial
keywords:
  - display
  - states
  - material
  - ideletedisplaystatespecificrendermaterial
  - imodeldocextension
  - model
  - doc
  - extension
  - delete
  - state
  - specific
  - render
  - id
  - count
  - int32
  - pw
  - id1
  - id2
  - boolean
---

# IModelDocExtension.IDeleteDisplayStateSpecificRenderMaterial

Deletes the specified materials, using the IDs of the materials, from the active configuration.

## Signature

```csharp
System.Boolean IDeleteDisplayStateSpecificRenderMaterial( 
   System.Int32
IdCount
,
   ref System.Int32
PWMaterialId1
,
   ref System.Int32
PWMaterialId2
)
```
## Parameters

- `IdCount` (System.Int32): Number of material IDs
- `PWMaterialId1` (System.Int32): in-process, unmanaged C++: Pointer to an array of the first IDs of the material to delete VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `PWMaterialId2` (System.Int32): VBA, VB.NET, C#, and C++/CLI: Not supported

## Return Value

True if the materials are deleted, false if not

## Remarks

Before calling this method, call:
IModelDocExtension::GetRenderMaterialsCount
to get the value for IdCount.
IRenderMaterial::GetMaterialIds
to the get the values for PWMaterialId1 and PWMaterialId2, the IDs of the materials added to the model.

## See Also

- `IModelDocExtension.AddDisplayStateSpecificRenderMaterial`
- `IModelDocExtension.DeleteDisplayStateSpecificRenderMaterial`
- `IModelDocExtension.IAddDisplayStateSpecificRenderMaterial`
- `IRenderMaterial`