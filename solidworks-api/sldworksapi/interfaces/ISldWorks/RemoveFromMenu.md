---
type: method
interface: ISldWorks
member: RemoveFromMenu
returns: System.Boolean
parameters:
  -
    name: CommandID
    type: System.Int32
    description: Command ID of the command to remove as defined by swCommands_e
  -
    name: DocumentType
    type: System.Int32
    description: Document types in which to remove the command as defined in swDocumentTypes_e
  -
    name: Option
    type: System.Int32
    description: 1 = Menu 2 = Toolbar 3 = Both menu and toolbar
  -
    name: RemoveParentMenu
    type: System.Boolean
    description: True to remove the specified command's parent menu, false to not NOTE: This parameter is specific to menus only; it does not affect toolbars.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddMenu
  - ISldWorks.AddMenuItem3
  - ISldWorks.AddMenuPopupItem2
  - ISldWorks.AddToolbar4
  - ISldWorks.AddToolbarCommand2
  - ISldWorks.DragToolbarButton
  - ISldWorks.HideToolbar2
  - ISldWorks.RemoveMenu
  - ISldWorks.RemoveMenuPopupItem2
  - ISldWorks.RemoveToolbar2
keywords:
  - menus
  - items
  - remove
  - menu
  - toolbar
  - buttons
  - removefrommenu
  - isldworks
  - sld
  - works
  - command
  - id
  - int32
  - document
  - type
  - option
  - parent
  - boolean
  - commands
  - vba
---

# ISldWorks.RemoveFromMenu

Removes:

## Signature

```csharp
System.Boolean RemoveFromMenu( 
   System.Int32
CommandID
,
   System.Int32
DocumentType
,
   System.Int32
Option
,
   System.Boolean
RemoveParentMenu
)
```
## Parameters

- `CommandID` (System.Int32): Command ID of the command to remove as defined by swCommands_e
- `DocumentType` (System.Int32): Document types in which to remove the command as defined in swDocumentTypes_e
- `Option` (System.Int32): 1 = Menu 2 = Toolbar 3 = Both menu and toolbar
- `RemoveParentMenu` (System.Boolean): True to remove the specified command's parent menu, false to not NOTE: This parameter is specific to menus only; it does not affect toolbars.

## Return Value

True if the specified items are removed, false if not

## Remarks

This method does not affect context-sensitive menus (also called shortcut menus and pop-up menus); this command only affects main frame menus and toolbars. To remove commands and parent menus from context-sensitive menus, use
ISldWorks::RemoveFromPopupMenu
.
The specified items are removed after this method executes, and their removal can be seen immediately.
This method is not persistent across SOLIDWORKS Design sessions.

## Examples

- Remove Menu Commands, Menus, and Toolbar Buttons (VBA) (Remove_Menu_Commands_Menus_and_Toolbar_Buttons_Example_VB.htm)

## See Also

- `ISldWorks.AddMenu`
- `ISldWorks.AddMenuItem3`
- `ISldWorks.AddMenuPopupItem2`
- `ISldWorks.AddToolbar4`
- `ISldWorks.AddToolbarCommand2`
- `ISldWorks.DragToolbarButton`
- `ISldWorks.HideToolbar2`
- `ISldWorks.RemoveMenu`
- `ISldWorks.RemoveMenuPopupItem2`
- `ISldWorks.RemoveToolbar2`