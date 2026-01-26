---
type: method
interface: ICommandTabBox
member: RemoveCommands
returns: System.Boolean
parameters:
  -
    name: CommandIDs
    type: System.Object
    description: Array of command IDs for the buttons you want removed from this CommandManager tab box (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandTabBox.IRemoveCommands
keywords:
  - removecommands
  - icommandtabbox
  - command
  - tab
  - box
  - remove
  - commands
  - ds
  - object
  - boolean
---

# ICommandTabBox.RemoveCommands

Removes the specified buttons from this CommandManager tab box.

## Signature

```csharp
System.Boolean RemoveCommands( 
   System.Object
CommandIDs
)
```
## Parameters

- `CommandIDs` (System.Object): Array of command IDs for the buttons you want removed from this CommandManager tab box (see Remarks )

## Return Value

True if the specified buttons are removed, false if not

## Remarks

You can get the CommandID values using
ICommandGroup::CommandID
or
ICommandGroup::ToolbarId
after calling
ICommandGroup::Activate
.

## See Also

- `ICommandTabBox.IRemoveCommands`