---
type: method
interface: ICommandTabBox
member: IAddCommands
returns: System.Boolean
parameters:
  -
    name: CommandIDCount
    type: System.Int32
    description: Number of buttons to add
  -
    name: CommandIDs
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of command IDs (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: TextDisplayStyles
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array the text display styles for the buttons as defined in swCommandTabButtonTextDisplay_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandTabBox.AddCommands
keywords:
  - iaddcommands
  - icommandtabbox
  - command
  - tab
  - box
  - add
  - commands
  - id
  - count
  - int32
  - ds
  - text
  - display
  - styles
  - boolean
---

# ICommandTabBox.IAddCommands

Adds buttons to this CommandManager tab box.

## Signature

```csharp
System.Boolean IAddCommands( 
   System.Int32
CommandIDCount
,
   ref System.Int32
CommandIDs
,
   ref System.Int32
TextDisplayStyles
)
```
## Parameters

- `CommandIDCount` (System.Int32): Number of buttons to add
- `CommandIDs` (System.Int32): in-process, unmanaged C++: Pointer to an array of command IDs (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `TextDisplayStyles` (System.Int32): in-process, unmanaged C++: Pointer to an array the text display styles for the buttons as defined in swCommandTabButtonTextDisplay_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the buttons are added to the CommandManager tab box, false if not

## Remarks

You can get the CommandID values using
ICommandGroup::CommandID
or
ICommandGroup::ToolbarId
after calling
ICommandGroup::Activate
.

## See Also

- `ICommandTabBox.AddCommands`