---
type: method
interface: ICommandManager
member: RemoveCommandTab
returns: System.Boolean
parameters:
  -
    name: TabToRemove
    type: CommandTab
    description: CommandManager tab , including its tab boxes and buttons, to remove
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.AddCommandTab
  - ICommandManager.CommandTabs
  - ICommandManager.GetCommandTab
  - ICommandManager.GetCommandTabCount
  - ICommandManager.IGetCommandTabs
keywords:
  - removecommandtab
  - icommandmanager
  - command
  - manager
  - remove
  - tab
  - boolean
---

# ICommandManager.RemoveCommandTab

Removes the specified CommandManager tab, including its tab boxes and buttons, }}-->from the CommandManager.

## Signature

```csharp
System.Boolean RemoveCommandTab( 
   CommandTab
TabToRemove
)
```
## Parameters

- `TabToRemove` (CommandTab): CommandManager tab , including its tab boxes and buttons, to remove

## Return Value

True if the CommandManager tab is removed, false if not

## See Also

- `ICommandManager.AddCommandTab`
- `ICommandManager.CommandTabs`
- `ICommandManager.GetCommandTab`
- `ICommandManager.GetCommandTabCount`
- `ICommandManager.IGetCommandTabs`