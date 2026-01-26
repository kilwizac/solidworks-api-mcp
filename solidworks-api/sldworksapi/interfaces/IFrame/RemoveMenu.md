---
type: method
interface: IFrame
member: RemoveMenu
returns: void
parameters:
  -
    name: MenuItemString
    type: System.String
    description: Name of menu item (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.AddMenu
  - IFrame.AddMenuItem2
  - IFrame.AddMenuPopupItem
  - IFrame.GetSubMenuCount
  - IFrame.GetSubMenus
  - IFrame.IGetSubMenus
  - IFrame.RenameMenu
  - ISldWorks.GetMenuStrings
keywords:
  - menus
  - frames
  - removemenu
  - iframe
  - frame
  - remove
  - menu
  - item
  - string
  - void
---

# IFrame.RemoveMenu

Removes a menu item.

## Signature

```csharp
void RemoveMenu( 
   System.String
MenuItemString
)
```
## Parameters

- `MenuItemString` (System.String): Name of menu item (see Remarks )

## Return Value

Unknown.

## Remarks

Use
ISldWorks::GetMenuStrings
to get MenuItemString.

## See Also

- `IFrame.AddMenu`
- `IFrame.AddMenuItem2`
- `IFrame.AddMenuPopupItem`
- `IFrame.GetSubMenuCount`
- `IFrame.GetSubMenus`
- `IFrame.IGetSubMenus`
- `IFrame.RenameMenu`
- `ISldWorks.GetMenuStrings`