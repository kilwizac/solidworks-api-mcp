---
type: method
interface: ICommandTab
member: AddCommandTabBox
returns: CommandTabBox
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - addcommandtabbox
  - icommandtab
  - command
  - tab
  - add
  - box
  - create
  - commandmanager
  - boxes
  - vb
  - net
---

# ICommandTab.AddCommandTabBox

Adds a tab box to this CommandManager tab.

## Signature

```csharp
CommandTabBox AddCommandTabBox()
```
## Parameters

None.

## Return Value

CommandManager tab box

## Remarks

The CommandManager tab box is always added to the end of the CommandManager tab, unless it is the first CommandManager tab box added to this CommandManager tab. If so, then this CommandManager tab box is placed at the beginning of the CommandManager tab.
The CommandManager tab box is not immediately visible. You must first
add buttons
to the CommandManager tab box.

## Examples

- Create CommandManager Tab and Tab Boxes (VB.NET) (Create_CommandManager_Tab_and_Tab_Boxes_Example_VB.NET.htm)