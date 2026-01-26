---
type: method
interface: ICommandTabBox
member: IRemoveCommands
returns: System.Boolean
parameters:
  -
    name: CommandIDCount
    type: System.Int32
    description: Number of buttons to remove from this CommandManager tab box
  -
    name: CommandIDs
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of the command IDs for the buttons you want removed from this CommandManager tab box (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandTabBox.RemoveCommands
keywords:
  - iremovecommands
  - icommandtabbox
  - command
  - tab
  - box
  - remove
  - commands
  - id
  - count
  - int32
  - ds
  - boolean
---

# ICommandTabBox.IRemoveCommands

Removes the specified buttons from this CommandManager tab box.

## Signature

```csharp
System.Boolean IRemoveCommands( 
   System.Int32
CommandIDCount
,
   ref System.Int32
CommandIDs
)
```
## Parameters

- `CommandIDCount` (System.Int32): Number of buttons to remove from this CommandManager tab box
- `CommandIDs` (System.Int32): in-process, unmanaged C++: Pointer to an array of the command IDs for the buttons you want removed from this CommandManager tab box (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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

- `ICommandTabBox.RemoveCommands`