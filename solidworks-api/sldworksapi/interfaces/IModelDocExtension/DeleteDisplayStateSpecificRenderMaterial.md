---
type: method
interface: IModelDocExtension
member: DeleteDisplayStateSpecificRenderMaterial
returns: System.Boolean
parameters:
  -
    name: PWMaterialId1
    type: System.Object
    description: Array of the first IDs of the appearances to delete
  -
    name: PWMaterialId2
    type: System.Object
    description: Array of the first IDs of the appearances to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.AddDisplayStateSpecificRenderMaterial
  - IModelDocExtension.IAddDisplayStateSpecificRenderMaterial
  - IModelDocExtension.IDeleteDisplayStateSpecificRenderMaterial
  - IRenderMaterial
keywords:
  - display
  - states
  - material
  - render
  - appearances
  - delete
  - deletedisplaystatespecificrendermaterial
  - imodeldocextension
  - model
  - doc
  - extension
  - state
  - specific
  - pw
  - id1
  - object
  - id2
  - boolean
  - add
  - vb
  - net
  - vba
---

# IModelDocExtension.DeleteDisplayStateSpecificRenderMaterial

Deletes the specified appearances, using the IDs of the appearances, from the active configuration.

## Signature

```csharp
System.Boolean DeleteDisplayStateSpecificRenderMaterial( 
   System.Object
PWMaterialId1
,
   System.Object
PWMaterialId2
)
```
## Parameters

- `PWMaterialId1` (System.Object): Array of the first IDs of the appearances to delete
- `PWMaterialId2` (System.Object): Array of the first IDs of the appearances to delete

## Return Value

True if the appearances are deleted, false if not

## Remarks

Call
IRenderMaterial::GetMaterialIds
to the get IDs of the appearances added to the model, then call IModelDocExtension::DeleteDisplayStateSpecificRenderMaterial to delete the appearances.

## Examples

- Add and Delete Appearances from Specific Display States (C#) (Add_and_Delete_Materials_from_Specific_Display_States_Example_CSharp.htm)
- Add and Delete Appearances from Specific Display States (VB.NET) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VBNET.htm)
- Add and Delete Appearances from Specific Display States (VBA) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VB.htm)

## See Also

- `IModelDocExtension.AddDisplayStateSpecificRenderMaterial`
- `IModelDocExtension.IAddDisplayStateSpecificRenderMaterial`
- `IModelDocExtension.IDeleteDisplayStateSpecificRenderMaterial`
- `IRenderMaterial`