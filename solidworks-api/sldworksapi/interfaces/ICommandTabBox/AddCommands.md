---
type: method
interface: ICommandTabBox
member: AddCommands
returns: System.Boolean
parameters:
  -
    name: CommandIDs
    type: System.Object
    description: Array of command IDs for the buttons (see Remarks )
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
  - ICommandTabBox.IAddCommands
keywords:
  - addcommands
  - icommandtabbox
  - command
  - tab
  - box
  - add
  - commands
  - ds
  - object
  - text
  - display
  - styles
  - boolean
  - create
  - commandmanager
  - boxes
  - vb
  - net
---

# ICommandTabBox.AddCommands

Adds buttons to this CommandManager tab box.

## Signature

```csharp
System.Boolean AddCommands( 
   System.Object
CommandIDs
,
   System.Object
TextDisplayStyles
)
```
## Parameters

- `CommandIDs` (System.Object): Array of command IDs for the buttons (see Remarks )
- `TextDisplayStyles` (System.Object): Array of the text display styles for the buttons as defined in swCommandTabButtonTextDisplay_e

## Return Value

True if the buttons are added to the CommandManager tab box, false if not

## Remarks

You can add both CommandGroup and FlyoutGroup items to CommandManager. Populate CommandIDs by calling
IFlyoutGroup::CmdID
for FlyoutGroups and
ICommandGroup::CommandID
or
ICommandGroup::ToolbarId
after calling
ICommandGroup::Activate
for CommandGroups.

## Examples

- Create CommandManager Tab and Tab Boxes (VB.NET) (Create_CommandManager_Tab_and_Tab_Boxes_Example_VB.NET.htm)
- Create CommandManager Tab and Tab Boxes (C#) (Create_CommandManager_Tab_and_Tab_Boxes_Example_CSharp.htm)

## See Also

- `ICommandTabBox.IAddCommands`