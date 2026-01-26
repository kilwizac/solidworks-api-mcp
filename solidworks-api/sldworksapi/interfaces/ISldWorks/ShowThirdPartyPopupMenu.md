---
type: method
interface: ISldWorks
member: ShowThirdPartyPopupMenu
returns: System.Boolean
parameters:
  -
    name: RegisterId
    type: System.Int32
    description: ID of shortcut menu from ISldWorks::RegisterThirdPartyPopupMenu
  -
    name: Posx
    type: System.Int32
    description: x coordinate for shortcut menu
  -
    name: Posy
    type: System.Int32
    description: y coordinate for shortcut menu
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
  - showthirdpartypopupmenu
  - isldworks
  - sld
  - works
  - show
  - third
  - party
  - menu
  - register
  - id
  - int32
  - posx
  - posy
  - boolean
  - vb
  - net
---

# ISldWorks.ShowThirdPartyPopupMenu

Sets where to show a third-party pop-up (shortcut) menu.

## Signature

```csharp
System.Boolean ShowThirdPartyPopupMenu( 
   System.Int32
RegisterId
,
   System.Int32
Posx
,
   System.Int32
Posy
)
```
## Parameters

- `RegisterId` (System.Int32): ID of shortcut menu from ISldWorks::RegisterThirdPartyPopupMenu
- `Posx` (System.Int32): x coordinate for shortcut menu
- `Posy` (System.Int32): y coordinate for shortcut menu

## Return Value

True to show shortcut menu, false to not

## Remarks

Read about
Add-in Shortcut Menus
.

## Examples

- Add Shortcut Menus to Add-ins (VB.NET) (Add_Shortcut_Menus_to_Add-ins_VBNET.htm)
- Add Shortcut Menus to Add-ins (C#) (Add_Shortcut_Menus_to_Add-ins_CSharp.htm)