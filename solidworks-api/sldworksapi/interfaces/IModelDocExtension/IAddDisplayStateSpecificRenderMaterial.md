---
type: method
interface: IModelDocExtension
member: IAddDisplayStateSpecificRenderMaterial
returns: System.Boolean
parameters:
  -
    name: PRenderMaterial
    type: RenderMaterial
    description: Material to add
  -
    name: DisplayStateOption
    type: System.Int32
    description: Display states as defined in swDisplayStateOpts_e
  -
    name: DisplayStateCount
    type: System.Int32
    description: Number of display states (see Remarks )
  -
    name: DisplayStateNames
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of the names of the display states to which to add material VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: PWMaterialId1
    type: System.Int32
    description: First ID of material
  -
    name: PWMaterialId2
    type: System.Int32
    description: Second ID of material
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.AddDisplayStateSpecificRenderMaterial
  - IModelDocExtension.DeleteDisplayStateSpecificRenderMaterial
  - IModelDocExtension.IDeleteDisplayStateSpecificRenderMaterial
  - IRenderMaterial
keywords:
  - display
  - states
  - material
  - appearances
  - add
  - render
  - iadddisplaystatespecificrendermaterial
  - imodeldocextension
  - model
  - doc
  - extension
  - state
  - specific
  - option
  - int32
  - count
  - names
  - string
  - pw
  - id1
  - id2
  - boolean
---

# IModelDocExtension.IAddDisplayStateSpecificRenderMaterial

Adds the specified material to the specified display states in the active configuration and returns the IDs assigned to that material.

## Signature

```csharp
System.Boolean IAddDisplayStateSpecificRenderMaterial( 
   RenderMaterial
PRenderMaterial
,
   System.Int32
DisplayStateOption
,
   System.Int32
DisplayStateCount
,
   ref System.String
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

- `PRenderMaterial` (RenderMaterial): Material to add
- `DisplayStateOption` (System.Int32): Display states as defined in swDisplayStateOpts_e
- `DisplayStateCount` (System.Int32): Number of display states (see Remarks )
- `DisplayStateNames` (System.String): in-process, unmanaged C++: Pointer to an array of the names of the display states to which to add material VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `PWMaterialId1` (System.Int32): First ID of material
- `PWMaterialId2` (System.Int32): Second ID of material

## Return Value

True if material is added, false if not

## Remarks

Before calling this method, call
IConfiguration::GetDisplayStatesCount
to get DisplayStateCount.

## See Also

- `IModelDocExtension.AddDisplayStateSpecificRenderMaterial`
- `IModelDocExtension.DeleteDisplayStateSpecificRenderMaterial`
- `IModelDocExtension.IDeleteDisplayStateSpecificRenderMaterial`
- `IRenderMaterial`