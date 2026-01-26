---
type: method
interface: IFrame
member: RenameMenu
returns: void
parameters:
  -
    name: MenuItemString
    type: System.String
    description: Name of the menu item
  -
    name: NewName
    type: System.String
    description: New name of this menu item
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.AddMenu
  - IFrame.AddMenuItem2
  - IFrame.GetSubMenuCount
  - IFrame.GetSubMenus
  - IFrame.IGetSubMenus
  - IFrame.RemoveMenu
  - ISldWorks.GetMenuStrings
keywords:
  - menus
  - frames
  - renamemenu
  - iframe
  - frame
  - rename
  - menu
  - item
  - string
  - new
  - name
  - void
---

# IFrame.RenameMenu

Renames a menu item.

## Signature

```csharp
void RenameMenu( 
   System.String
MenuItemString
,
   System.String
NewName
)
```
## Parameters

- `MenuItemString` (System.String): Name of the menu item
- `NewName` (System.String): New name of this menu item

## Return Value

Unknown.

## Remarks

Use
ISldWorks::GetMenuStrings
to get MenuItemString.

## See Also

- `IFrame.AddMenu`
- `IFrame.AddMenuItem2`
- `IFrame.GetSubMenuCount`
- `IFrame.GetSubMenus`
- `IFrame.IGetSubMenus`
- `IFrame.RemoveMenu`
- `ISldWorks.GetMenuStrings`