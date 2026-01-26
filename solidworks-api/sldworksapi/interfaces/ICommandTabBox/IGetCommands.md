---
type: method
interface: ICommandTabBox
member: IGetCommands
returns: System.Int32
parameters:
  -
    name: CommandIDs
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of command IDs (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: TextDisplayStyles
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array the text display styles for the buttons as defined in swCommandTabButtonTextDisplay_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandTabBox.GetCommands
keywords:
  - igetcommands
  - icommandtabbox
  - command
  - tab
  - box
  - commands
  - ds
  - int32
  - text
  - display
  - styles
---

# ICommandTabBox.IGetCommands

Gets the buttons' Command IDs, text display styles, and number of commands on the CommandManager tab box.

## Signature

```csharp
System.Int32 IGetCommands( 
   out System.Int32
CommandIDs
,
   out System.Int32
TextDisplayStyles
)
```
## Parameters

- `CommandIDs` (System.Int32): in-process, unmanaged C++: Pointer to an array of command IDs (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `TextDisplayStyles` (System.Int32): in-process, unmanaged C++: Pointer to an array the text display styles for the buttons as defined in swCommandTabButtonTextDisplay_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method

## Return Value

Number of buttons on this CommandManager tab box

## See Also

- `ICommandTabBox.GetCommands`