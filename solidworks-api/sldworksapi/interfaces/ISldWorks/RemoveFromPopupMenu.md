---
type: method
interface: ISldWorks
member: RemoveFromPopupMenu
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
    name: SelectionType
    type: System.Int32
    description: Context-sensitive menu from which to remove the command as defined by swSelectType_e NOTE: Specifying swSelEVERYTHING will remove the command from all context-sensitive menus
  -
    name: RemoveParentMenu
    type: System.Boolean
    description: True to remove the specified command's any parent menus, false to not
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
  - ISldWorks.RemoveMenu
  - ISldWorks.RemoveMenuPopupItem2
keywords:
  - menus
  - remove
  - items
  - menu
  - removefrompopupmenu
  - isldworks
  - sld
  - works
  - popup
  - command
  - id
  - int32
  - document
  - type
  - selection
  - parent
  - boolean
  - commands
  - toolbar
  - buttons
  - vba
---

# ISldWorks.RemoveFromPopupMenu

Removes the specified menu item from one or all specified context-sensitive menus (also called shortcut menus and pop-up menus) for the specified document types.

## Signature

```csharp
System.Boolean RemoveFromPopupMenu( 
   System.Int32
CommandID
,
   System.Int32
DocumentType
,
   System.Int32
SelectionType
,
   System.Boolean
RemoveParentMenu
)
```
## Parameters

- `CommandID` (System.Int32): Command ID of the command to remove as defined by swCommands_e
- `DocumentType` (System.Int32): Document types in which to remove the command as defined in swDocumentTypes_e
- `SelectionType` (System.Int32): Context-sensitive menu from which to remove the command as defined by swSelectType_e NOTE: Specifying swSelEVERYTHING will remove the command from all context-sensitive menus
- `RemoveParentMenu` (System.Boolean): True to remove the specified command's any parent menus, false to not

## Return Value

Unknown.

## Remarks

The removal of the specified menu item takes affect the next time the context-sensitive menu is displayed.
To remove main frame menu commands and menus, use
ISldWorks::RemoveFromMenu
.
This method is not persistent across SOLIDWORKS Design sessions.

## Examples

- Remove Menu commands, Menus, and Toolbar Buttons (VBA) (Remove_Menu_Commands_Menus_and_Toolbar_Buttons_Example_VB.htm)

## See Also

- `ISldWorks.AddMenu`
- `ISldWorks.AddMenuItem3`
- `ISldWorks.AddMenuPopupItem2`
- `ISldWorks.RemoveMenu`
- `ISldWorks.RemoveMenuPopupItem2`