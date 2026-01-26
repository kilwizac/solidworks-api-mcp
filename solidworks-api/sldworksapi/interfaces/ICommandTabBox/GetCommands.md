---
type: method
interface: ICommandTabBox
member: GetCommands
returns: System.Int32
parameters:
  -
    name: CommandIDs
    type: System.Object
    description: Array of command IDs for the buttons
  -
    name: TextDisplayStyles
    type: System.Object
    description: Array of the text display styles for the buttons as defined in swCommandTabButtonTextDisplay_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandTabBox.IGetCommands
keywords:
  - getcommands
  - icommandtabbox
  - command
  - tab
  - box
  - commands
  - ds
  - object
  - text
  - display
  - styles
  - int32
  - create
  - commandmanager
  - boxes
  - vb
  - net
---

# ICommandTabBox.GetCommands

Gets the buttons' command IDs, text display styles, and number of commands on the CommandManager tab box.

## Signature

```csharp
System.Int32 GetCommands( 
   out System.Object
CommandIDs
,
   out System.Object
TextDisplayStyles
)
```
## Parameters

- `CommandIDs` (System.Object): Array of command IDs for the buttons
- `TextDisplayStyles` (System.Object): Array of the text display styles for the buttons as defined in swCommandTabButtonTextDisplay_e

## Return Value

Number of buttons on this CommandManager tab box

## Examples

- Create CommandManager Tab and Tab Boxes (C#) (Create_CommandManager_Tab_and_Tab_Boxes_Example_CSharp.htm)
- Create CommandManager Tab and Tab Boxes (VB.NET) (Create_CommandManager_Tab_and_Tab_Boxes_Example_VB.NET.htm)

## See Also

- `ICommandTabBox.IGetCommands`