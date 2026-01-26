---
type: property
interface: IConfigurationManager
member: LinkDisplayStatesToConfigurations
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - DAssemblyDocEvents_ActiveDisplayStateChangePostNotifyEventHandler
  - DAssemblyDocEvents_ActiveDisplayStateChangePreNotifyEventHandler
  - DPartDocEvents_ActiveDisplayStateChangePostNotifyEventHandler
  - DPartDocEvents_ActiveDisplayStateChangePreNotifyEventHandler
  - IComponent2.ReferencedDisplayState
  - IConfiguration.ApplyDisplayState
  - IConfiguration.CopyDisplayStateFromConfiguration
  - IConfiguration.CreateDisplayState
  - IConfiguration.GetDisplayStates
  - IConfiguration.IGetDisplayStates
  - IModelDocExtension.LinkedDisplayState
  - IPartDoc.RemoveAllDisplayStates
keywords:
  - display
  - states
  - linkdisplaystatestoconfigurations
  - iconfigurationmanager
  - configuration
  - manager
  - link
  - configurations
  - boolean
  - vb
  - net
  - vba
readonly: null
---

# IConfigurationManager.LinkDisplayStatesToConfigurations

Gets or sets whether to link or unlink display states to or from the active configuration.

## Signature

```csharp
System.Boolean LinkDisplayStatesToConfigurations {get; set;}
```
## Parameters

None.

## Return Value

True to keep specific display states linked to the active configuration, false to unlink specific display states and make all display states available to the active configuration

## Examples

- Link Display States to Configurations (C#) (Link_Display_States_to_Configurations_Example_CSharp.htm)
- Link Display States to Configurations (VB.NET) (Link_Display_States_to_Configurations_Example_VBNET.htm)
- Link Display States to Configurations (VBA) (Link_Display_States_to_Configurations_Example_VB.htm)

## See Also

- `DAssemblyDocEvents_ActiveDisplayStateChangePostNotifyEventHandler`
- `DAssemblyDocEvents_ActiveDisplayStateChangePreNotifyEventHandler`
- `DPartDocEvents_ActiveDisplayStateChangePostNotifyEventHandler`
- `DPartDocEvents_ActiveDisplayStateChangePreNotifyEventHandler`
- `IComponent2.ReferencedDisplayState`
- `IConfiguration.ApplyDisplayState`
- `IConfiguration.CopyDisplayStateFromConfiguration`
- `IConfiguration.CreateDisplayState`
- `IConfiguration.GetDisplayStates`
- `IConfiguration.IGetDisplayStates`
- `IModelDocExtension.LinkedDisplayState`
- `IPartDoc.RemoveAllDisplayStates`