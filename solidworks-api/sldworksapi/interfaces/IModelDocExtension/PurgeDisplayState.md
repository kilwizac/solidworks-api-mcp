---
type: method
interface: IModelDocExtension
member: PurgeDisplayState
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
  - IModelDocExtension.LinkedDisplayState
keywords:
  - display
  - states
  - parts
  - see
  - also
  - ipartdoc
  - purgedisplaystate
  - imodeldocextension
  - model
  - doc
  - extension
  - purge
  - state
  - boolean
  - create
  - unlink
  - vb
  - net
  - part
  - vba
---

# IModelDocExtension.PurgeDisplayState

Purges identical display states so that only unique display states remain.

## Signature

```csharp
System.Boolean PurgeDisplayState()
```
## Parameters

None.

## Return Value

True if identical display states are purged, false if not

## Examples

- Create, Unlink, and Purge Display States in Parts (VB.NET) (Create,_Unlink,_and_Purge_Display_States_in_Part_Example_VBNET.htm)
- Create, Unlink, and Purge Display States in Part (VBA) (Create,_Unlink,_and_Purge_Display_States_in_Part_Example_VB.htm)
- Create, Unlink, and Purge Display States in Parts (C#) (Create,_Unlink,_and_Purge_Display_States_in_Part_Example_CSharp.htm)

## See Also

- `IConfiguration.ApplyDisplayState`
- `IConfiguration.CopyDisplayStateFromConfiguration`
- `IConfiguration.CreateDisplayState`
- `IConfiguration.DeleteDisplayState`
- `IConfiguration.GetDisplayStates`
- `IConfiguration.GetDisplayStatesCount`
- `IModelDocExtension.LinkedDisplayState`