---
type: method
interface: ISldWorks
member: RemoveItemFromThirdPartyPopupMenu
returns: System.Boolean
parameters:
  -
    name: RegisterId
    type: System.Int32
    description: ID of the shortcut menu from ISldWorks::RegisterThirdPartyPopupMenu
  -
    name: DocType
    type: System.Int32
    description: ID of the shortcut menu from ISldWorks::RegisterThirdPartyPopupMenu
  -
    name: Item
    type: System.String
    description: Document type where to display the shortcut menu, as defined in swDocumentTypes_e
  -
    name: IconIndex
    type: System.Int32
    description: Document type where to display the shortcut menu, as defined in swDocumentTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - parts
  - ui
related:
  - ISldWorks.AddItemToThirdPartyPopupMenu
  - ISldWorks.AddItemToThirdPartyPopupMenu2
  - ISldWorks.SetThirdPartyPopupMenuState
  - ISldWorks.ShowThirdPartyPopupMenu
keywords:
  - popup
  - menus
  - shortcut
  - add
  - ins
  - removeitemfromthirdpartypopupmenu
  - isldworks
  - sld
  - works
  - remove
  - item
  - third
  - party
  - menu
  - register
  - id
  - int32
  - doc
  - type
  - string
  - icon
  - index
  - boolean
  - vb
  - net
---

# ISldWorks.RemoveItemFromThirdPartyPopupMenu

Removes a menu item and icon from a third-party pop-up (shortcut) menu.

## Signature

```csharp
System.Boolean RemoveItemFromThirdPartyPopupMenu( 
   System.Int32
RegisterId
,
   System.Int32
DocType
,
   System.String
Item
,
   System.Int32
IconIndex
)
```
## Parameters

- `RegisterId` (System.Int32): ID of the shortcut menu from ISldWorks::RegisterThirdPartyPopupMenu
- `DocType` (System.Int32): ID of the shortcut menu from ISldWorks::RegisterThirdPartyPopupMenu
- `Item` (System.String): Document type where to display the shortcut menu, as defined in swDocumentTypes_e
- `IconIndex` (System.Int32): Document type where to display the shortcut menu, as defined in swDocumentTypes_e

## Return Value

True if the shortcut menu item or icon is removed, false if not

## Remarks

To remove:
a menu item, specify a valid name for Item only. If you specify both Item and IconIndex, only Item is evaluated; IconIndex is ignored.
a menu bar icon, specify an empty string for Item and pass the 1-based index value of the icon for IconIndex.
Read about
Add-in Shortcut Menus
.

## Examples

- Add Shortcut Menus to Add-ins (VB.NET) (Add_Shortcut_Menus_to_Add-ins_VBNET.htm)
- Add Shortcut Menus to Add-ins (C#) (Add_Shortcut_Menus_to_Add-ins_CSharp.htm)

## See Also

- `ISldWorks.AddItemToThirdPartyPopupMenu`
- `ISldWorks.AddItemToThirdPartyPopupMenu2`
- `ISldWorks.SetThirdPartyPopupMenuState`
- `ISldWorks.ShowThirdPartyPopupMenu`