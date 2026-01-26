---
type: method
interface: IModelDocExtension
member: GetRenderMaterials2
returns: System.Object
parameters:
  -
    name: DisplayStateOption
    type: System.Int32
    description: Display states as defined in swDisplayStateOpts_e
  -
    name: DisplayStateNames
    type: System.Object
    description: Array of display state names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.CreateRenderMaterial
  - IModelDocExtension.GetRenderMaterialsCount2
  - IModelDocExtension.UpdateRenderMaterialsInSceneGraph
keywords:
  - appearances
  - material
  - render
  - getrendermaterials2
  - imodeldocextension
  - model
  - doc
  - extension
  - materials2
  - display
  - state
  - option
  - int32
  - names
  - object
  - add
  - delete
  - specific
  - states
  - vba
  - vb
  - net
---

# IModelDocExtension.GetRenderMaterials2

Gets the appearances applied to this model document in the specified display states.

## Signature

```csharp
System.Object GetRenderMaterials2( 
   System.Int32
DisplayStateOption
,
   System.Object
DisplayStateNames
)
```
## Parameters

- `DisplayStateOption` (System.Int32): Display states as defined in swDisplayStateOpts_e
- `DisplayStateNames` (System.Object): Array of display state names

## Return Value

Array of appearances

## Examples

- Add and Delete Appearances from Specific Display States (VBA) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VB.htm)
- Add and Delete Appearances from Specific Display States (VB.NET) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VBNET.htm)
- Add and Delete Appearances from Specific Display States (C#) (Add_and_Delete_Materials_from_Specific_Display_States_Example_CSharp.htm)

## See Also

- `IModelDocExtension.CreateRenderMaterial`
- `IModelDocExtension.GetRenderMaterialsCount2`
- `IModelDocExtension.UpdateRenderMaterialsInSceneGraph`