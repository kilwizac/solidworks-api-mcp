---
type: method
interface: IModelDocExtension
member: GetCommandTabs
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - ICommandManager.GetCommandTab
  - ICommandManager.GetCommandTabCount
  - ICommandManager.IGetCommandTabs
  - IModelDocExtension.ActiveCommandTab
  - IModelDocExtension.ActiveCommandTabIndex
  - IModelDocExtension.CommandTabVisible
keywords:
  - command
  - manager
  - see
  - also
  - icommandmanager
  - tabs
  - commandtab
  - icommandtab
  - getcommandtabs
  - imodeldocextension
  - model
  - doc
  - extension
  - object
  - activate
  - solidworks
  - commandmanager
  - tab
  - vba
  - vb
  - net
---

# IModelDocExtension.GetCommandTabs

Gets all of the SOLIDWORKS CommandManager tab names in this document.

## Signature

```csharp
System.Object GetCommandTabs()
```
## Parameters

None.

## Return Value

Array of CommandManager tab names

## Remarks

To activate and query the add-in CommandManager tabs, call
ICommandManager::CommandTabs
.

## Examples

- Activate SOLIDWORKS CommandManager Tab (VBA) (Activate_SOLIDWORKS_CommandManager_Tab_Example_VB.htm)
- Activate SOLIDWORKS CommandManager Tab (VB.NET) (Activate_SOLIDWORKS_CommandManager_Tab_Example_VBNET.htm)
- Activate SOLIDWORKS CommandManager Tab (C#) (Activate_SOLIDWORKS_CommandManager_Tab_Example_CSharp.htm)

## See Also

- `ICommandManager.GetCommandTab`
- `ICommandManager.GetCommandTabCount`
- `ICommandManager.IGetCommandTabs`
- `IModelDocExtension.ActiveCommandTab`
- `IModelDocExtension.ActiveCommandTabIndex`
- `IModelDocExtension.CommandTabVisible`