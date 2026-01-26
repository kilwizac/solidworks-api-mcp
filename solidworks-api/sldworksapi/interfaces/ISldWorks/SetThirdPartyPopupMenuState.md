---
type: method
interface: ISldWorks
member: SetThirdPartyPopupMenuState
returns: System.Boolean
parameters:
  -
    name: RegisterId
    type: System.Int32
    description: ID of shortcut menu from ISldWorks::RegisterThirdPartyPopupMenu
  -
    name: IsActive
    type: System.Boolean
    description: True to show the shortcut menu, false to hide it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - parts
  - ui
related: []
keywords:
  - popup
  - menus
  - shortcut
  - add
  - ins
  - setthirdpartypopupmenustate
  - isldworks
  - sld
  - works
  - third
  - party
  - menu
  - state
  - register
  - id
  - int32
  - active
  - boolean
---

# ISldWorks.SetThirdPartyPopupMenuState

Sets whether to show or hide a third-party popup (shortcut) menu.

## Signature

```csharp
System.Boolean SetThirdPartyPopupMenuState( 
   System.Int32
RegisterId
,
   System.Boolean
IsActive
)
```
## Parameters

- `RegisterId` (System.Int32): ID of shortcut menu from ISldWorks::RegisterThirdPartyPopupMenu
- `IsActive` (System.Boolean): True to show the shortcut menu, false to hide it

## Return Value

True if shortcut menu is shown, false if it is hidden

## Remarks

This method is supported in C++ applications only.
Typical steps in creating and displaying your shortcut menu:
Add menu
and
add menu items
to the SOLIDWORKS main menu bar for your shortcut menu, or
add an icon to a context-sensitive menu
that displays your shortcut menu, or both.
Register
your shortcut menu.
Add
your shortcut menu items.
Show
your shortcut menu at a specific location in the SOLIDWORKS graphics area, typically from a mouse event handler.
Remove
a menu item from your shortcut menu, if desired.
Toggle the visibility of your shortcut menu.
Remove the shortcut menu
from the SOLIDWORKS main menu bar and
remove the icon from the context-sensitive menu
, if  added.