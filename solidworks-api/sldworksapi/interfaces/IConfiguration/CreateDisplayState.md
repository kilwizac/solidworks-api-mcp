---
type: method
interface: IConfiguration
member: CreateDisplayState
returns: System.Boolean
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Name of display state to create for this configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.ApplyDisplayState
  - IConfiguration.CopyDisplayStateFromConfiguration
  - IConfiguration.DeleteDisplayState
  - IConfiguration.GetDisplayStates
  - IConfiguration.GetDisplayStatesCount
  - IConfiguration.RenameDisplayState
  - IConfigurationManager.LinkDisplayStatesToConfigurations
  - IModelDocExtension.AddDisplayStateSpecificRenderMaterial
  - IModelDocExtension.IAddDisplayStateSpecificRenderMaterial
keywords:
  - display
  - states
  - createdisplaystate
  - iconfiguration
  - configuration
  - create
  - state
  - name
  - string
  - boolean
  - unlink
  - purge
  - part
  - vb
  - net
  - vba
  - add
  - delete
  - appearances
  - specific
---

# IConfiguration.CreateDisplayState

Creates a display state for this configuration.

## Signature

```csharp
System.Boolean CreateDisplayState( 
   System.String
DisplayStateName
)
```
## Parameters

- `DisplayStateName` (System.String): Name of display state to create for this configuration

## Return Value

True if the display state is created, false if not

## Examples

- Create, Unlink, and Purge Display States in a Part (C#) (Create,_Unlink,_and_Purge_Display_States_in_Part_Example_CSharp.htm)
- Create, Unlink, and Purge Display States in a Part (VB.NET) (Create,_Unlink,_and_Purge_Display_States_in_Part_Example_VBNET.htm)
- Create, Unlink, and Purge Display States in a Part (VBA) (Create,_Unlink,_and_Purge_Display_States_in_Part_Example_VB.htm)
- Add and Delete Appearances from Specific Display States (C#) (Add_and_Delete_Materials_from_Specific_Display_States_Example_CSharp.htm)
- Add and Delete Appearances from Specific Display States (VB.NET) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VBNET.htm)
- Add and Delete Appearances from Specific Display States (VBA) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VB.htm)

## See Also

- `IConfiguration.ApplyDisplayState`
- `IConfiguration.CopyDisplayStateFromConfiguration`
- `IConfiguration.DeleteDisplayState`
- `IConfiguration.GetDisplayStates`
- `IConfiguration.GetDisplayStatesCount`
- `IConfiguration.RenameDisplayState`
- `IConfigurationManager.LinkDisplayStatesToConfigurations`
- `IModelDocExtension.AddDisplayStateSpecificRenderMaterial`
- `IModelDocExtension.IAddDisplayStateSpecificRenderMaterial`