---
type: method
interface: IConfiguration
member: GetDisplayStates
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.ApplyDisplayState
  - IConfiguration.CopyDisplayStateFromConfiguration
  - IConfiguration.CreateDisplayState
  - IConfiguration.GetDisplayStateBodyProperties
  - IConfiguration.GetDisplayStateComponentProperties
  - IConfiguration.GetDisplayStateComponentVisibility
  - IConfiguration.GetDisplayStateFaceProperties
  - IConfiguration.GetDisplayStateFeatureProperties
  - IConfiguration.GetDisplayStateProperties
  - IConfiguration.GetDisplayStatesCount
  - IConfiguration.IGetDisplayStates
  - IConfiguration.RenameDisplayState
  - IConfigurationManager.LinkDisplayStatesToConfigurations
keywords:
  - display
  - states
  - getdisplaystates
  - iconfiguration
  - configuration
  - object
  - add
  - delete
  - appearances
  - specific
  - vb
  - net
  - vba
  - visibilities
  - components
---

# IConfiguration.GetDisplayStates

Gets the names of the display states for this configuration.

## Signature

```csharp
System.Object GetDisplayStates()
```
## Parameters

None.

## Return Value

Array of the names of the display states for this configuration

## Remarks

The first name in the list is the active display state. If more than one display state is active in the current model, call
IComponent2::ReferencedDisplayState
to obtain the active display state for each component in the model that references this configuration.

## Examples

- Add and Delete Appearances from Specific Display States (C#) (Add_and_Delete_Materials_from_Specific_Display_States_Example_CSharp.htm)
- Add and Delete Appearances from Specific Display States (VB.NET) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VBNET.htm)
- Add and Delete Appearances from Specific Display States (VBA) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VB.htm)
- Get Display States and Visibilities of Components (C#) (Get_Display_State_Names_and_Visibilites_of_Components_Example_CSharp.htm)
- Get Display States and Visibilities of Components (VB.NET) (Get_Display_State_Names_and_Visibilites_of_Components_Example_VBNET.htm)
- Get Display States and Visibilities of Components (VBA) (Get_Display_State_Names_and_Visibilites_of_Components_Example_VB.htm)

## See Also

- `IConfiguration.ApplyDisplayState`
- `IConfiguration.CopyDisplayStateFromConfiguration`
- `IConfiguration.CreateDisplayState`
- `IConfiguration.GetDisplayStateBodyProperties`
- `IConfiguration.GetDisplayStateComponentProperties`
- `IConfiguration.GetDisplayStateComponentVisibility`
- `IConfiguration.GetDisplayStateFaceProperties`
- `IConfiguration.GetDisplayStateFeatureProperties`
- `IConfiguration.GetDisplayStateProperties`
- `IConfiguration.GetDisplayStatesCount`
- `IConfiguration.IGetDisplayStates`
- `IConfiguration.RenameDisplayState`
- `IConfigurationManager.LinkDisplayStatesToConfigurations`