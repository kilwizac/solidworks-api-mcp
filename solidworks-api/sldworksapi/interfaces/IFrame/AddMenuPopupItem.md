---
type: method
interface: IFrame
member: AddMenuPopupItem
returns: System.Boolean
parameters:
  -
    name: DocType
    type: System.Int32
    description: Document type to which to add the shortcut menu item
  -
    name: SelectType
    type: System.Int32
    description: Selection type to which to add the shortcut menu item
  -
    name: Item
    type: System.String
    description: Description that appears on the shortcut menu
  -
    name: CallbackFcnAndModule
    type: System.String
    description: Function called when user clicks your shortcut menu item (see Remarks )
  -
    name: CustomNames
    type: System.String
    description: Names of custom feature types (see Remarks )
  -
    name: Unused
    type: System.Int32
    description: Reserved for future use, set to 0
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related:
  - IFrame.AddMenuItem2
  - IFrame.GetSubMenuCount
  - IFrame.GetSubMenus
  - IFrame.IGetSubMenus
  - IFrame.RemoveMenu
  - IFrame.RenameMenu
keywords:
  - menus
  - frames
  - frame
  - see
  - also
  - iframe
  - addmenupopupitem
  - add
  - menu
  - popup
  - item
  - doc
  - type
  - int32
  - select
  - string
  - callback
  - fcn
  - module
  - custom
  - names
  - unused
  - boolean
---

# IFrame.AddMenuPopupItem

Obsolete. Superseded by IFrame::AddMenuPopupItem2.

## Signature

```csharp
System.Boolean AddMenuPopupItem( 
   System.Int32
DocType
,
   System.Int32
SelectType
,
   System.String
Item
,
   System.String
CallbackFcnAndModule
,
   System.String
CustomNames
,
   System.Int32
Unused
)
```
## Parameters

- `DocType` (System.Int32): Document type to which to add the shortcut menu item
- `SelectType` (System.Int32): Selection type to which to add the shortcut menu item
- `Item` (System.String): Description that appears on the shortcut menu
- `CallbackFcnAndModule` (System.String): Function called when user clicks your shortcut menu item (see Remarks )
- `CustomNames` (System.String): Names of custom feature types (see Remarks )
- `Unused` (System.Int32): Reserved for future use, set to 0

## Return Value

True if shortcut menu item was added, false if not

## Remarks

To add a separator, set the Item argument to NULL or an empty string.
If you want to create a pull-down menu, use
IFrame::AddMenu
.
This method only operates when your application is implemented as a DLL, not as an EXE. Any function exposed as a callback from a menu item must be declared as an EXPORT or included in your .def file.
You can add a new menu to any one of the four frames (main frame, part frame, assembly frame, or drawing frame). To do this, you must get the
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
Name of the function that gets called when the user clicks the button. This function must also be declared as an EXPORT in your .def file.
updatefunction
Optional argument that controls the state of the button. If specified, then SOLIDWORKS Design calls this function before the button is displayed. Define your updatefunction to return an integer and declare it as an EXPORT or included in your .def file. The display of the button is controlled by the return value of the function as follows:
return 0 - Menu item is unchecked and disabled.
return 1 - Menu item is unchecked and enabled. This is the default menu state if no update function is specified.
return 2 - Menu item is checked and disabled.
return 3 - Menu item is checked and enabled.
hintstring
Optional argument that contains a text hint displayed in the SOLIDWORKS Design status bar when the user moves the mouse over this menu option. If hintstring is specified, then it must be preceded by a comma. For example:
Userdll@AddBox@checkForUserSelects,Add a box
CustomNames is semi-colon separated list of the names of the custom feature types. This argument is applicable only if SelectType is a custom feature type (like swSelATTRIBUTES); in the case of swSelATTRIBUTES, set this field to the name of the attribute definition.

## See Also

- `IFrame.AddMenuItem2`
- `IFrame.GetSubMenuCount`
- `IFrame.GetSubMenus`
- `IFrame.IGetSubMenus`
- `IFrame.RemoveMenu`
- `IFrame.RenameMenu`