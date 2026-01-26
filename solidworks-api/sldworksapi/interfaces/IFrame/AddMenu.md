---
type: method
interface: IFrame
member: AddMenu
returns: System.Boolean
parameters:
  -
    name: Menu
    type: System.String
    description: Name of the menu item to add; including parent menu names, e.g., subMenuString@menuString (see Remarks )
  -
    name: Position
    type: System.Int32
    description: Position of the existing menu item before which to insert the new menu item; the first menu item is at position 0; if Position is 1, the new menu item is appended to the end of the menu (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.AddMenuItem2
  - IFrame.AddMenuPopupItem
  - IFrame.AddMenuPopupItem2
  - IFrame.GetSubMenuCount
  - IFrame.GetSubMenus
  - IFrame.IGetSubMenus
  - IFrame.RemoveMenu
  - IFrame.RemoveMenuPopupIcon
  - IFrame.RenameMenu
  - ISldWorks.GetLocalizedMenuName
keywords:
  - menus
  - frames
  - addmenu
  - iframe
  - frame
  - add
  - menu
  - string
  - position
  - int32
  - boolean
---

# IFrame.AddMenu

Adds a menu item.

## Signature

```csharp
System.Boolean AddMenu( 
   System.String
Menu
,
   System.Int32
Position
)
```
## Parameters

- `Menu` (System.String): Name of the menu item to add; including parent menu names, e.g., subMenuString@menuString (see Remarks )
- `Position` (System.Int32): Position of the existing menu item before which to insert the new menu item; the first menu item is at position 0; if Position is 1, the new menu item is appended to the end of the menu (see Remarks )

## Return Value

True if menu item was successfully added, false if not

## Remarks

If the name of a parent menu name is not specified in Menu, then:
the menu item appears on the Tools menu below the
XPress products
menu item.
Position is ignored.
This method is only valid when the application is implemented as a DLL, not as an EXE.

## See Also

- `IFrame.AddMenuItem2`
- `IFrame.AddMenuPopupItem`
- `IFrame.AddMenuPopupItem2`
- `IFrame.GetSubMenuCount`
- `IFrame.GetSubMenus`
- `IFrame.IGetSubMenus`
- `IFrame.RemoveMenu`
- `IFrame.RemoveMenuPopupIcon`
- `IFrame.RenameMenu`
- `ISldWorks.GetLocalizedMenuName`