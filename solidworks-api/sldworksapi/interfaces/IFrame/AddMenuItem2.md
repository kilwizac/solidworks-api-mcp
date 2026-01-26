---
type: method
interface: IFrame
member: AddMenuItem2
returns: System.Boolean
parameters:
  -
    name: Menu
    type: System.String
    description: Name of the menu to which to add this menu item
  -
    name: Item
    type: System.String
    description: Name of menu item (including accelerator key "&"); if Item is null or empty, then this method adds a separator
  -
    name: Position
    type: System.Int32
    description: Position at which to add the new menu item; the first item is at position 0; if Position is 1, the new menu item is added to the end of the list
  -
    name: CallbackFcnAndModule
    type: System.String
    description: Function called when user clicks the menu item (see Remarks )
  -
    name: BitmapFileName
    type: System.String
    description: Path and filename of the bitmap for the menu item
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.AddMenu
  - IFrame.AddMenuPopupIcon
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
  - addmenuitem2
  - iframe
  - frame
  - add
  - menu
  - item2
  - string
  - item
  - position
  - int32
  - callback
  - fcn
  - module
  - bitmap
  - file
  - name
  - boolean
---

# IFrame.AddMenuItem2

Adds a menu item and bitmap or a separator to an existing menu.

## Signature

```csharp
System.Boolean AddMenuItem2( 
   System.String
Menu
,
   System.String
Item
,
   System.Int32
Position
,
   System.String
CallbackFcnAndModule
,
   System.String
BitmapFileName
)
```
## Parameters

- `Menu` (System.String): Name of the menu to which to add this menu item
- `Item` (System.String): Name of menu item (including accelerator key "&"); if Item is null or empty, then this method adds a separator
- `Position` (System.Int32): Position at which to add the new menu item; the first item is at position 0; if Position is 1, the new menu item is added to the end of the list
- `CallbackFcnAndModule` (System.String): Function called when user clicks the menu item (see Remarks )
- `BitmapFileName` (System.String): Path and filename of the bitmap for the menu item

## Return Value

True if menu item is added, false if not

## Remarks

This method only works for the C++ application implemented as a DLL, not as an EXE. Any function exposed as a callback from a menu item must be declared as an EXPORT or included in your .def file.
You can add a new menu item to any one of the four frames (main frame, part frame, assembly frame, or drawing frame). To do this, you must get the
IFrame
object when the desired frame is active.
For example, if you want your menu to be available when a part document is active, then call
ISldWorks::Frame
when a part is first loaded or created, and use that IFrame object to call this method. Once you add your menu to the part frame, you do not need to do it again during the current SOLIDWORKS Design session.
The CallbackFcnAndModule argument specifies which function to call when this menu item is selected by the user. The syntax is as follows:
"dllname@function@updatefunction,hintstring"
where:
dllname
Name of your library as specified in the project .def file. The actual DLL filename and the definition in the .def file must be the same.
function
Name of the function that gets called when the user clicks the menu item. This function must also be declared as an EXPORT in your .def file.
See
Add-in Callback and Enable Methods
to learn how to specify your function.
updatefunction
Optional argument that controls the state of the button. If specified, then SOLIDWORKS Design calls this function before the button is displayed. Define your updatefunction to return an integer and declare it as an EXPORT or included in your .def file. The display of the button is controlled by the return value of the function as follows:
return 0 - Menu item is unchecked and disabled.
return 1 - Menu item is unchecked and enabled. This is the default menu state if no update function is specified.
return 2 - Menu item is checked and disabled.
return 3 - Menu item is checked and enabled.
See
Add-in Callback and Enable Methods
to learn how to specify your updatefunction.
hintstring
Optional argument that contains a text hint displayed in the SOLIDWORKS Design status bar when the user moves the mouse over this menu item. If hintstring is specified, then it must be preceded by a comma. For example:
"Userdll@AddBox@checkForUserSelects,Add a box"

## See Also

- `IFrame.AddMenu`
- `IFrame.AddMenuPopupIcon`
- `IFrame.GetSubMenuCount`
- `IFrame.GetSubMenus`
- `IFrame.IGetSubMenus`
- `IFrame.RemoveMenu`
- `IFrame.RemoveMenuPopupIcon`
- `IFrame.RenameMenu`
- `ISldWorks.GetLocalizedMenuName`