---
type: method
interface: ISldWorks
member: DragToolbarButtonFromCommandID
returns: System.Int32
parameters:
  -
    name: CommandID
    type: System.Int32
    description: Command ID as defined by swCommands_e
  -
    name: TargetToolbar
    type: System.Int32
    description: Toolbar as defined by swToolbar_e or if a CommandGroup toolbar, use ICommandGroup::ToolbarId
  -
    name: TargetIndex
    type: System.Int32
    description: 0-based index of the toolbar button on the native SOLIDWORKS toolbar or CommandGroup toolbar
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddToolbar4
  - ISldWorks.AddToolbarCommand2
  - ISldWorks.DragToolbarButton
  - ISldWorks.GetLastToolbarID
  - ISldWorks.GetToolbarDock2
  - ISldWorks.GetToolbarState2
  - ISldWorks.HideToolbar2
  - ISldWorks.RemoveToolbar2
  - ISldWorks.SetToolbarDock2
keywords:
  - toolbars
  - button
  - toolbar
  - dragtoolbarbuttonfromcommandid
  - isldworks
  - sld
  - works
  - drag
  - command
  - id
  - int32
  - target
  - index
---

# ISldWorks.DragToolbarButtonFromCommandID

Copies a button to a toolbar using a command ID.

## Signature

```csharp
System.Int32 DragToolbarButtonFromCommandID( 
   System.Int32
CommandID
,
   System.Int32
TargetToolbar
,
   System.Int32
TargetIndex
)
```
## Parameters

- `CommandID` (System.Int32): Command ID as defined by swCommands_e
- `TargetToolbar` (System.Int32): Toolbar as defined by swToolbar_e or if a CommandGroup toolbar, use ICommandGroup::ToolbarId
- `TargetIndex` (System.Int32): 0-based index of the toolbar button on the native SOLIDWORKS toolbar or CommandGroup toolbar

## Return Value

Index of the toolbar or -1 if the button is not added

## See Also

- `ISldWorks.AddToolbar4`
- `ISldWorks.AddToolbarCommand2`
- `ISldWorks.DragToolbarButton`
- `ISldWorks.GetLastToolbarID`
- `ISldWorks.GetToolbarDock2`
- `ISldWorks.GetToolbarState2`
- `ISldWorks.HideToolbar2`
- `ISldWorks.RemoveToolbar2`
- `ISldWorks.SetToolbarDock2`