---
type: method
interface: IModelDocExtension
member: AddDisplayStateSpecificRenderMaterial
returns: System.Boolean
parameters:
  -
    name: PRenderMaterial
    type: RenderMaterial
    description: Appearance to add
  -
    name: DisplayStateOption
    type: System.Int32
    description: Display states as defined in swDisplayStateOpts_e
  -
    name: DisplayStateNames
    type: System.Object
    description: Names of display states to which to add the appearance
  -
    name: PWMaterialId1
    type: System.Int32
    description: First ID of appearance
  -
    name: PWMaterialId2
    type: System.Int32
    description: Second ID of appearance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IConfiguration.CreateDisplayState
  - IModelDocExtension.DeleteDisplayStateSpecificRenderMaterial
  - IModelDocExtension.IAddDisplayStateSpecificRenderMaterial
  - IModelDocExtension.IDeleteDisplayStateSpecificRenderMaterial
  - IRenderMaterial
keywords:
  - display
  - states
  - material
  - appearances
  - add
  - render
  - adddisplaystatespecificrendermaterial
  - imodeldocextension
  - model
  - doc
  - extension
  - state
  - specific
  - option
  - int32
  - names
  - object
  - pw
  - id1
  - id2
  - boolean
  - delete
  - vb
  - net
  - vba
---

# IModelDocExtension.AddDisplayStateSpecificRenderMaterial

Adds the specified appearance to the specified display states in the active configuration and returns the IDs assigned to that appearance.

## Signature

```csharp
System.Boolean AddDisplayStateSpecificRenderMaterial( 
   RenderMaterial
PRenderMaterial
,
   System.Int32
DisplayStateOption
,
   System.Object
DisplayStateNames
,
   out System.Int32
PWMaterialId1
,
   out System.Int32
PWMaterialId2
)
```
## Parameters

- `PRenderMaterial` (RenderMaterial): Appearance to add
- `DisplayStateOption` (System.Int32): Display states as defined in swDisplayStateOpts_e
- `DisplayStateNames` (System.Object): Names of display states to which to add the appearance
- `PWMaterialId1` (System.Int32): First ID of appearance
- `PWMaterialId2` (System.Int32): Second ID of appearance

## Return Value

True if appearance is added, false if not

## Examples

- Add and Delete Appearances from Specific Display States (C#) (Add_and_Delete_Materials_from_Specific_Display_States_Example_CSharp.htm)
- Add and Delete Appearances from Specific Display States (VB.NET) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VBNET.htm)
- Add and Delete Appearances from Specific Display States (VBA) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VB.htm)

## See Also

- `IConfiguration.CreateDisplayState`
- `IModelDocExtension.DeleteDisplayStateSpecificRenderMaterial`
- `IModelDocExtension.IAddDisplayStateSpecificRenderMaterial`
- `IModelDocExtension.IDeleteDisplayStateSpecificRenderMaterial`
- `IRenderMaterial`