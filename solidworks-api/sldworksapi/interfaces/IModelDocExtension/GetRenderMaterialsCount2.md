---
type: method
interface: IModelDocExtension
member: GetRenderMaterialsCount2
returns: System.Int32
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
  - IModelDocExtension.GetRenderMaterials2
  - IModelDocExtension.UpdateRenderMaterialsInSceneGraph
keywords:
  - appearances
  - number
  - material
  - render
  - getrendermaterialscount2
  - imodeldocextension
  - model
  - doc
  - extension
  - materials
  - count2
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

# IModelDocExtension.GetRenderMaterialsCount2

Gets the number of appearances applied to this model document in the specified display states.

## Signature

```csharp
System.Int32 GetRenderMaterialsCount2( 
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

Number of appearances

## Examples

- Add and Delete Appearances from Specific Display States (VBA) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VB.htm)
- Add and Delete Appearances from Specific Display States (VB.NET) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VBNET.htm)
- Add and Delete Appearances from Specific Display States (C#) (Add_and_Delete_Materials_from_Specific_Display_States_Example_CSharp.htm)

## See Also

- `IModelDocExtension.CreateRenderMaterial`
- `IModelDocExtension.GetRenderMaterials2`
- `IModelDocExtension.UpdateRenderMaterialsInSceneGraph`