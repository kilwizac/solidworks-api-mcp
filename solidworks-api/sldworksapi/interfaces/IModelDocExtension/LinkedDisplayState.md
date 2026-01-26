---
type: property
interface: IModelDocExtension
member: LinkedDisplayState
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IConfiguration.ApplyDisplayState
  - IConfiguration.CopyDisplayStateFromConfiguration
  - IConfiguration.CreateDisplayState
  - IConfiguration.DeleteDisplayState
  - IConfiguration.GetDisplayStates
  - IConfiguration.GetDisplayStatesCount
  - IConfigurationManager.LinkDisplayStatesToConfigurations
  - IModelDocExtension.PurgeDisplayState
keywords:
  - display
  - states
  - parts
  - see
  - also
  - ipartdoc
  - linkeddisplaystate
  - imodeldocextension
  - model
  - doc
  - extension
  - linked
  - state
  - boolean
  - create
  - unlink
  - purge
  - part
  - vb
  - net
  - vba
readonly: null
---

# IModelDocExtension.LinkedDisplayState

Gets or sets whether a display state is linked in this part.

## Signature

```csharp
System.Boolean LinkedDisplayState {get; set;}
```
## Parameters

None.

## Return Value

True if linked, false if not linked

## Examples

- Create, Unlink, and Purge Display States in Part (VB.NET) (Create,_Unlink,_and_Purge_Display_States_in_Part_Example_VBNET.htm)
- Create, Unlink, and Purge Display States in Part (VBA) (Create,_Unlink,_and_Purge_Display_States_in_Part_Example_VB.htm)
- Create, Unlink, and Purge Display States in Part (C#) (Create,_Unlink,_and_Purge_Display_States_in_Part_Example_CSharp.htm)

## See Also

- `IConfiguration.ApplyDisplayState`
- `IConfiguration.CopyDisplayStateFromConfiguration`
- `IConfiguration.CreateDisplayState`
- `IConfiguration.DeleteDisplayState`
- `IConfiguration.GetDisplayStates`
- `IConfiguration.GetDisplayStatesCount`
- `IConfigurationManager.LinkDisplayStatesToConfigurations`
- `IModelDocExtension.PurgeDisplayState`