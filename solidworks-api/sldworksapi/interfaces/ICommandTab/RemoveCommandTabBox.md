---
type: method
interface: ICommandTab
member: RemoveCommandTabBox
returns: void
parameters:
  -
    name: CommandTabBox
    type: CommandTabBox
    description: CommandManager tab box and its buttons to remove
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandTab.AddCommandTabBox
  - ICommandTab.CommandTabBoxes
  - ICommandTab.GetCommandTabBoxCount
  - ICommandTab.IGetCommandTabBoxes
keywords:
  - removecommandtabbox
  - icommandtab
  - command
  - tab
  - remove
  - box
  - void
---

# ICommandTab.RemoveCommandTabBox

Removes the specified tab box and its buttons from this CommandManager tab.

## Signature

```csharp
void RemoveCommandTabBox( 
   CommandTabBox
CommandTabBox
)
```
## Parameters

- `CommandTabBox` (CommandTabBox): CommandManager tab box and its buttons to remove

## Return Value

Unknown.

## See Also

- `ICommandTab.AddCommandTabBox`
- `ICommandTab.CommandTabBoxes`
- `ICommandTab.GetCommandTabBoxCount`
- `ICommandTab.IGetCommandTabBoxes`