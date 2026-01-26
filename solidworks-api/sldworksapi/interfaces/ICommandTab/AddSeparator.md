---
type: method
interface: ICommandTab
member: AddSeparator
returns: CommandTabBox
parameters:
  -
    name: CommandTabBoxIn
    type: CommandTabBox
    description: CommandManager tab box to which to add the separator
  -
    name: CommandID
    type: System.Int32
    description: Button before which to place the separator (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - addseparator
  - icommandtab
  - command
  - tab
  - add
  - separator
  - box
  - id
  - int32
  - create
  - commandmanager
  - boxes
  - vb
  - net
---

# ICommandTab.AddSeparator

Adds a separator to this CommandManager tab.

## Signature

```csharp
CommandTabBox AddSeparator( 
   CommandTabBox
CommandTabBoxIn
,
   System.Int32
CommandID
)
```
## Parameters

- `CommandTabBoxIn` (CommandTabBox): CommandManager tab box to which to add the separator
- `CommandID` (System.Int32): Button before which to place the separator (see Remarks )

## Return Value

New CommandManager tab box

## Remarks

The specified CommandManager tab is split into two. The left side is the original CommandManager tab box, and the right side is the new CommandManager tab box. The first button on the new CommandManager tab box is the button specified by CommandID.
If the CommandManager tab box has multiple commands with the same CommandID, then a separator is added before the first matching CommandID.
You can get the CommandID using
ICommandGroup::CommandID
or
ICommandGroup::ToolbarId
after calling
ICommandGroup::Activate
.

## Examples

- Create CommandManager Tab and Tab Boxes (VB.NET) (Create_CommandManager_Tab_and_Tab_Boxes_Example_VB.NET.htm)