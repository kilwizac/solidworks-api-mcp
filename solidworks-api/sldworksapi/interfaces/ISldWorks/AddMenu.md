---
type: method
interface: ISldWorks
member: AddMenu
returns: System.Int32
parameters:
  -
    name: DocType
    type: System.Int32
    description: Document type to add the menu item as defined by swDocumentTypes_e
  -
    name: Menu
    type: System.String
    description: Name of menu item to add, including any parent menu names, e.g., subMenuString@menuString
  -
    name: Position
    type: System.Int32
    description: Specifies the position where to add the new menu item; 0 = first position and 1 = end of the parent menu (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddMenuPopupItem2
  - ISldWorks.AddToolbar4
  - ISldWorks.AddToolbarCommand2
  - ISldWorks.GetLocalizedMenuName
  - ISldWorks.RemoveFromMenu
  - ISldWorks.RemoveFromPopupMenu
  - ISldWorks.RemoveMenu
  - ISldWorks.RemoveMenuPopupItem2
  - ISldWorks.RemoveToolbar2
keywords:
  - menus
  - add
  - dlls
  - addmenu
  - isldworks
  - sld
  - works
  - menu
  - doc
  - type
  - int32
  - string
  - position
  - item
  - vb
  - net
---

# ISldWorks.AddMenu

Adds a menu item to a SOLIDWORKS menu for DLL applications.

## Signature

```csharp
System.Int32 AddMenu( 
   System.Int32
DocType
,
   System.String
Menu
,
   System.Int32
Position
)
```
## Parameters

- `DocType` (System.Int32): Document type to add the menu item as defined by swDocumentTypes_e
- `Menu` (System.String): Name of menu item to add, including any parent menu names, e.g., subMenuString@menuString
- `Position` (System.Int32): Specifies the position where to add the new menu item; 0 = first position and 1 = end of the parent menu (see Remarks )

## Return Value

1 if menu item is added successfully added or 0 if adding the menu item failed

## Remarks

If the name of a parent menu is not specified in Menu, then:
the menu item appears on the
Tools
menu below the
XPress products
menu item.
Position is ignored.
Menus items are automatically created at the end of the parent menu when using
ISldWorks::AddMenuItem5
. Therefore, if your menu structure is created using sequential calls to SldWorks::AddMenuItem5, then all the menu items are positioned based on their order of creation.
This method is only required when a menu needs to be placed into an existing menu at a specific position.
Read about
Add-in Shortcut Menus
.

## Examples

- Add Menu and Menu Item (C#) (Add_Menu_and_Menu_Item_Example_CSharp.htm)
- Add Menu and Menu Item (VB.NET) (Add_Menu_and_Menu_Item_Example_VBNET.htm)

## See Also

- `ISldWorks.AddMenuPopupItem2`
- `ISldWorks.AddToolbar4`
- `ISldWorks.AddToolbarCommand2`
- `ISldWorks.GetLocalizedMenuName`
- `ISldWorks.RemoveFromMenu`
- `ISldWorks.RemoveFromPopupMenu`
- `ISldWorks.RemoveMenu`
- `ISldWorks.RemoveMenuPopupItem2`
- `ISldWorks.RemoveToolbar2`